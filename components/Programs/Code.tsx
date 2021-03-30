// import styles from '@/styles/Programs/Code.module.scss';
import type { AppComponent } from '@/types/utils/programs';
import React, {useState} from 'react';
import {auto} from "framer-motion/types/render/dom/utils/value-types";

const CODE_HOME_PAGE = 'https://genemator-code.herokuapp.com';

const Code: React.FC<AppComponent> = () => {
  let codeWindow: Window | null;
  const [autoOpen, setAutoOpen] = useState(false)

  if (!autoOpen) {
    setAutoOpen(true)
    codeWindow = window.open(
      CODE_HOME_PAGE,
      'codeWindow',
      'width=1200, height=900'
    );
  }

  return (
    <article>
      <div style={{
        textAlign: "center",
        justifyContent: "center",
      }}>
        <h2>
          In order to let vscode keymaps work correctly, we opened it in a new
          global window!
        </h2>
        <br />
        <h3>If it didn&apos;t appear, press &quot;spawn the window&quot; button below:</h3>
        <button
          type="button"
          style={{
            margin: 10,
            padding: 10,
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 5
          }}
          onClick={() => {
            codeWindow = window.open(
              CODE_HOME_PAGE,
              'codeWindow',
              'width=900, height=1200'
            );
          }}
        >
          Spawn the window
        </button>
      </div>
    </article>

    // <iframe className={styles.code} title="Genium's Code" src={CODE_HOME_PAGE} />
  );
};

export default Code;

export const loaderOptions = {
  width: 400,
  height: 400
};
