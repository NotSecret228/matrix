import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, ...rest }, ref) => (
    <div className={clsx('card bg-[#3e3e3e]', className)} ref={ref} {...rest}>
      <div className='card-body'>
        <h2 className='card-title font-normal text-3xl text-white'>{title}</h2>
        <p className='text-left font-light text-[3.5vw] md:text-xl text-[#bababa] mt-auto'>
          {description}
        </p>
      </div>
    </div>
  )
);
