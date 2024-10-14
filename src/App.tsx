import { FC } from 'react';
import {
  AboutUsHero,
  ApproachHero,
  Footer,
  Navbar,
  WorkStages,
} from './components/shared';

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <AboutUsHero />
      <ApproachHero />
      <WorkStages />
      <Footer />
    </>
  );
};
