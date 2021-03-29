import styles from '@/styles/Programs/Code.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const CODE_HOME_PAGE = 'http://genemator-code.herokuapp.com';

const Code: React.FC<AppComponent> = () => (
  <iframe className={styles.code} title="Genium's Code" src={CODE_HOME_PAGE} />
);

export default Code;

export const loaderOptions = {
  width: 850,
  height: 850
};
