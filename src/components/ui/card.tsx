import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl: string;
  alt: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, imageUrl, alt, ...rest }, ref) => (
    <div className={clsx('card bg-[#3e3e3e]', className)} ref={ref} {...rest}>
      <div className='card-body'>
        <h2 className='card-title font-normal text-3xl text-white'>{title}</h2>
        <figure className='mt-auto'>
          <img src={imageUrl} alt={alt} />
        </figure>
      </div>
    </div>
  )
);
