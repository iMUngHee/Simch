/* Types */
import { GetStaticProps, NextPage } from 'next';

/* lib */
import { AppDispatch, RootState } from '@libs/client/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleType } from '@libs/client/redux/posts';
import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

/* Components */
import Footer from 'src/components/Footer';
import Items from 'src/components/Items';
import Search from '@components/Search';
import Tags from 'src/components/Tags';

export interface PostType {
  slug: string;
  frontMatter: {
    id: number;
    title: string;
    date: string;
    tags: string[];
    metaTags: string[];
    cover_image: string;
    description: string;
  };
}

export interface TagType {
  value: string;
  count: number;
}

export interface DocsDataType {
  posts?: PostType[];
  tagInfo?: TagType[];
}

const Posts: NextPage<DocsDataType> = ({ posts, tagInfo }) => {
  const type = useSelector<RootState>((state) => state.posts.type);
  const dispatch = useDispatch<AppDispatch>();

  const onSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    dispatch(toggleType(value));
  };

  return (
    <>
      <div className="mt-5 min-h-[85vh] w-full pb-12">
        <Search />
        <div className="flex w-full flex-row items-center justify-start gap-5">
          <button
            onClick={onSelect}
            value="recent"
            className="font-['RocknRoll_One']"
          >
            Recent
            {type === 'recent' ? (
              <motion.div
                layoutId="underline"
                className="border-b-2 border-black pt-1"
              />
            ) : null}
          </button>
          <button
            value="tag"
            onClick={onSelect}
            className="font-['RocknRoll_One']"
          >
            Tag
            {type === 'tags' ? (
              <motion.div
                layoutId="underline"
                className="border-b-2 border-black pt-1"
              />
            ) : null}
          </button>
        </div>
        <div className="mt-4 flex">
          <div className="box-border flex-1">
            {type === 'recent' ? (
              <Items posts={posts} />
            ) : (
              <Tags tagInfo={tagInfo} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('docs', 'posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('docs', 'posts', filename),
      'utf-8',
    );

    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      slug,
      frontMatter,
    };
  });
  const ordered = posts.sort((a, b) => b.frontMatter.id - a.frontMatter.id);

  const tagInfo: TagType[] = [];

  ordered
    .map((post) => post.frontMatter.tags)
    .flat(2)
    .forEach((tag) => {
      if (tagInfo.filter((e) => e.value === tag).length > 0) {
        tagInfo.forEach((e) => e.value === tag && e.count++);
      } else {
        tagInfo.push({ value: `${tag}`, count: 0 });
      }
    });

  return {
    props: {
      posts: ordered,
      tagInfo,
    },
  };
};
