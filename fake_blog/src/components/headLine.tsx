import { NextPage } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const HeadLine: NextPage<Props> = ({ children }) => {
  return (
    <h2 className="mt-5 w-fit border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
      {children}
    </h2>
  );
};

export default HeadLine;
