import { NextPage } from 'next';
import cls from '@libs/client/cls';
import { ReactNode } from 'react';

interface ParagraphType {
  children: ReactNode;
  style?: string;
}

const Paragraph: NextPage<ParagraphType> = ({ children, style }) => {
  return <div className={cls('mt-2 indent-4', style || '')}>{children}</div>;
};

export default Paragraph;
