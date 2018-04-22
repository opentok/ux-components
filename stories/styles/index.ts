import { CSSProperties } from 'react';
import { colorNames, colorPalette, greyNames, greyPalette } from './colors';

export const flex = { display: 'flex' };
export const flexCenter = { ...flex, justifyContent: 'center', alignItems: 'center' };
export const flexEnd = { ...flex, justifyContent: 'flex-end', alignItems: 'flex-end' };
export const flexCol = { ...flex, flexDirection: 'column' as 'column', justifyContent: 'center' };
export const flexWrap = { ...flex, flexWrap: 'wrap' as 'wrap' };

export const layout: { [key: string]: CSSProperties } = {
  flex,
  flexCenter,
  flexCol,
  flexEnd,
  flexWrap,
};

export const font: { [key: string]: CSSProperties } = {
  raleway: { fontFamily: 'Raleway' },
  nunito: { fontFamily: 'Nunito', fontWeight: 300 as 300 },
  grey: { color: greyPalette['Grey 4'] },
  white: { color: 'white' },
  italic: { fontStyle: 'italic' as 'italic' },
  weight300 : { fontWeight: 300 as 300 },
};
