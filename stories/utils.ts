import React from 'react';
import addonInfo from '@storybook/addon-info';
import { withInfo } from '@storybook/addon-info';
export const styles = {
  header: {
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
      marginRight: "20px",
      fontSize: "32px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
    },
    h2: {
      display: "inline",
      fontFamily: "sans-serif",
      fontWeight: "300",
      color: "#999",
    }
  },
  infoBody: {
    fontFamily: "sans-serif",
    fontWeight: "300",
    backgroundColor: "#eee",
    padding: "10px",
    lineHeight: "2",
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
    h2: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
  },
  source: {
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
      marginTop: "10px",
    },
    h2: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
  },
  propTableHead: {
    fontFamily: "sans-serif",
    fontWeight: 300,
    marginTop: "5px"
  }
};

export const colorMap = {
  orchidOrange: '#FEA47F',
  spiroBlue: '#25CCF7',
  honeyGlow: '#EAB543',
  sweetGarden: '#55E6C1',
  fallingStar: '#CAD3C8',
  richGardenia: '#F97F51',
  clearChill: '#1B9CFC',
  whitePepper: '#F8EFBA',
  keppel: '#58B19F',
  shipsOfficer: '#2C3A47',
  fireyFuschia: '#B33771',
  bluebell: '#B33771',
  georgiaPeach: '#FD7272',
  oasisStream: '#9AECDB',
  brightUbe: '#D6A2E8',
  magenta: '#6D214F',
  navyBlue: '#182C61',
  sasquatchSocks: '#FC427B',
  pineGlade: '#FC427B',
  highligterLavender: '#82589F',
};

export const wInfo = (text: string) => withInfo({ inline: false, source: true, styles, text, header: true });
