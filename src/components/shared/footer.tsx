import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className='bg-[url(./src/assets/footer.jpg)] bg-no-repeat bg-cover rounded-t-[32px]'>
      <div className='flex flex-col gap-4 md:gap-0 justify-between items-center pt-[6.6vw] pr-[8.7vw] pb-[4.9vw] pl-[2.6vw] md:flex-row'>
        <p className='text-[2.9vw] leading-[3.75vw]'>Обсудить ваш проект</p>
        <div className='flex flex-row md:flex-col gap-4'>
          <a className='text-[2.2vw] hover:text-white' href='#'>
            matrix@gmail.com
          </a>
          <a className='text-[2.2vw] hover:text-white' href='#'>
            Написать в Telegram
          </a>
        </div>
      </div>
      <footer className='bg-[#161616] rounded-t-[32px] px-[2.2vw] py-[1.8vw]'>
        <p className='text-[1vw] leading-[1vw]'>2024-2024, © УНП 00000000</p>
      </footer>
    </div>
  );
};
