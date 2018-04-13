import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import Button from '../src/components/Button';
// import { MuiDecorator } from './mui-decorator';

// addDecorator(MuiDecorator);

storiesOf('Button', module)
  .add('action', () => (
    <Button kind="link" label="hello tim" onClick={() => null} />
  ));
