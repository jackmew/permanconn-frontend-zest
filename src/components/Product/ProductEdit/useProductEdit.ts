import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { hasLength, isInRange, useForm } from '@mantine/form';
import { Product } from '@components/Product/Product.types';
import { MODAL_RESPONSE, openConfirmModal } from '@hooks/useModal';
import { UrlPath } from '@globals/constants';
import { notifications } from '@mantine/notifications';
import { useCrud } from '@hooks/useCrud';

export const useProductEdit = () => {
  const router = useRouter();
  const { skip, limit, id } = router.query;
  const { get, create, update } = useCrud({
    skip: skip ? +skip : 0,
    limit: limit ? +limit : 10,
  });
  const [isEdit, setIsEdit] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<Product>({
    initialValues: {
      _id: '',
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
    },

    validate: {
      title: hasLength({ min: 2, max: 20 }, 'Title must be 2-20 characters long'),
      description: hasLength({ min: 2, max: 20 }, 'Description must be 2-20 characters long'),
      price: isInRange({ min: 0, max: 10000 }, 'Price is in range 0~10000'),
      discountPercentage: isInRange({ min: 0, max: 0.75 }, 'DiscountPercentage is in range 0~0.75'),
      rating: isInRange({ min: 0, max: 5 }, 'Rating is in range 0~5'),
      stock: isInRange({ min: 0, max: 1000 }, 'Rating is in range 0~1000'),
    },
  });

  useEffect(() => {
    async function fetchData() {
      if (id) {
        try {
          setIsLoading(true);
          const product = await get(id);
          form.setValues(product);
          setIsEdit(true);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          notifications.show({
            title: 'Error',
            message: 'Get product failed',
            color: 'red',
          });
        }
      }
    }
    fetchData();
  }, [id]);

  const onSaveSubmit = async (values: Product) => {
    console.log(values);

    const res = await openConfirmModal({
      text: 'Confirm to add a new product?',
    });
    if (res === MODAL_RESPONSE.Y) {
      try {
        await create(values);
        router.back();
        notifications.show({
          title: 'Hint',
          message: 'Create product success',
        });
      } catch (err) {
        console.log(err);
        notifications.show({
          title: 'Error',
          message: 'Create product failed',
          color: 'red',
        });
      }
    }
  };

  const onBackClick = async () => {
    const res = await openConfirmModal({
      text: 'Are you sure to go back?',
    });
    if (res === MODAL_RESPONSE.Y) {
      router.back();
    }
  };

  return { form, isLoading, isEdit, onSaveSubmit, onBackClick };
};
