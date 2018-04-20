import * as React from 'react';
import copy from 'copy-to-clipboard';
import swal from 'sweetalert2';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { wInfo, styles, colorPalette, greyPalette } from './utils';


/** Style Rules */
const flex = { display: 'flex', flexWrap: 'wrap' as 'wrap' };
const ralewayFont = { fontFamily: 'Raleway' };
const nunitoFont = { fontFamily: 'Nunito', fontWeight: 300 as 300 };
const greyText = { color: greyPalette.grey3 };
const greyLabel = { ...greyText, fontStyle: 'italic' as 'italic', fontSize: '.8em' };
const sampleStyle = {
  width: '145px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  marginBottom: '15px',
};
const headerStyle = { ...ralewayFont, textAlign: 'center' as 'center', fontWeight: 300 as 300 };
const colorStyle = { width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px', cursor: 'pointer' };
const clickToCopy = { marginTop: '30px' };


/** Stories */
const stories = storiesOf('Color', module);

/**
 * Display small modal when color code/name is copied.
 */
const onCopy = (colorName: string, palette: {[key: string]: string}): void => {
  const colorVarName = `$${colorName}`;
  copy(colorVarName);
  swal({
    position: 'bottom-end',
    width: '52px',
    showConfirmButton: false,
    timer: 1500,
    target: '#paletteContainer',
    background: palette[colorName],
    backdrop: false
  });
};

/**
 * Full Color Palette
 */
stories.add('Palette', () => (
  <div id="paletteContainer" style={{ padding: '10px' }}>
    <h1 style={{...headerStyle, marginBottom: '5px'}} >Color Palette</h1>
    <h4 style={{ ...headerStyle, fontStyle: 'italic', ...greyText, marginTop: '5px' }} >Click to Copy Name</h4>
    <div style={flex} >
      {
        Object.keys(colorPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div
              style={{ ...colorStyle, ...{ backgroundColor: colorPalette[colorName] } }}
              onClick={() => onCopy(colorName, colorPalette)}
            />
            <span style={nunitoFont}>{`$${colorName}`}</span>
            <span style={{ ...nunitoFont, ...greyLabel }}>{colorPalette[colorName]}</span>
          </div>
        )
      }
    </div>
  </div>
));

/**
 * Shades of Grey
 */
stories.add('Grey', () => (
  <div style={{ padding: '10px' }}>
    <h1 style={{...headerStyle, marginBottom: '5px'}} >Shades of Grey</h1>
    <h4 style={{ ...headerStyle, fontStyle: 'italic', ...greyText, marginTop: '5px' }} >Click to Copy Name</h4>
    <div style={flex} >
      {
        Object.keys(greyPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div
              style={{ ...colorStyle, ...{ backgroundColor: greyPalette[colorName] } }}
              onClick={() => onCopy(colorName, greyPalette)}
            />
            <span style={nunitoFont}>{`$${colorName}`}</span>
            <span style={{ ...nunitoFont, ...greyLabel }}>{greyPalette[colorName]}</span>
          </div>
        )
      }
    </div>
  </div>
));


