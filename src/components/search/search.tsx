import { JSX } from 'preact';
import { searchUrl } from '../../data/search-url';

export function Search() {
  const handleSearch = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      search: { value: string };
    };

    const searchKeyword = formData.search.value;
    if (searchKeyword) window.location.replace(`${searchUrl}${searchKeyword}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      class={'flex items-center rounded-lg bg-secondary-lite p-2'}
    >
      <input
        name={'search'}
        class={'w-full bg-transparent pl-2 outline-none'}
        placeholder={'What are you looking for ?'}
      />
      <button class={'rounded-lg bg-primary px-6 py-2'}>Search</button>
    </form>
  );
}
