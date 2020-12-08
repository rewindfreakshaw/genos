import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const GITHUB_HOME_PAGE = 'https://github.com/';

const GitHub: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="GitHub" src={GITHUB_HOME_PAGE} />
);

export default GitHub;

export const loaderOptions = {
  width: 900,
  height: 725
};
