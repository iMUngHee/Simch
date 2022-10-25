import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import NavigationBar from '../NavigationBar';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full select-none bg-amber-50 text-zinc-800 
    transition-colors duration-500
    dark:bg-zinc-800 dark:text-amber-50"
    >
      <NavigationBar />
      <main
        className="mx-auto select-none pt-12 [width:calc(100%-2em)]
      lg:w-[1024px] xl:w-[1376px] xl:pt-16 2xl:w-[1728px]"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
