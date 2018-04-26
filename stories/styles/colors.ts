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
  'Grey 0': 'rgb(242, 242, 242)',
  'Grey 1': 'rgb(230, 230, 230)',
  'Grey 2': 'rgb(204, 204, 204)',
  'Grey 3': 'rgb(179, 179, 179)',
  'Grey 4': 'rgb(153, 153, 153)',
  'Grey 5': 'grey',
  'Grey 6': 'rgb(102, 102, 102)',
  'Grey 7': 'rgb(77, 77, 77)',
  'Grey 8': 'rgb(51, 51, 51)',
  'Grey 9': 'rgb(26, 26, 26)',
  'Grey 10': 'rgb(13, 13, 13)',
};


export const greyNames = Object.keys(greyPalette).reduce((acc, color) => ({...acc, [color]: color }), {});
