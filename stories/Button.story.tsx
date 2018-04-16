import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, styles, colorPalette, colorNames } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Button } from '../src';

addDecorator(withKnobs);

const stories = storiesOf('Button', module);
const info = withInfo({ inline: false, source: true, styles });

stories.add('Primary', info(() => {
  const label = text('Text', 'Click me');
  const cta = boolean('Call to Action', false);
  return <Button kind='primary' text={label} cta={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Secondary', info(() => {
  const label = text('Text', 'Click me');
  const cta = boolean('Call to Action', false);
  return <Button kind='secondary' text={label} cta={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Soft', info(() => {
  const label = text('Text', 'Click me');
  const cta = boolean('Call to Action', false);
  return <Button kind='soft' text={label} cta={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Custom', info(() => {
  const label = text('Text', 'Customize me');
  const cta = boolean('Call to Action', false);
  const color = text('Text Color', 'white');
  console.log(colorNames)
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
  const label = text('Text', 'Click me');
  const href = text('Href', 'https://tokbox.com');
  const kinds = { primary: 'primary', secondary: 'secondary', soft: 'soft' };
  const kind = select('Kind', kinds, 'primary');
  const cta = boolean('Call to Action', false);
  return <Button kind={kind} text={label} href={href} target="_blank" cta={cta} className="timtam" />
}));


