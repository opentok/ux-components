import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Button.css';

export interface IButtonPropTypes {
  onClick?: React.MouseEventHandler<any>;
  label: string;
  children?: ReactNode[] | string;
  kind?: 'primary'| 'secondary' | 'soft';
  callToAction?: boolean;
  style?: { [key: string]: string };
  href?: string;
  target?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  onClick,
  label,
  children,
  kind = 'primary',
  callToAction = false,
  style = {},
  href,
  target,
  className,
  disabled = false,
}: IButtonPropTypes) {
  const text = label || children;
  const kindStyle = styles[kind] || '';
  const classes = className || '';
  const cta = callToAction ? styles.cta : '';
  if (href) {
    return (
      <Link
        className={`${styles.btn} ${kindStyle} ${classes} ${cta}`}
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
    <button className={`${styles.btn} ${kindStyle} ${cta}`} onClick={onClick} style={style} disabled={disabled}>
      <div>{text}</div>
    </button>
  );
}
