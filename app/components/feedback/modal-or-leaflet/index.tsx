'use client';

import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { FullButton } from '@/app/components/data-entry/FullButton';
import useWindowSize from '@/hooks/use-window-size';

export type ModalShowOptions =
  | {
      title?: string;
      submitActionComponent?: React.ReactNode;
      closeLabel?: string;
      withCloseButton?: boolean;
    }
  | null
  | undefined;

export type ModalShow = (
  content: React.ReactNode,
  opts?: ModalShowOptions
) => void;

import { classNames } from '@/utils/classNames';

import Leaflet from './leaflet';

export default function Modal({
  children,
  options,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  options?: ModalShowOptions;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const desktopModalRef = useRef(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const { isMobile, isDesktop } = useWindowSize();

  const handleDismiss = () => {
    setShowModal(false);
  };

  const shouldShowFooter =
    options?.submitActionComponent || options?.withCloseButton;

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {isMobile && (
            <Leaflet setShowModal={setShowModal} options={options}>
              {children}
            </Leaflet>
          )}
          {isDesktop && (
            <>
              <FocusTrap focusTrapOptions={{ initialFocus: false }}>
                <motion.div
                  ref={desktopModalRef}
                  key="desktop-modal"
                  className="fixed inset-0 z-50 flex min-h-screen items-center justify-center px-4"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  onMouseDown={e => {
                    if (desktopModalRef.current === e.target) {
                      handleDismiss();
                    }
                  }}
                >
                  <div
                    className={classNames(
                      'relative flex flex-col overflow-hidden rounded-xl border border-text/10 bg-surface md:max-w-md',
                      'max-h-[80vh]'
                    )}
                  >
                    {/* The "pb-20" should prolly be extracted into constant or added dynamically based on the height of the submitActionComponent height. */}
                    <div
                      className={classNames(
                        'flex-1 overflow-auto p-6',
                        shouldShowFooter && 'pb-20'
                      )}
                    >
                      {children}
                    </div>

                    {shouldShowFooter && (
                      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-end rounded-b-lg border-t border-text/10 bg-surface px-6 py-4">
                        {options?.submitActionComponent}
                        {options?.withCloseButton && (
                          <FullButton onClick={handleDismiss} type="button">
                            {'Close' || options.closeLabel}
                          </FullButton>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </FocusTrap>

              <motion.div
                key="desktop-backdrop"
                className="fixed inset-0 z-40 bg-black/50 bg-opacity-10 backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleDismiss}
              />
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
