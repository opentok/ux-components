import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, infoStyles } from '../utils';
import { colorPalette, colorNames } from '../styles/colors';
import { withInfo } from '@storybook/addon-info';
import { Code } from '../../src';

const stories = storiesOf('Welcome', module);
const welcomeText = `
### Notes

Components are built with TypeScript, React, and PostCSS.

### Usage
~~~js
<div>This is an example component</div>
~~~

### To use this Storybook

Explore the panels on the left.
`;

const info = withInfo({ inline: true, source: true, styles: infoStyles, text: welcomeText });

stories.add('OpenTok UX Components', info(() => {
 return <div>This is an example component</div>
}));
