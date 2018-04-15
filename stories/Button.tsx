import * as React from 'react';
import { addDecorator, setAddon,storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { wInfo, styles } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Button } from '../src';

addDecorator(withKnobs);

const stories = storiesOf('Button', module);
const info = withInfo({ inline: false, source: true, styles });

stories.add('Primary', info(() => {
  const label = text('Text', 'Click me');
  const cta =  boolean('Call to Action', false);
  return <Button kind='primary' text={label} callToAction={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Secondary', info(() => {
  const label = text('Text', 'Click me');
  const cta =  boolean('Call to Action', false);
  return <Button kind='secondary' text={label} callToAction={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Soft', info(() => {
  const label = text('Text', 'Click me');
  const cta =  boolean('Call to Action', false);
  return <Button kind='soft' text={label} callToAction={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Link', info(() => {
  const label = text('Text', 'Click me');
  const href = text('Href', 'https://tokbox.com');
  const kinds =  { primary: 'primary', secondary: 'secondary', soft: 'soft' };
  const kind = select('Kind', kinds, 'primary');
  const cta =  boolean('Call to Action', false);
  return <Button kind={kind} text={label} href={href} target="_blank" callToAction={cta} />
}));


