import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';

import { FullButton } from '@/app/components/data-entry/FullButton';
import { ModalShowOptions } from '@/app/components/feedback/modal-or-leaflet';
import { classNames } from '@/utils/classNames';

export default function Leaflet({
  options,
  setShowModal,
  children,
}: {
  options?: ModalShowOptions;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  const leafletRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { damping: 30, stiffness: 500, type: 'spring' };
  useEffect(() => {
    controls.start({
      transition: transitionProps,
      y: 0, // originally was 20 - why? Seemed to hide 20px of the leaflet
    });
  }, []);

  async function handleDragEnd(_: any, info: any) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = leafletRef.current?.getBoundingClientRect().height || 0;
    if (offset > height / 2 || velocity > 800) {
      await controls.start({ transition: transitionProps, y: '100%' });
      setShowModal(false);
    } else {
      controls.start({ transition: transitionProps, y: 0 });
    }
  }

  const handleDismiss = async () => {
    setShowModal(false);
  };

  const shouldShowFooter =
    options?.submitActionComponent || options?.withCloseButton;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={leafletRef}
        key="leaflet"
        className={classNames(
          'group fixed inset-x-0 bottom-0 z-50 flex w-screen cursor-grab flex-col overflow-auto bg-surface active:cursor-grabbing',
          // TODO: [PWA] isStandalone ? max-h-[80vh] : max-h-[90vh]
          'max-h-[85vh]'
        )}
        initial={{ y: '100%' }}
        animate={controls}
        exit={{ y: '100%' }}
        transition={transitionProps}
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={{ bottom: 1, top: 0 }}
        dragConstraints={{ bottom: 0, top: 0 }}
      >
        <div
          className={`rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-200`}
        >
          <div className="-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
          <div className="h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
        </div>

        {/* The "pb-20" should prolly be extracted into constant or added dynamically based on the height of the submitActionComponent height. */}
        <div className={classNames('flex-1', shouldShowFooter && 'pb-20')}>
          <div className="overflow-auto p-6">{children}</div>
        </div>

        {shouldShowFooter && (
          <div className="fixed inset-x-0 bottom-0 flex flex-wrap items-center justify-end rounded-b-lg border-t border-text/10 bg-surface p-3 md:px-10">
            {options?.submitActionComponent}
            {options?.withCloseButton && (
              <FullButton onClick={handleDismiss} type="button">
                {'Close' || options.closeLabel}
              </FullButton>
            )}
          </div>
        )}
      </motion.div>
      <motion.div
        key="leaflet-backdrop"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleDismiss}
      />
    </AnimatePresence>
  );
}
