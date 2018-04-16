import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Terminal.css';

export interface ITerminalContent {
  type: 'code' | 'comment';
  text: string;
};

export interface ITerminalPropTypes {
  /** Text to display */
  content?: ITerminalContent[];
  /** Base size for the terminal */
  /** @default medium */
  size?: 'small' | 'medium' | 'large';
  /** Additional styles to apply */
  style?: { [key: string]: string };
  /** Additional className to apply */
  className?: string;
}

export default function Terminal({
  content = [{type: 'code', text: '_'}],
  size = 'medium',
  style = {},
  className = '',
}: ITerminalPropTypes) {
  const classes = classNames(styles.terminal, styles[size], className);
  return (
    <div className={classes} style={style} >
      <div className={styles.header}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.content}>
        <pre >
          {
            content.map(({type, text}) =>
              <code className={classNames(styles.line)}>
                <span className={styles[type]}>{text}</span>
              </code>
            )
          }
        </pre>
      </div>
    </div>
  );
}
