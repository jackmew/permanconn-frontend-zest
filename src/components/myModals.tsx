import { ContextModalProps } from '@mantine/modals';
import { Text, Button, Flex } from '@mantine/core';
import { MODAL_RESPONSE } from '@hooks/useModal';

interface IInnerProps {
  modalBody: string;
  resolve: (value: any) => void;
}
export const ConfirmModal = ({ context, id, innerProps }: ContextModalProps<IInnerProps>) => {
  return (
    <>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Flex gap="sm" direction="row" justify="flex-end">
        <Button
          mt="md"
          onClick={() => {
            context.closeModal(id);
            innerProps.resolve(MODAL_RESPONSE.N);
          }}
        >
          Cancel
        </Button>
        <Button
          mt="md"
          onClick={() => {
            context.closeModal(id);
            innerProps.resolve(MODAL_RESPONSE.Y);
          }}
        >
          Confirm
        </Button>
      </Flex>
    </>
  );
};
