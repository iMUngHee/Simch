/* Types */
import { AppDispatch } from '@libs/client/redux/store';
import { DocsDataType } from 'src/pages/posts';
import { NextPage } from 'next';

/* lib */
import { toggleType } from '@libs/client/redux/posts';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

/* Components */
import { TagCloud } from 'react-tagcloud';
import Layout from './Layout/animate';
import Link from 'next/link';

const Tags: NextPage<DocsDataType> = ({ tagInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onSelect = () => {
    dispatch(toggleType('recent'));
  };

  const customRenderer = (tag: any, size: number) => {
    return (
      <Link key={tag.value} href={`/posts?tag=${tag.value}`} passHref>
        <motion.a
          initial={{ y: 0, opacity: 1 }}
          whileHover={{ y: -3, opacity: 0.6 }}
          transition={{ duration: 0.3 }}
          onClick={onSelect}
          style={{
            fontSize: `${size / 2}em`,
            margin: '0 3px',
            padding: '0 3px',
            display: 'inline-block',
            fontFamily: 'RocknRoll One',
            cursor: 'pointer',
          }}
        >
          {tag.value}
        </motion.a>
      </Link>
    );
  };

  return (
    <Layout title="Tags">
      <div className="flex h-full w-full items-center justify-center text-left">
        <TagCloud
          tags={tagInfo!}
          maxSize={5}
          minSize={2}
          renderer={customRenderer}
        />
      </div>
    </Layout>
  );
};

export default Tags;
