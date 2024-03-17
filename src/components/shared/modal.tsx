import { JSX, createPortal, useRef } from 'preact/compat';

type ModalProps = {
  children: JSX.Element;
  title: string;

  width?: string;
};

export function Modal({ children, title, width }: ModalProps) {
  const modalBodyRef = useRef<HTMLDivElement>(null);

  // to animate when clicked outside
  const onOutsideClick = async () => {
    if (modalBodyRef && modalBodyRef.current) {
      modalBodyRef.current.style.scale = '1.05';

      // for delay
      setTimeout(() => {
        if (modalBodyRef.current) modalBodyRef.current.style.scale = '1';
      }, 150);
    }
  };
  return createPortal(
    <section
      onClick={onOutsideClick}
      className='absolute inset-0 z-20 flex h-screen items-center justify-center bg-black/30'
    >
      <div
        ref={modalBodyRef}
        style={{ width: width || '450px' }}
        className='rounded-lg bg-secondary-lite p-5 transition-all duration-200 ease-in-out'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='font-semibold text-white'>{title}</h3>
        <div className='mt-5'>{children}</div>
      </div>
    </section>,
    document.getElementById('modal-root')!,
  );
}
