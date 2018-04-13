import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { wInfo } from './utils';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('Welcome', module).addWithJSX(
  'Opentok Components Storybook ✳️',
  wInfo(`

    ### Notes

    Components are built with TypeScript, PostCSS, CSSModules, and CSSNext.

    ### Usage
    ~~~js
    <div>This is an example component</div>
    ~~~

    ### To use this Storybook

    Explore the panels on the left.
  `)(() => <div>This is an example component</div>)
);
