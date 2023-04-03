import useSWR, { mutate } from 'swr';
import axios, { AxiosResponse } from 'axios';
import { host } from '@globals/constants';
import { notifications } from '@mantine/notifications';

interface useCrudProps {
  limit: number;
  skip: number;
}

export function getProductUrl(limit: number, skip: number) {
  // Construct the dynamic URL
  return `/api/products?limit=${limit}&skip=${skip}`;
}

export function getProductSearchUrl(debouncedSearchQuery: string) {
  return `${host}/products/search?q=${debouncedSearchQuery}`;
}

export function getUrl(limit: number, skip: number) {
  // Construct the dynamic URL
  return `/api/products?limit=${limit}&skip=${skip}`;
}

export const fetcher = (url: string) => axios.get(url).then((res: AxiosResponse) => res.data);

export function useCrud({ limit, skip }: useCrudProps) {
  const { data, error } = useSWR(getUrl(limit, skip), fetcher);

  const create = async (payload: any) => {
    await axios.post(`${host}/products`, payload);
    await mutate(getUrl(limit, skip));
  };

  const update = async (id: string, payload: any) => {
    await axios.put(`${host}/products/${id}`, payload);
    mutate(getUrl(limit, skip));
  };

  const remove = async (id: string) => {
    await axios.delete(`${host}/products/${id}`);
    mutate(getUrl(limit, skip));
  };

  const get = async (id: string | string[] | undefined) => {
    const productRes = await axios.get(`${host}/products/${id}`);
    return productRes.data;
  };

  return {
    data,
    error,
    create,
    update,
    remove,
    get,
  };
}
