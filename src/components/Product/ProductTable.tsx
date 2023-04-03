import { useEffect, useState } from 'react';
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
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconTrash, IconEye, IconEdit } from '@tabler/icons-react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import dayjs from 'dayjs';
import { sortBy } from 'lodash';
import { showNotification } from '@mantine/notifications';
import { closeAllModals, openModal } from '@mantine/modals';
import useSWR, { mutate } from 'swr';
import axios, { AxiosResponse } from 'axios';
import { ProductResponse } from '@components/Product/Product.types';

const PAGE_SIZES = [10, 20, 30];

const fetcher = (url: string) => axios.get(url).then((res: AxiosResponse) => res.data);

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

export default function ProductTable() {
  const [limit, setLimit] = useState(PAGE_SIZES[0]);
  const [skip, setSkip] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // const host = 'https://dummyjson.com';
  const host = 'http://localhost:3001/permanconn-backend-zest';

  const url = `${host}/products?limit=${limit}&skip=${skip}`;
  const { data, error } = useSWR<ProductResponse>(
    debouncedSearchQuery ? `${host}/products/search?q=${debouncedSearchQuery}` : url,
    fetcher
  );

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

  if (error) return <div>Error loading products</div>;

  return (
    <Box m={'lg'}>
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
              leftIcon={<IconTrash size={16} />}
              color="green"
              disabled={false}
              onClick={() => showNotification({ color: 'green', message: 'Add' })}
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
                  <ActionIcon
                    color="blue"
                    onClick={() =>
                      showNotification({
                        color: 'blue',
                        message: `Modifying data : ${record.id}`,
                      })
                    }
                  >
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="red"
                    onClick={() =>
                      showNotification({
                        color: 'red',
                        message: `Deleting data : ${record.id}!`,
                      })
                    }
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
            { accessor: 'title', width: 100, sortable: false },
            { accessor: 'description', width: '100%' },
            { accessor: 'brand', width: 200 },
            { accessor: 'category', width: 150 },
            { accessor: 'price', width: 100 },
            { accessor: 'rating', width: 100 },

            // {
            //   accessor: 'birthDate',
            //   textAlignment: 'right',
            //   width: 120,
            //   render: ({ birthDate }) => dayjs(birthDate).format('MMM D YYYY'),
            // },
          ]}
          totalRecords={totalRecords}
          recordsPerPage={limit}
          page={skip / limit + 1}
          onPageChange={(p) => setSkip(limit * (p - 1))}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setLimit}
          // sortStatus={sortStatus}
          // onSortStatusChange={setSortStatus}
          // selectedRecords={selectedRecords}
          // onSelectedRecordsChange={setSelectedRecords}
          onRowClick={(record, rowIndex) => {
            openModal({
              title: 'Company information',
              children: (
                <Stack>
                  <Text>
                    You clicked on row[{rowIndex}], referring to employee <em>{record.id}</em>.
                  </Text>
                  <Center>
                    <Button sx={{ width: '100%', maxWidth: 100 }} onClick={() => closeAllModals()}>
                      OK
                    </Button>
                  </Center>
                </Stack>
              ),
            });
          }}
        />
      </Box>
    </Box>
  );
}
