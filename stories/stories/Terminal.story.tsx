import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { wInfo, infoStyles } from '../utils';
import { colorPalette, colorNames } from '../styles/colors';
import { Terminal, ITerminalContent } from '../../src';

const stories = storiesOf('Terminal', module);
const info = withInfo({ inline: false, source: true, styles: infoStyles });

stories.add('Empty', info(() => {
  const height = number('Height', 400);
  const width = number('Width', 600);
  const style = {
    height: `${height}px`,
    width: `${width}px`
  };
  return <Terminal style={style} />
}));

const uxComponentsContent: ITerminalContent[] = [
  { type: 'comment',  text: 'Download repo' },
  { type: 'code',  text: 'git clone git@github.com:opentok/ux-components.git' },
  { type: 'comment',  text: 'cd into components directory' },
  { type: 'code',  text: 'cd ux-components' },
  { type: 'comment',  text: 'Install dependencies' },
  { type: 'code',  text: 'yarn install' },
  { type: 'comment',  text: 'Run storybook' },
  { type: 'code',  text: 'yarn run storybook' },
  { type: 'comment',  text: 'UX Components Storybook running at localhost:6006 . . .', highlight: true },
];

stories.add('Content', info(() => {
  return <Terminal content={uxComponentsContent} />
}));

stories.add('Active', info(() => {
  const repeat = boolean('Repeat', false);
  return <Terminal content={uxComponentsContent} active repeat={repeat} />
}));


