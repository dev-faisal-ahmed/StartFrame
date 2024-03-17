export function Search() {
  return (
    <div class={'flex items-center rounded-lg bg-secondary-lite p-2'}>
      <input
        class={'w-full bg-transparent pl-2 outline-none'}
        placeholder={'What are you looking for ?'}
      />
      <button class={'bg-primary rounded-lg px-6 py-2'}>Search</button>
    </div>
  );
}
