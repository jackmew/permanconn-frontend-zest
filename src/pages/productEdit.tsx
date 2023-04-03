import { useState } from 'react';
import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  Radio,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Product } from '@components/Product/Product.types';
import { useForm } from '@mantine/form';

export default function ProductEditPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<Product>({
    initialValues: {
      title: '',
      description: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      // password: (value) => (value.length < 5 ? 'Password need to longer than 4' : null),
    },
  });

  const onSaveSubmit = (values: Product) => {
    console.log(values);

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Add Product
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => onSaveSubmit(values))}>
          <TextInput
            label="Title"
            placeholder="product title"
            required
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Description"
            placeholder="product description"
            required
            {...form.getInputProps('description')}
          />

          <Button type="submit" fullWidth loading={isLoading}>
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
