export const colorPalette: { [key: string]: string } = {
  'Orchid Orange': '#FEA47F',
  'Spiro Blue': '#25CCF7',
  'Honey Glow': '#EAB543',
  'Sweet Garden': '#55E6C1',
  'Falling Star': '#CAD3C8',
  'Rich Gardenia': '#F97F51',
  'Clear Chill': '#1B9CFC',
  'White Pepper': '#F8EFBA',
  'Keppel': '#58B19F',
  'Ships Officer': '#2C3A47',
  'Firey Fuschia': '#B33771',
  'Bluebell': '#3B3B98',
  'Georgia Peach': '#FD7272',
  'Oasis Stream': '#9AECDB',
  'Bright Ube': '#D6A2E8',
  'Magenta': '#6D214F',
  'Navy Blue': '#182C61',
  'Sasquatch Socks': '#FC427B',
  'Pine Glade': '#BDC581',
  'Highligter Lavender': '#82589F',
};

export const colorNames = Object.keys(colorPalette).reduce((acc, color) => ({...acc, [color]: color }), {});

export const greyPalette: { [key: string]: string } = {
  'Grey 1': '#e6e6e6',
  'Grey 2': '#cccccc',
  'Grey 3': '#b3b3b3',
  'Grey 4': '#999999',
  'Grey 5': '#808080',
  'Grey 6': '#4d4d4d',
  'Grey 7': '#4d4d4d',
  'Grey 8': '#333333',
  'Grey 9': '#1a1a1a',
};

export const greyNames = Object.keys(greyPalette).reduce((acc, color) => ({...acc, [color]: color }), {});
