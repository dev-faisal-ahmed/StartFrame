import { IoMdAdd } from 'react-icons/io';
import { styleData } from '../../../data/style-data';
import { Modal } from '../../shared/modal';
import { modalSignal, updateModalState } from '../../../states/state';
import { AddLinkForm } from './add-link-form';

export function AddLink() {
  return (
    <>
      <div
        style={{ height: styleData.linkHight }}
        class={
          'flex cursor-pointer items-center justify-center rounded-lg bg-secondary-lite text-2xl'
        }
        onClick={() => updateModalState(true)}
      >
        <IoMdAdd />
      </div>
      {modalSignal.value && (
        <Modal title='Add a Link' onOutsideClick={() => {}}>
          <AddLinkForm />
        </Modal>
      )}
    </>
  );
}
