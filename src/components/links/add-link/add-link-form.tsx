import { JSX } from 'preact/jsx-runtime';
import { FormInput } from '../../shared/form-input';
import { signal } from '@preact/signals';
import {
  addNewLinkToQuickLinkSignal,
  updateModalState,
} from '../../../states/state';

export function AddLinkForm() {
  const buttonClass = `w-20 rounded-full py-1 text-center border cursor-pointer`;
  const error = signal(false);

  const handleAddLink = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      name: { value: string };
      url: { value: string };
    };

    const name = formData.name.value.trim().toLowerCase();
    const url = formData.url.value.trim().toLowerCase();

    const ok = addNewLinkToQuickLinkSignal({ name, url });
    error.value = !ok;

    if (ok) {
      formData.reset();
      updateModalState(false);
    }
  };

  return (
    <form onSubmit={handleAddLink} class={'flex flex-col gap-5'}>
      <FormInput
        label='Name'
        name='name'
        placeholder='Enter the site name'
        error={error.value}
      />
      <FormInput label='Url' name='url' placeholder='Enter the site url' />
      <div class={'flex justify-end gap-5 text-white'}>
        <div onClick={() => updateModalState(false)} class={`${buttonClass}`}>
          Cancel
        </div>
        <button class={`${buttonClass} bg-primary border-primary`}>Add</button>
      </div>
    </form>
  );
}
