import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, styles, colorPalette, colorNames } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Code } from '../src';

addDecorator(withKnobs);

const stories = storiesOf('Code', module);
const info = withInfo({ inline: false, source: true, styles });

stories.add('Primary', info(() => {
  const code = text('Code', 'I am some text to be displayed');
  return <Code text={code} />
}));


