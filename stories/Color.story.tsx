import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { wInfo, styles, colorPalette, greyPalette } from './utils';

const stories = storiesOf('Color', module);
const flex = { display: 'flex', flexWrap: 'wrap' as 'wrap' };
const sampleStyle = {
  width: '145px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  marginBottom: '15px',
};
const colorStyle = { width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px' };
const nunitoFont = { fontFamily: 'Nunito', fontWeight: 300 as 300 };
const ralewayFont = { fontFamily: 'Raleway' };
stories.add('Primary', () => (
  <div style={{padding: '10px'}}>
    <h1 style={{...ralewayFont, textAlign: 'center', fontWeight: 300}} >Primary Colors</h1>
    <div style={flex} >
      {
        Object.keys(colorPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div style={{ ...colorStyle, ...{ backgroundColor: colorPalette[colorName] } }} />
            <span style={nunitoFont}>{colorName}</span>
          </div>
        )
      }
    </div>
  </div>
));

stories.add('Grey', () => (
  <div style={{padding: '10px'}}>
    <h1 style={{...ralewayFont, textAlign: 'center', fontWeight: 300}} >Shades of Grey</h1>
    <div style={flex} >
      {
        Object.keys(greyPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div style={{ ...colorStyle, ...{ backgroundColor: greyPalette[colorName] } }} />
            <span style={nunitoFont}>{colorName}</span>
          </div>
        )
      }
    </div>
  </div>
));


