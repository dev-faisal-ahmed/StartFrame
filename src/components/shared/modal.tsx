import { JSX, createPortal } from 'preact/compat';

type ModalProps = {
  state: boolean;
  children: JSX.Element;
  title: string;
  onOutsideClick: () => void;
  width: string;
};

export function Modal({
  state,
  children,
  title,
  onOutsideClick,
  width,
}: ModalProps) {
  return (
    state &&
    createPortal(
      <section onClick={onOutsideClick} className='modal group'>
        <div
          style={{ width: width || '450px' }}
          className='bg-black-500 rounded-md p-5 transition-all duration-200 ease-in-out group-active:scale-105'
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className='font-semibold text-white'>{title}</h3>
          <div className='mt-5'>{children}</div>
        </div>
      </section>,
      document.getElementById('modal-root')!,
    )
  );
}
