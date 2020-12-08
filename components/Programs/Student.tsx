import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const STUDENT_HOME_PAGE = 'https://intranet.wiut.uz/Account/Login?ReturnUrl=%2fUserModuleMaterials';

const Student: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="Student" src={STUDENT_HOME_PAGE} />
);

export default Student;

export const loaderOptions = {
  width: 900,
  height: 725
};
