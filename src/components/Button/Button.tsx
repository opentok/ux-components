import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './Button.css';

export interface IButtonPropTypes {
  /** Text to display */
  text: string;
  /** Click handler for the button */
  onClick?: React.MouseEventHandler<any>; // can we add things here
  /** Which style should the button have */
  /** @default primary */
  kind?: 'primary'| 'secondary' | 'soft';
  /** Include a Call-to-Action arrow? */
  /** @default false*/
  cta?: boolean;
  /** Additional styles to apply */
  style?: { [key: string]: string };
  /** Optional href is we want an <a /> or <Link /> */
  href?: string;
  /** Should we use a React Router <Link /> component? */
  /** @default false */
  link?: boolean;
  /** Optional target for href */
  target?: string;
  /** Additional className to apply */
  className?: string;
  /** Should the button be disabled? */
  /** @default false */
  disabled?: boolean;
}

export default function Button({
  onClick,
  text,
  kind = 'primary',
  cta = false,
  style = {},
  href,
  link = false,
  target,
  className,
  disabled = false,
}: IButtonPropTypes) {
  if (!!link && !href) {
    throw new TypeError('A Button that exposes a Link must include an href.');
  }
  const classes = classNames(
    styles.btn,
    styles[kind] || '',
    { [styles['cta']]: cta },
    className || '',
  )
  if (href) {
    if (link) {
      return (
        <Link
          className={classes}
          to={href}
          target={target}
          onClick={onClick}
          style={style}
        >
          <span className={style.background} />
          <span>{text}</span>
        </Link>
      );
    }
    return (
      <button className={classes} onClick={onClick} style={style} disabled={disabled}>
        <a href={href} target={target}>{text}</a>
      </button>
    );
  }
  return (
    <button className={classes} onClick={onClick} style={style} disabled={disabled}>
      <div>{text}</div>
    </button>
  );
}
