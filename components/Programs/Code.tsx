// import styles from '@/styles/Programs/Code.module.scss';
import type { AppComponent } from '@/types/utils/programs';

let AUTO_STATE_WINDOW = false
const CODE_HOME_PAGE = 'https://genemator-code.herokuapp.com';
const OPEN_THE_WINDOW = () => {
  window.open(CODE_HOME_PAGE, '', "toolbar=yes,scrollbars=yes,resizable=yes,height=850,width=1200")
}

const Code: React.FC<AppComponent> = () => {
  if (!AUTO_STATE_WINDOW) {
    OPEN_THE_WINDOW()
    AUTO_STATE_WINDOW = true
  }

  return (
    <div>
      <h2>Opening in a new global tab!</h2><br/>
    </div>

  // <iframe className={styles.code} title="Genium's Code" src={CODE_HOME_PAGE} />
)};

export default Code;

export const loaderOptions = {
  width: 400,
  height: 400
};
