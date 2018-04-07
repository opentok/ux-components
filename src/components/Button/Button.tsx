import * as React from 'react';
import { ReactNode } from 'react';
import 'react-dom';
import { Link } from 'react-router-dom';
import * as styles from './Button.css';


export interface ButtonPropTypes {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  label: string;
  children?: ReactNode[];
  kind: 'link' | 'action';
  style?: { [key: string]: string };
  href?: string;
  target?: string;
  className?: string;
}

export default function Button({ onClick, label, children, kind, style = {}, href, target, className }: ButtonPropTypes): JSX.Element {
  const text = label || children;
  const kindStyle = styles[kind] || '';
  const classes = className || '';
  if (href) {
    return (
      <Link
        className={`${style.btn} ${kindStyle} ${classes}`}
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
    <button className={`${style.btn} ${kindStyle}`} onClick={onClick} style={style}>
      <div>{text}</div>
    </button>
  );
}


