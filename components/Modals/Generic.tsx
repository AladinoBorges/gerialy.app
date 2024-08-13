import { BaseComponentPropTypes } from '@/types/generic';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export function GenericModal({ title, isOpen, onClose, children }: PropTypes) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button>Close</Button>

          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

interface PropTypes extends BaseComponentPropTypes {
  title: string;
  isOpen: boolean;
  onClose: VoidFunction;
}
