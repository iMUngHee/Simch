import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

export interface ItemType {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  slug: string;
}

const variants = {
  init: {
    y: 0,
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};

const Item: React.FC<ItemType> = ({
  id,
  img,
  title,
  description,
  tags,
  date,
  slug,
}) => {
  return (
    <>
      <Link passHref href={`/posts/${slug}`}>
        <motion.div
          key={id}
          className="m-4 flex w-full
          cursor-pointer
          flex-col overflow-hidden rounded-md bg-slate-50
          shadow-md shadow-slate-500 dark:bg-zinc-700
          dark:shadow-slate-900 md:[width:calc(50%-2rem)] lg:w-[20rem]"
          variants={variants}
          initial="init"
          whileHover="hover"
        >
          <div className="relative h-[18rem] w-full overflow-hidden rounded-t-md">
            <Image
              src={img}
              alt="thumbnail"
              objectFit="cover"
              layout="fill"
              className="object-center"
            />
          </div>
          <div className="flex h-[10rem] flex-col justify-between p-2">
            <div className="flex w-full flex-col p-2">
              <h4
                role="title"
                className="w-full text-2xl font-bold text-zinc-900 dark:text-white
              md:text-xl 
            "
              >
                {title}
              </h4>
              <div className=" mt-1 flex-1 text-sm text-gray-500 dark:text-gray-300">
                {description}
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <span>
                {tags.map((tag, idx) => (
                  <Link href={`/posts?tag=${tag}`} passHref key={idx}>
                    <span className="ml-1 cursor-pointer text-sm text-cyan-600 transition-colors hover:text-cyan-200 dark:text-cyan-200 dark:hover:text-cyan-600">
                      #{tag}
                    </span>
                  </Link>
                ))}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {date}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default Item;
