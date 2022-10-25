import { NextPage } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: NextPage<Props> = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full flex-col md:w-[768px]">{children}</div>
    </div>
  );
};

export default Container;
