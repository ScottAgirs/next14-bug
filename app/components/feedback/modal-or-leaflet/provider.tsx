'use client';

import dynamic from 'next/dynamic';
import { ReactNode, createContext, useContext, useState } from 'react';

import { ModalShowOptions } from '@/app/components/feedback/modal-or-leaflet';

const Modal = dynamic(
  () => import('@/app/components/feedback/modal-or-leaflet'),
  {
    ssr: false,
  }
);

export interface ModalContextProps {
  show: (
    modalShowInput: React.ReactNode,
    modalOptions?: ModalShowOptions
  ) => void;
  hide: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalOptions, setModalOptions] = useState<ModalShowOptions>(null);
  const [showModal, setShowModal] = useState(false);

  const show = (modalContent: ReactNode, modalOptions: any) => {
    setModalContent(modalContent);
    setModalOptions(modalOptions);
    setShowModal(true);
  };

  const hide = () => {
    setShowModal(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300); // Adjust this timeout as per your transition duration
  };

  return (
    <ModalContext.Provider value={{ hide, show }}>
      {children}

      {showModal && modalContent && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          options={modalOptions}
        >
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
