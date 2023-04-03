import {
  Button,
  Paper,
  Text,
  Grid,
  TextInput,
  NumberInput,
  Flex,
  LoadingOverlay,
} from '@mantine/core';
import { useProductEdit } from '@components/Product/ProductEdit/useProductEdit';

export default function ProductEdit() {
  const { form, isLoading, isEdit, onBackClick, onSaveSubmit } = useProductEdit();

  return (
    <Paper withBorder shadow="md" p={10} m={30} radius="md">
      <LoadingOverlay visible={isLoading} overlayBlur={1} />
      <form onSubmit={form.onSubmit((values) => onSaveSubmit(values))}>
        <Grid>
          <Grid.Col span={12}>
            <Text align="left" sx={() => ({ fontWeight: 900 })}>
              {isEdit ? 'Edit' : 'Add'}
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Title"
              placeholder="product title"
              withAsterisk
              {...form.getInputProps('title')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Description"
              placeholder="product description"
              withAsterisk
              {...form.getInputProps('description')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              placeholder="price"
              label="Price"
              {...form.getInputProps('price')}
              min={0}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              placeholder="discountPercentage"
              label="DiscountPercentage"
              precision={2}
              step={0.05}
              min={0}
              {...form.getInputProps('discountPercentage')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              placeholder="rating"
              label="Rating"
              precision={2}
              step={0.05}
              min={0}
              {...form.getInputProps('rating')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              placeholder="stock"
              label="Stock"
              {...form.getInputProps('stock')}
              min={0}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="Brand" placeholder="brand" {...form.getInputProps('brand')} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Category"
              placeholder="category"
              {...form.getInputProps('category')}
            />
          </Grid.Col>
        </Grid>
        <Flex justify="flex-end" gap="md">
          <Button type="button" color="gray" onClick={onBackClick}>
            Back
          </Button>
          <Button type="submit" loading={isLoading}>
            Save
          </Button>
        </Flex>
      </form>
    </Paper>
  );
}
