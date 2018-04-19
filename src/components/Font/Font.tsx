import * as React from 'react';
import { CSSProperties } from 'react';
import classNames from 'classnames';
import * as styles from './Font.css';

/**
 * This component is only used to provide font samples in Storybook
 * and is not included in the npm package build.
 */

export type FontWeight = 'extraLight' | 'light' | 'regular' | 'bold';

export interface IFontPropTypes {
  /** Text to display */
  text: string;
  /** The font family to use */
  family?: 'nunito' | 'raleway' | 'code'
  /** The font weight to use */
  weight?: FontWeight;
  /** The font weight to use */
  size?: number;
  // /** Additional styles to apply */
  // color?: string;
  // /** Should the font be italic */
  // italic?: boolean;
  /** Additional styles to apply */
  style?: { [key: string]: string };

}

export default function Font({
  text,
  family = 'nunito',
  weight = 'regular',
  size,
  style = {},
}: IFontPropTypes) {
  const classes = classNames(
    styles.font,
    styles[family],
    styles[weight],
  )
  const extendedStyle = { ...(size ? { fontSize: size } : {}), ...style } as CSSProperties;
  return (
    <div className={classes} style={extendedStyle}>{text}</div>
  );
}
