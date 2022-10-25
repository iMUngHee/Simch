import type { NextPage } from 'next';
import cls from '@libs/client/cls';
import { ReactNode } from 'react';

interface SkillProps {
  children: ReactNode;
  title: string;
  progress: string;
  color: string;
}

const Skill: NextPage<SkillProps> = ({ children, title, progress, color }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {children}
        <span className={`-ml-2 ${color}`}>{title}</span>
      </div>
      <div className="ml-4 h-2 w-2/3 overflow-hidden rounded-md bg-slate-100">
        <div
          className={cls(
            `${progress} h-2`,
            +progress.replace(/[^0-9]/g, '') >= 60
              ? 'bg-green-300'
              : +progress.replace(/[^0-9]/g, '') > 30
              ? 'bg-orange-300'
              : 'bg-red-300',
          )}
        />
      </div>
    </div>
  );
};

export default Skill;
