import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ProductResponse } from '@components/Product/Product.types';
import { host, UrlPath } from '@globals/constants';
import { fetcher, useCrud } from '@hooks/useCrud';
import { MODAL_RESPONSE, openConfirmModal } from '@hooks/useModal';
import { notifications } from '@mantine/notifications';

export const PAGE_SIZES = [10, 20, 30];

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const useProductTable = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(PAGE_SIZES[0]);
  const [skip, setSkip] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const url = `${host}/products?limit=${limit}&skip=${skip}`;
  // console.log('url', url);
  const { data, error } = useSWR<ProductResponse>(
    debouncedSearchQuery ? `${host}/search/products?q=${debouncedSearchQuery}` : url,
    fetcher
  );
  const { remove } = useCrud({
    skip,
    limit,
  });

  useEffect(() => {
    if (data) {
      setTotalRecords(data.total);
      // searchQuery should not change limit
      if (!debouncedSearchQuery) {
        setLimit(data.limit);
      }
      setSkip(data.skip);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  const onAddClick = async () => {
    await router.push({
      pathname: UrlPath.ProductEdit,
      query: { skip, limit },
    });
  };

  const onEditClick = async (id: string) => {
    await router.push({
      pathname: UrlPath.ProductEdit,
      query: { id, skip, limit },
    });
  };
  const onDeleteClick = async (title: string, id: string) => {
    const res = await openConfirmModal({
      title: 'Confirm to delete this product?',
      text: `Title: ${title}`,
    });
    if (res === MODAL_RESPONSE.Y) {
      try {
        await remove(id);
        notifications.show({
          title: 'Hint',
          message: 'Delete product success',
        });
      } catch (err) {
        console.log(err);
        notifications.show({
          title: 'Error',
          message: 'Delete product failed',
          color: 'red',
        });
      }
    }
  };

  return {
    data,
    error,
    isLoading,
    totalRecords,
    limit,
    setLimit,
    skip,
    setSkip,
    searchQuery,
    setSearchQuery,
    onAddClick,
    onEditClick,
    onDeleteClick,
  };
};
