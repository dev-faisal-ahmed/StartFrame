import { signal } from '@preact/signals';

// modal state
export const modalSignal = signal(false);
export const updateModalState = (value: boolean) => {
  modalSignal.value = value;
};
