import { AllLinks } from './components/fav-links/all-links';
import { Search } from './components/search/search';

export function App() {
  return (
    <section class={'h-screen  gap-8 bg-secondary text-white'}>
      <div class={'mx-auto flex w-2/3 flex-col gap-8 py-16'}>
        <div class={'text-center'}>
          <h1 class={'title text-3xl text-white'}>StarFrame</h1>
          <p class={'mt-1 font-thin text-gray-300'}>
            Welcome to the new world!
          </p>
        </div>
        <Search />
        <AllLinks />
      </div>
    </section>
  );
}
