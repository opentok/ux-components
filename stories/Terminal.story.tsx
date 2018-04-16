import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { wInfo, styles, colorPalette, colorNames } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Terminal } from '../src';
import { ITerminalContent } from '../src/components/Terminal/Terminal';

const stories = storiesOf('Terminal', module);
const info = withInfo({ inline: false, source: true, styles });
const terminalSizes = { small: 'small', medium: 'medium', large: 'large'};

stories.add('Empty', info(() => {
  const size = select('Size', terminalSizes, 'medium');
  return <Terminal size={size} />
}));

stories.add('Run Storybook', info(() => {
  const size = select('Size', terminalSizes, 'medium');
  const content: ITerminalContent[] = [
    { type: 'comment',  text: 'Download repo' },
    { type: 'code',  text: 'git clone git@github.com:opentok/ux-components.git' },
    { type: 'comment',  text: 'cd into components directory' },
    { type: 'code',  text: 'cd ux-components' },
    { type: 'comment',  text: 'Install dependencies' },
    { type: 'code',  text: 'yarn install' },
    { type: 'comment',  text: 'Run storybook' },
    { type: 'code',  text: 'yarn run storybook' },
  ];
  return <Terminal content={content} size={size} />
}));


