import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { colorPalette, colorNames, greyPalette, greyNames } from './styles/colors';
import { withInfo } from '@storybook/addon-info';
import Typeface, { FontWeight } from '../src/components/Typeface/Typeface';

addDecorator(withKnobs);
const stories = storiesOf('Typeface', module);
const extendedPalette = { ...{ Black: '#000000' }, ...greyPalette, ...colorPalette };
const extendedColorNames = { ...{ Black: 'Black' },  ...greyNames, ...colorNames };
const typefaceContainerStyle = { padding: '40px 10px' };

stories.add('Nunito', () => {
  const selectText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'Black');
  const customColor = text('Custom Color', null);
  const selectWeight = select('Weight', ['extraLight', 'light', 'regular', 'bold'], 'regular') as FontWeight;
  const color = customColor || extendedPalette[selectColor];
  const italic = boolean('Italic', false);
  const weight = italic ? 'extraLight' : selectWeight;
  const sampleText: string = italic ? 'Italic is only available in extraLight Typeface weight' : selectText;
  const style = { color, fontStyle: italic ? 'italic' : '' };
  return (
  <div style={typefaceContainerStyle}>
    <Typeface text={sampleText} family="nunito" weight={weight} size={12} style={style} />
    <Typeface text={sampleText} family="nunito" weight={weight} size={16} style={style} />
    <Typeface text={sampleText} family="nunito" weight={weight} size={24} style={style} />
    <Typeface text={sampleText} family="nunito" weight={weight} size={32} style={style}/>
    <Typeface text={sampleText} family="nunito" weight={weight} size={48} style={style}/>
  </div>
  )
});

stories.add('Raleway', () => {
  const sampleText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'Black');
  const customColor = text('Custom Color', null);
  const weight = select('Weight', ['light', 'regular', 'bold'], 'regular') as FontWeight;
  const style = { color: customColor || extendedPalette[selectColor] };
  return (
  <div style={typefaceContainerStyle}>
    <Typeface text={sampleText} family="raleway" weight={weight} size={12} style={style} />
    <Typeface text={sampleText} family="raleway" weight={weight} size={16} style={style} />
    <Typeface text={sampleText} family="raleway" weight={weight} size={24} style={style} />
    <Typeface text={sampleText} family="raleway" weight={weight} size={32} style={style} />
    <Typeface text={sampleText} family="raleway" weight={weight} size={48} style={style} />
  </div>
  )
});

stories.add('Source Code Pro', () => {
  const sampleText = text('Text', 'The quick brown fox jumps over the lazy dog.');
  const selectColor = select('Color', extendedColorNames, 'Black');
  const customColor = text('Custom Color', null);
  const color = customColor || extendedPalette[selectColor];
  const style = { color: customColor || extendedPalette[selectColor] };
  return (
  <div style={typefaceContainerStyle}>
    <Typeface text={sampleText} family="code" size={12} style={style} />
    <Typeface text={sampleText} family="code" size={16} style={style} />
    <Typeface text={sampleText} family="code" size={24} style={style} />
    <Typeface text={sampleText} family="code" size={32} style={style} />
    <Typeface text={sampleText} family="code" size={48} style={style} />
  </div>
  )
});


