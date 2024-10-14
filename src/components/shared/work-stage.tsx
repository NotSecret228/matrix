import { FC } from 'react';

interface Stage {
  title: string;
  description: string;
}

export const WorkStage: FC<Stage> = ({ title, description }) => {
  return (
    <li className='step'>
      <div className='flex flex-col bg-[#3e3e3e] h-full mt-4 p-4 rounded-xl'>
        <h2 className='text-left text-[4vw] md:text-3xl mb-3'>{title}</h2>
        <p className='text-left font-light text-[3.5vw] md:text-xl text-[#bababa] mt-auto'>
          {description}
        </p>
      </div>
    </li>
  );
};
