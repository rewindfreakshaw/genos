import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const TELEGRAM_HOME_PAGE = 'https://evgeny-nadymov.github.io/telegram-react/';

const Genemator: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="Telegram" src={TELEGRAM_HOME_PAGE} />
);

export default Genemator;

export const loaderOptions = {
  width: 1100,
  height: 800
};
