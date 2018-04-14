import * as React from 'react';
import { addDecorator, setAddon,storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { wInfo, styles } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Button } from '../src';

addDecorator(withKnobs);

const stories = storiesOf('Button', module);
const info = withInfo({ inline: false, source: true, styles, text: 'Kinds' });

stories.add('Kinds', info(() => {
  const name = text('Label', 'Click me');
  const kinds =  { primary: 'primary', secondary: 'secondary', soft: 'soft' };
  const kind = select('Kind', kinds, 'primary');
  const cta =  boolean('Call to Action', false);
  return <Button kind={kind} label={name} callToAction={cta} onClick={() => alert('hello there')} />
}));

// stories.add('Action', wInfo('')(() => {
//   const name = text('Label', 'Click me');
//   return <Button kind='action' label={name} onClick={() => alert('hello there')} />
// }));

// stories.add('Link', wInfo('')(() => {
//   const name = text('Label', 'Go Home');
//   return <Button kind='link' label={name} onClick={() => alert('Nowhere to go, sorry')} />
// }));


