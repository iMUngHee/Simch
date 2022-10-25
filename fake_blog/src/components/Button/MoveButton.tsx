import React from 'react';
import Link from 'next/link';

import cls from '@libs/client/cls';

interface MoveButtonInterface {
  text: string;
  link: string;
  direction: 'right' | 'left';
}

export const MoveButton: React.FC<MoveButtonInterface> = ({
  text,
  direction,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <button
        className={cls(
          `text-md group flex h-14 w-full items-center justify-start
          rounded-md bg-zinc-700 px-3  font-bold text-amber-50 shadow-md
        dark:bg-amber-50 dark:text-zinc-800 md:w-1/2`,
          direction === 'right' ? 'flex-row-reverse text-right' : 'text-left',
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cls(
            'h-8 w-8 transition-transform duration-200 ease-out group-hover:duration-500 ',
            direction === 'right'
              ? 'group-hover:translate-x-3'
              : 'group-hover:-translate-x-3',
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={cls(
              direction === 'right'
                ? 'M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                : 'M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z',
            )}
          />
        </svg>

        <a
          className={cls(
            'flex flex-col',
            direction === 'right' ? 'mr-3' : 'ml-3',
          )}
        >
          <span className="text-sm">
            {direction === 'right' ? 'Next' : 'Prev'}
          </span>
          <span>{text}</span>
        </a>
      </button>
    </Link>
  );
};
