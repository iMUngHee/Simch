/* Types */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PostType } from '.';

/* Components */
import Container from '@components/Layout/article';
import { MoveButton } from '@components/Button';
import Layout from '@components/Layout/animate';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

/* lib */
import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';
import cls from '@libs/client/cls';
import path from 'path';
import fs from 'fs';

interface SlugType extends PostType {
  content: string;
  adjacentPosts: PostType[];
  hasAdjacent: number;
}

enum Adjacent {
  ONLY_NEXT = 1,
  ONLY_PREV = 2,
  HAS_TWO = 3,
}

const Detail: NextPage<SlugType> = ({
  frontMatter: { title, date, cover_image, tags, metaTags, description },
  slug,
  content,
  adjacentPosts,
  hasAdjacent,
}) => {
  const [markedContent, setMarkedContent] = useState<string>();

  useEffect(() => {
    const renderer = new marked.Renderer();
    renderer.code = (code, infostring, escaped) => {
      console.log(infostring);
      return `<div><pre><code hljs language-${infostring}>${
        hljs.highlightAuto(code, [infostring!]).value
      }</code></pre></div>`;
    };
    marked.setOptions({
      langPrefix: 'hljs language-',
      highlight: function (code) {
        return hljs.highlightAuto(code, [
          'cpp',
          'javascript',
          'html',
          'css',
          'swift',
          'mysql',
          'bash',
          'ruby',
        ]).value;
      },
      renderer,
    });

    setMarkedContent(marked(content));
  }, [content]);

  return (
    //TODO Animation Layout
    <Layout
      title={title}
      metaTags={metaTags}
      cover_image={cover_image}
      description={description}
    >
      {/*//TODO Article Layout */}
      <Container>
        {/*//TODO Title Component */}
        <div className="mt-14 select-text">
          <div>
            <h1 className="text-center text-3xl font-bold lg:text-4xl">
              {title}
            </h1>
            <div>
              <div className="flex items-center justify-end pt-2 text-xs md:text-sm lg:text-base">
                {date}
              </div>
              {/*//TODO Tags Component */}
              <div className="flex items-center justify-end pt-2">
                {tags.map((tag, idx) => (
                  <Link key={idx} href={`/posts?tag=${tag}`}>
                    <a
                      className="ml-2 rounded-xl bg-zinc-800 px-1 py-[0.1rem] text-[0.6rem] font-bold text-amber-50 transition-all
                    hover:bg-zinc-600  peer-valid:mt-1 dark:bg-amber-50 dark:text-zinc-900 dark:hover:bg-amber-200 md:px-3 md:py-[0.3rem] md:text-sm"
                    >
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/*//TODO Thumbnail */}
          <div className="overflow-hidden rounded-md">
            <Image
              src={cover_image}
              alt="thumbnail"
              layout="responsive"
              objectFit="contain"
              width={500}
              height={250}
            />
          </div>
        </div>

        {/*//TODO Article Component */}
        <div className="main">
          {/*//TODO useMarkdown / MarkDown Component */}
          <div
            role="content"
            className="
                  prose prose-lg prose-zinc select-text  text-sm prose-code:rounded-sm
                  prose-code:bg-zinc-800
                  prose-code:px-[0.2rem] prose-code:py-[0.1rem] prose-code:before:content-none prose-code:after:content-none prose-img:mx-auto dark:prose-invert
                  dark:prose-code:bg-gray-900 md:prose-xl md:text-base lg:text-lg [&_p_code]:text-pink-400 dark:[&_p_code]:bg-black dark:[&_p_code]:text-pink-500
                  [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none
                "
            dangerouslySetInnerHTML={{ __html: markedContent! }}
          />
        </div>

        {/*//TODO PageMove Buttons Component */}
        {hasAdjacent && (
          <div
            className={cls(
              'my-2 flex w-full flex-col items-center gap-4 px-1 py-2 md:flex-row',
              hasAdjacent === Adjacent.ONLY_NEXT
                ? 'justify-end'
                : 'justify-between',
            )}
          >
            {hasAdjacent !== Adjacent.ONLY_NEXT && (
              <MoveButton
                direction="left"
                text={adjacentPosts[0].slug}
                link={`/posts/${encodeURIComponent(adjacentPosts[0].slug)}`}
              />
            )}
            {hasAdjacent !== Adjacent.ONLY_PREV && (
              <MoveButton
                direction="right"
                text={
                  hasAdjacent === Adjacent.ONLY_NEXT
                    ? adjacentPosts[0].slug
                    : adjacentPosts[1].slug
                }
                link={`/posts/${encodeURIComponent(
                  hasAdjacent === Adjacent.ONLY_NEXT
                    ? adjacentPosts[0].slug
                    : adjacentPosts[1].slug,
                )}`}
              />
            )}
          </div>
        )}

        <Footer />
      </Container>
    </Layout>
  );
};

export default Detail;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('docs', 'posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return { paths, fallback: false };
};

interface ParamsType extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  //TODO Better Algorithms
  const time = performance.now();

  //* 현재 파일
  const { slug } = ctx.params as ParamsType;

  const markdownWithMeta = fs.readFileSync(
    path.join('docs', 'posts', slug + '.md'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  //* 전체 파일
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

  //* 앞 뒤 파일 in 전체 파일
  const adjacentPosts = posts
    .filter((post) => Math.abs(post.frontMatter.id - frontMatter.id) === 1)
    .sort((a, b) => a.frontMatter.id - b.frontMatter.id);

  const hasAdjacent = Boolean(adjacentPosts.length)
    ? adjacentPosts.length + 1 === Adjacent.HAS_TWO
      ? Adjacent.HAS_TWO
      : adjacentPosts[0].frontMatter.id > frontMatter.id
      ? Adjacent.ONLY_NEXT
      : Adjacent.ONLY_PREV
    : null;

  console.log(performance.now() - time);

  return {
    props: {
      frontMatter,
      slug,
      content,
      adjacentPosts,
      hasAdjacent,
    },
  };
};
