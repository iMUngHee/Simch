import { useRouter } from 'next/router';
import { DocsDataType } from 'src/pages/posts';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import Layout from './Layout/animate';
import axios from 'axios';

const Items: React.FC<DocsDataType> = ({ posts }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(posts);

  useEffect(() => {
    if (!router.query.tag && !router.query.query) return;
    if (router.query.tag) {
      const filteredByTag = posts?.filter((post) =>
        post.frontMatter.tags.includes(router.query.tag as string),
      );
      setItems(filteredByTag);
    }
    if (router.query.query) {
      setLoading(true);
      axios
        .get(
          `http://localhost:8080?query=${router.query.query}&algorithm=${router.query.algorithm}`,
          {
            withCredentials: true,
          },
        )
        .then(({ data: { slugs } }) => {
          console.log(slugs);
          const filteredBySlug = posts?.filter((post) => {
            if (slugs.includes(post.slug)) return true;
            return false;
          });

          setItems(filteredBySlug);
        })
        .catch((e) => console.error)
        .finally(() => setLoading(false));
    }
  }, [router, posts]);

  return (
    <Layout title="Posts">
      <div className="-m-4 flex flex-wrap">
        {loading ? (
          <div className="mt-10 flex w-full items-center justify-center text-3xl font-bold">
            ⏳ 로딩 중입니다!!!
          </div>
        ) : items!.length > 0 ? (
          items!.map((post, index) => (
            <Item
              key={index}
              id={post.frontMatter.id}
              slug={post.slug}
              img={post.frontMatter.cover_image}
              title={post.frontMatter.title}
              tags={post.frontMatter.tags}
              description={post.frontMatter.description}
              date={post.frontMatter.date}
            />
          ))
        ) : (
          <div className="mt-10 flex w-full items-center justify-center text-3xl font-bold">
            😅 검색 결과가 없습니다!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Items;
