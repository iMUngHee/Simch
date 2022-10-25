import { useRouter } from 'next/router';
import { ComponentProps, useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [algorithm, setAlgorithm] = useState<string>('NAIVE');
  const router = useRouter();

  const onChange: ComponentProps<'input'>['onChange'] = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    router.push(`${router.pathname}?query=${query}&algorithm=${algorithm}`);
    setQuery('');
  };

  return (
    <div className="w-full">
      <form className="mb-3 flex w-full items-center justify-center gap-3">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <input
            checked={algorithm === 'NAIVE'}
            type="radio"
            value="NAIVE"
            id="NAIVE"
            name="algorithm"
            onChange={(e) => setAlgorithm(e.target.value)}
          />
          <label htmlFor="NAIVE">Naive</label>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <input
            checked={algorithm === 'TF-IDF'}
            type="radio"
            value="TF-IDF"
            id="TF-IDF"
            name="algorithm"
            onChange={(e) => setAlgorithm(e.target.value)}
          />
          <label htmlFor="TF-IDF">TF-IDF</label>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <input
            checked={algorithm === 'LF'}
            type="radio"
            value="LF"
            id="LF"
            name="algorithm"
            onChange={(e) => setAlgorithm(e.target.value)}
          />
          <label htmlFor="LF">LF</label>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <input
            checked={algorithm === 'K-MEANS'}
            type="radio"
            value="K-MEANS"
            id="K-MEANS"
            name="algorithm"
            onChange={(e) => setAlgorithm(e.target.value)}
          />
          <label htmlFor="K-MEANS">K-MEANS</label>
        </div>
      </form>
      <form
        className="mb-3 flex w-full items-center justify-center"
        onSubmit={onSubmit}
      >
        <input
          className="w-80 rounded-md bg-zinc-700 px-5 py-1 text-center text-amber-100
            focus:ring-2 dark:bg-amber-100 dark:text-zinc-800"
          placeholder="검색어를 입력하세요."
          value={query}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
export default Search;
