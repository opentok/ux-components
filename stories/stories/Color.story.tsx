import * as React from 'react';
import copy from 'copy-to-clipboard';
import swal from 'sweetalert2';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { wInfo, infoStyles } from '../utils';
import { colorPalette, greyPalette } from '../styles/colors';
import { layout, font } from '../styles';

/** Style Rules */
export const greyLabel = { ...font.grey, ...font.italic, fontSize: '.8em' };
export const headerStyle = { ...font.raleway, textAlign: 'center' as 'center', ...font.weight300 };
const sampleStyle = { width: '20%' };
const colorStyle = {
  ...layout.flexCenter,
  ...layout.flexEnd,
  width: '100%',
  height: '135px',
  borderRadius: '0',
  marginBottom: '0px',
  cursor: 'pointer',
  textTransform: 'uppercase' as 'uppercase',
  boxSizing: 'border-box' as 'border-box',
  padding: '5px',
};

/** Stories */
const stories = storiesOf('Color', module);

/**
 * Display small modal when color code/name is copied.
 */
const onCopy = (color: string): void => {
  // const colorVarName = `$${colorName}`;
  copy(color);
  swal({
    position: 'top-end',
    width: '52px',
    showConfirmButton: false,
    timer: 1500,
    target: '#paletteContainer',
    background: color,
    backdrop: false
  });
};

/**
 * Full Color Palette
 */
stories.add('Palette', () => (
  <div id="paletteContainer" style={{ padding: '10px' }}>
    <h1 style={{ ...headerStyle, marginBottom: '5px' }} >Color Palette</h1>
    <h4 style={{ ...headerStyle, fontStyle: 'italic', ...font.grey, marginTop: '5px' }} >Click to Copy Color Code</h4>
    <div style={layout.flexWrap} >
      {
        Object.keys(colorPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div
              style={{ ...colorStyle, ...{ backgroundColor: colorPalette[colorName] } }}
              onClick={() => onCopy(colorPalette[colorName])}
            >
              <span style={{ ...font.nunito, ...font.white }}>{`${colorName}`}</span>
            </div>
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
    <h1 style={{ ...headerStyle, marginBottom: '5px' }} >Shades of Grey</h1>
    <h4 style={{ ...headerStyle, fontStyle: 'italic', ...font.grey, marginTop: '5px' }} >Click to Copy Color Code</h4>
    <div style={layout.flexWrap} >
      {
        Object.keys(greyPalette).map(colorName =>
          <div style={sampleStyle} key={colorName}>
            <div
              style={{ ...colorStyle, ...{ backgroundColor: greyPalette[colorName] } }}
              onClick={() => onCopy(greyPalette[colorName])}
            >
              <span style={{ ...font.nunito, ...font.white }}>{`${colorName}`}</span>
            </div>
          </div>
        )
      }
    </div>
  </div>
));
