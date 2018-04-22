import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);