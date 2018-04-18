import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, styles, colorPalette, colorNames } from "./utils";
import { withInfo } from '@storybook/addon-info';
import Font, { FontWeight } from '../src/components/Font/Font';

addDecorator(withKnobs);
const stories = storiesOf('Font', module);
const fontStoryInfo = 'Font Components only exist to provide examples for Storybook';
const info = withInfo({ inline: false, source: true, styles, text: fontStoryInfo });
const extendedPalette = { ...{ black: '#000000' }, ...colorPalette };
const extendedColorNames = { ...{ black: 'black' }, ...colorNames };
const fontContainerStyle = { padding: '40px 10px' };

stories.add('Nunito', info(() => {
  const selectText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'black');
  const customColor = text('Custom Color', null);
  const selectWeight = select('Weight', ['extraLight', 'light', 'regular', 'bold'], 'regular') as FontWeight;
  const color = customColor || extendedPalette[selectColor];
  const italic = boolean('Italic', false);
  const weight = italic ? 'extraLight' : selectWeight;
  const sampleText: string = italic ? 'Italic is only available in extraLight font weight' : selectText;
  const style = { color, fontStyle: italic ? 'italic' : '' };
  return (
  <div style={fontContainerStyle}>
    <Font text={sampleText} family="nunito" weight={weight} size={12} style={style} />
    <Font text={sampleText} family="nunito" weight={weight} size={16} style={style} />
    <Font text={sampleText} family="nunito" weight={weight} size={24} style={style} />
    <Font text={sampleText} family="nunito" weight={weight} size={32} style={style}/>
    <Font text={sampleText} family="nunito" weight={weight} size={48} style={style}/>
  </div>
  )
}));

stories.add('Raleway', info(() => {
  const sampleText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'black');
  const customColor = text('Custom Color', null);
  const weight = select('Weight', ['light', 'regular', 'bold'], 'regular') as FontWeight;
  const style = { color: customColor || extendedPalette[selectColor] };
  return (
  <div style={fontContainerStyle}>
    <Font text={sampleText} family="raleway" weight={weight} size={12} style={style} />
    <Font text={sampleText} family="raleway" weight={weight} size={16} style={style} />
    <Font text={sampleText} family="raleway" weight={weight} size={24} style={style} />
    <Font text={sampleText} family="raleway" weight={weight} size={32} style={style} />
    <Font text={sampleText} family="raleway" weight={weight} size={48} style={style} />
  </div>
  )
}));

stories.add('Source Code Pro', info(() => {
  const sampleText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'black');
  const customColor = text('Custom Color', null);
  const color = customColor || extendedPalette[selectColor];
  const style = { color: customColor || extendedPalette[selectColor] };
  return (
  <div style={fontContainerStyle}>
    <Font text={sampleText} family="code" size={12} style={style} />
    <Font text={sampleText} family="code" size={16} style={style} />
    <Font text={sampleText} family="code" size={24} style={style} />
    <Font text={sampleText} family="code" size={32} style={style} />
    <Font text={sampleText} family="code" size={48} style={style} />
  </div>
  )
}));



