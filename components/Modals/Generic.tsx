import { BaseComponentPropTypes } from '@/types/generic';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export function GenericModal({ title, isOpen, onClose, children }: PropTypes) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

interface PropTypes extends BaseComponentPropTypes {
  title: string;
  isOpen: boolean;
  onClose: VoidFunction;
}
