type FromInputType = {
  label: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  error?: boolean;
};

export function FormInput({
  label,
  placeholder,
  name,
  defaultValue,
  required,
  error,
}: FromInputType) {
  return (
    <div class='flex flex-col-reverse'>
      <div class={'w-full'}>
        <input
          class={`focus:border-primary placeholder:text-sm' peer w-full rounded-t-md border-b-2 border-transparent bg-secondary p-2 text-sm text-white outline-none ${error ? 'border-red-500' : ''} `}
          placeholder={placeholder}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete='false'
          required={required}
        />
      </div>
      <label
        class='peer-focus:text-primary mb-2 text-sm font-medium text-gray-300'
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
