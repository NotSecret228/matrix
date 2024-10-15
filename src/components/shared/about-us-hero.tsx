import { FC } from 'react';

export const AboutUsHero: FC = () => {
  return (
    <section className='hero bg-[url(./src/assets/hero-image.jpg)] h-[42vw] mb-4 rounded-3xl'>
      <div className='hero-overlay bg-transparent '></div>
      <div className='hero-content'>
        <h1 className='text-[3.9vw]'>Как мы работаем?</h1>
      </div>
    </section>
  );
};
