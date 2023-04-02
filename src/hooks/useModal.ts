import { modals } from '@mantine/modals';

export const MODAL_RESPONSE = {
  N: 'No',
  Y: 'Yes',
};
export const openConfirmModal = ({ title = 'Hint', text = '' }: { title: string; text: string }) =>
  new Promise((resolve) => {
    modals.openContextModal({
      modal: 'confirm',
      centered: false,
      title,
      innerProps: {
        modalBody: text,
        resolve,
      },
    });
  });
