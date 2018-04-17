import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './Code.css';

export interface ICodePropTypes {
  /** Text to display */
  text: string;
  /** Additional styles to apply */
  style?: { [key: string]: string };
  /** Additional className to apply */
  className?: string;
}

export default function Code({
  text,
  style = {},
  className = ''
}: ICodePropTypes) {
  const classes = classNames(styles.code, className)
  return (
    <pre className={classes} style={style}>
      <code>{text}</code>
    </pre>
  );
}
