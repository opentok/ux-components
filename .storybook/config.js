import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);

function loadStories() {
    require('./welcomeStory');
    require('../stories');
}

configure(loadStories, module);