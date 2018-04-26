import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, infoStyles } from "../utils";
import { colorPalette, colorNames } from "../styles/colors";
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../src';


const stories = storiesOf('Button', module);
const info = withInfo({ inline: false, source: true, styles: infoStyles });
addDecorator(withKnobs);

stories.add('Primary', info(() => {
  const label = text('Text', 'Click me');
  const cta = boolean('Call to Action', false);
  return <Button kind='primary' text={label} cta={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Secondary', info(() => {
  const label = text('Text', 'Click me');
  return <Button kind='secondary' text={label} onClick={() => alert("I'm a button")} />
}));

stories.add('Danger', info(() => {
  const label = text('Text', 'Ruh roh');
  return <Button kind='danger' text={label} onClick={() => alert("This may have been a mistake")} />
}));

stories.add('Download', info(() => {
  const label = text('Text', 'Download');
  return <Button kind='download' text={label} onClick={() => alert("Downloading some file . . .")} />
}));

stories.add('Custom', info(() => {
  const label = text('Text', 'Customize me');
  const cta = boolean('Call to Action', false);
  const color = text('Text Color', 'white');
  const selectBackground = select('Color Palette', colorNames, 'spiroBlue');
  const customBackground = text('Custom Background', null);
  const border = boolean('Border', false);
  const borderColor = text('Border Color', 'darkgrey');
  const style = {
    color,
    border: border ? `1px solid ${borderColor}` : '',
    backgroundColor: customBackground || colorPalette[selectBackground],
  };
  return <Button text={label} cta={cta} style={style} />
}));

stories.add('Link', info(() => {
  const label = text('Text', 'Go Home');
  const href = text('Href', 'https://tokbox.com');
  const kinds = { primary: 'primary', secondary: 'secondary' };
  const kind = select('Kind', kinds, 'primary');
  return <Button kind={kind} text={label} href={href} target="_blank" cta />
}));


