import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const BLOG_HOME_PAGE = 'https://old.bsba.uz/';

const Blog: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="Blog" src={BLOG_HOME_PAGE} />
);

export default Blog;

export const loaderOptions = {
  width: 900,
  height: 725
};
