import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';

import { FullButton } from '@/app/components/data-entry/FullButton';
import { classNames } from '@/utils/classNames';

export type SlideoutShowOptions =
  | {
      title?: string;
      submitActionComponent?: React.ReactNode;
      closeLabel?: string;
      size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
      withCloseButton?: boolean;
    }
  | null
  | undefined;

export default function Slideout({
  options,
  setShowSlideout,
  children,
}: {
  options?: SlideoutShowOptions;
  setShowSlideout: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  const slideoutRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { damping: 30, stiffness: 500, type: 'spring' };
  useEffect(() => {
    controls.start({
      transition: transitionProps,
      x: 0, // originally was 20 - why? Seemed to hide 20px of the slideout
    });
  }, []);

  async function handleDragEnd(_: any, info: any) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const width = slideoutRef.current?.getBoundingClientRect().width || 0;

    if (offset > width / 2.5 || velocity > 800) {
      await controls.start({ transition: transitionProps, x: '100%' });
      setShowSlideout(false);
    } else {
      controls.start({ transition: transitionProps, x: 0 });
    }
  }

  const handleDismiss = async () => {
    setShowSlideout(false);
  };

  const shouldShowFooter =
    options?.submitActionComponent || options?.withCloseButton;

  const sizeClassName =
    options?.size === 'xl'
      ? 'max-w-[90vw] md:max-w-prose'
      : options?.size === 'lg'
      ? 'max-w-[90vw] md:max-w-lg'
      : options?.size === 'md'
      ? 'max-w-[90vw] md:max-w-md'
      : options?.size === 'sm'
      ? 'max-w-[90vw] md:max-w-sm'
      : options?.size === 'xs'
      ? 'max-w-[90vw] md:max-w-xs'
      : 'max-w-[90vw] md:max-w-prose';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={slideoutRef}
        key="slideout"
        data-testid="slideout"
        className={classNames(
          'group fixed inset-y-0 bottom-0 right-0 z-50 flex w-screen cursor-grab flex-col overflow-hidden rounded-l-3xl bg-surface active:cursor-grabbing sm:cursor-auto sm:active:cursor-auto',
          sizeClassName
        )}
        initial={{ x: '100%' }}
        animate={controls}
        exit={{ x: '100%' }}
        transition={transitionProps}
        drag="x"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={{ left: 0, right: 1 }} // prevents the slideout from being dragged beyond the right edge of the screen
        dragConstraints={{ left: 0, right: 0 }}
      >
        <div
          className={classNames(
            'rounded-t-4xl absolute inset-y-0 -mb-1 flex w-4 flex-col items-center justify-center',
            'left-0 '
          )}
        >
          <div className="-mb-1 h-6 w-1 rounded-full bg-background transition-all group-active:-rotate-6" />
          <div className="h-6 w-1 rounded-full bg-background transition-all group-active:rotate-6" />
        </div>

        {/* The "pb-20" should prolly be extracted into constant or added dynamically based on the height of the submitActionComponent height. */}

        <div
          className={classNames(
            'flex-1 overflow-auto p-4',
            shouldShowFooter && 'pb-20'
          )}
        >
          {children}
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
        key="slideout-backdrop"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleDismiss}
      />
    </AnimatePresence>
  );
}
