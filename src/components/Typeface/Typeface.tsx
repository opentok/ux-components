import * as React from 'react';
import { CSSProperties } from 'react';
import classNames from 'classnames';
import * as styles from './Typeface.css';

/**
 * This component is only used to provide font samples in Storybook
 * and is not included in the npm package build.
 */

export type FontWeight = 'extraLight' | 'light' | 'regular' | 'bold';

export interface ITypefacePropTypes {
  /** Text to display */
  text: string;
  /** The font family to use */
  family?: 'nunito' | 'raleway' | 'code'
  /** The font weight to use */
  weight?: FontWeight;
  /** The font weight to use */
  size?: number;
  /** Additional styles to apply */
  style?: { [key: string]: string };

}

export default function Typeface({
  text,
  family = 'nunito',
  weight = 'regular',
  size,
  style = {},
}: ITypefacePropTypes) {
  const classes = classNames(
    styles.typeface,
    styles[family],
    styles[weight],
  )
  const extendedStyle = { ...(size ? { fontSize: size } : {}), ...style } as CSSProperties;
  return (
    <div className={classes} style={extendedStyle}>{text}</div>
  );
}
