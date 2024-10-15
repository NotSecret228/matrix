import { FC } from 'react';
import { WorkStage } from './work-stage';

interface Stage {
  id: number;
  title: string;
  description: string;
}

const stages: Stage[] = [
  {
    id: 0,
    title: 'Изучаем ваш бизнес',
    description:
      'Результатом этого будет является стратегия позиционирования на рынке, мы будем понимать наши цели и ограничения.',
  },
  {
    id: 1,
    title: 'Работаем с макетами, пишем код',
    description:
      'Мы получаем сайт, который является инструментом продаж и он готов обрабатывать входящих клиентов.',
  },
  {
    id: 2,
    title: 'Улучшаем конверсии, изучаем клиентов',
    description:
      'Проверяем на практике наши идеи, по возможности дорабатываем узкие моменты в воронке продаж.',
  },
];

export const WorkStages: FC = () => {
  return (
    <section className='mb-12'>
      <h1 className='text-5xl mb-4'>Этапы работы</h1>
      <ul className='mx-auto steps steps-vertical md:steps-horizontal w-full gap-4'>
        {stages.map(stage => (
          <WorkStage key={stage.id} {...stage} />
        ))}
      </ul>
    </section>
  );
};
