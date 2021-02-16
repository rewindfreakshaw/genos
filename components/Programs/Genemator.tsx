import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const GENEMATOR_HOME_PAGE = 'https://genemator.me/';

const Genemator: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="Genemator" src={GENEMATOR_HOME_PAGE} />
);

export default Genemator;

export const loaderOptions = {
  width: 1000,
  height: 750
};
