import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface LayoutType {
  children: ReactNode;
  title: string;
  cover_image?: string;
  tags?: string[];
  metaTags?: string[];
  key?: string;
  description?: string;
}

const Layout: NextPage<LayoutType> = ({
  children,
  title,
  key,
  metaTags,
  tags,
  cover_image,
  description,
}) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
  >
    <>
      {title && (
        <NextSeo
          title={`${title} - UNG`}
          description={description}
          openGraph={{
            type: 'article',
            url: `https://www.unghee.dev/${title}`,
            locale: 'ko_KR',
            title: `${title} - UNG`,
            description,
            images: [
              {
                url: cover_image || '/image/background.png',
                width: 800,
                height: 600,
                alt: 'thumbnail',
              },
            ],
            article: {
              tags: metaTags || ['default'],
            },
            site_name: 'UNGHEE-DEV',
          }}
        />
      )}
      {children}
    </>
  </motion.article>
);

export default Layout;
