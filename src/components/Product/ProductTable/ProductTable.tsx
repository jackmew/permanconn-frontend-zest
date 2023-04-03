import {
  Box,
  Button,
  Center,
  Grid,
  Stack,
  TextInput,
  Text,
  ActionIcon,
  Group,
  Flex,
} from '@mantine/core';
import { IconSearch, IconTrash, IconPlus, IconEdit } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import { showNotification } from '@mantine/notifications';
import { closeAllModals, openModal } from '@mantine/modals';
import { useProductTable, PAGE_SIZES } from '@components/Product/ProductTable/useProductTable';

export default function ProductTable() {
  const {
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
  } = useProductTable();
  if (error) return <div>Error loading products</div>;

  return (
    <Box m="lg">
      <Grid align="center" mb="md">
        <Grid.Col sm={6}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search products..."
            icon={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <Flex gap="md" justify="flex-end" align="flex-start" direction="row">
            <Button
              uppercase
              leftIcon={<IconPlus size={16} />}
              disabled={false}
              onClick={onAddClick}
            >
              Add
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>

      <Box sx={{ height: 450 }}>
        <DataTable
          withBorder
          records={data?.products || []}
          fetching={isLoading}
          columns={[
            {
              accessor: 'actions',
              title: <Text mr="xs">Actions</Text>,
              textAlignment: 'right',
              render: (record) => (
                <Group spacing={4} position="left" noWrap>
                  <ActionIcon color="green" onClick={() => onEditClick(record._id)}>
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => onDeleteClick(record.title, record._id)}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
            {
              accessor: 'title',
              width: 100,
              sortable: false,
            },
            {
              accessor: 'description',
              width: '100%',
            },
            {
              accessor: 'brand',
              width: 200,
            },
            {
              accessor: 'category',
              width: 150,
            },
            {
              accessor: 'price',
              width: 100,
            },
            {
              accessor: 'rating',
              width: 100,
            },
          ]}
          totalRecords={totalRecords}
          recordsPerPage={limit}
          page={skip / limit + 1}
          onPageChange={(p) => setSkip(limit * (p - 1))}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setLimit}
        />
      </Box>
    </Box>
  );
}
