import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import Button from '../src/components/Button';

import { withKnobs, text, boolean, number, array, select } from '@storybook/addon-knobs/react';

const stories = storiesOf('Button', module);

stories.add('kinds', () => {
  const name = text('label', 'Hello Tim');
  const kind = select('kind', { action: 'action', link: 'link' }, 'action');
  return <Button kind={kind} label={name} />
});


