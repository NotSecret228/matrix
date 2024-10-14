import { FC, useEffect, useState } from 'react';
import { Card } from '../ui';

interface Card {
  title: string;
  imageUrl: string;
  alt: string;
}

const cards: Card[] = [
  {
    title: 'Как должен выглядеть ваш сайт',
    imageUrl: '/src/assets/answer-1.svg',
    alt: 'Как?',
  },
  {
    title: 'Как выгодно показать клиентам свои услуги',
    imageUrl: '/src/assets/answer-2.svg',
    alt: 'Услуги',
  },
  {
    title: 'На какие страницы и как вести рекламу',
    imageUrl: '/src/assets/answer-3.svg',
    alt: 'Реклама',
  },
  {
    title: 'Как сделать сайт актуальным на ближайшие пару лет',
    imageUrl: '/src/assets/answer-4.svg',
    alt: 'Актуальность',
  },
];

const questions = [
  'Какую CMS использовать?',
  'Какой дизайн выбрать?',
  'Как оптимизировать сайт?',
  'Как увеличить конверсию?',
];

export const ApproachHero: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuestion(prevQuestion => (prevQuestion + 1) % questions.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='mb-12'>
      <div className='hero bg-[url(./src/assets/questions.svg)] mb-24 h-[42vw] bg-auto bg-no-repeat'>
        <div className='hero-overlay bg-transparent'></div>
        <div className='hero-content'>
          <div className='text-center'>
            <h1 className='text-[3.2vw] leading-[4.7vw] mb-[1.5vw]'>
              Вы приходите с вопросами
            </h1>
            <p className='text-[2.5vw] font-light'>
              {questions[currentQuestion]}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-5xl mb-12'>И получаете ответы</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
