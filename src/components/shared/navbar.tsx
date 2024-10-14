import { FC } from 'react';

interface Item {
  id: number;
  title: string;
  url: string;
}

const items: Item[] = [
  {
    id: 0,
    title: 'Как мы работаем',
    url: '#our-work',
  },
  {
    id: 1,
    title: 'Услуги',
    url: '#services',
  },
  {
    id: 2,
    title: 'Портфолио',
    url: '#portfolio',
  },
  {
    id: 3,
    title: 'Кейсы',
    url: '#cases',
  },
  {
    id: 4,
    title: 'Контакты',
    url: '#contacts',
  },
];

const generateList = () =>
  items.map(({ id, title, url }) => (
    <li key={id}>
      <a href={url}>{title}</a>
    </li>
  ));

export const Navbar: FC = () => {
  return (
    <div className='drawer'>
      <input id='navbar-driver' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='navbar w-full'>
          <div className='mx-2 flex-1 px-2'>Matrix</div>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='navbar-driver'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-6 w-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='hidden flex-none lg:block'>
            <ul className='menu menu-horizontal'>
              {/* Navbar menu content here */}
              {generateList()}
            </ul>
          </div>
        </div>
      </div>
      <div className='z-50 drawer-side'>
        <label
          htmlFor='navbar-driver'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          {generateList()}
        </ul>
      </div>
    </div>
  );
};
