/* eslint-disable no-unused-vars */
import theme from 'styled-theming';
export const primaryColor = '#003553';
export const primaryLightColor = '#055a8a';
export const secondaryColor = '#f89932';

export const mainBackgroundColor = theme('theme', {
  light: '#f0f0f0',
  dark: '#535b5d'
});

export const landingBackgroundColor = theme('theme', {
  light: '#f0f0f0',
  dark: primaryColor
});

export const navTextColor = theme('theme', {
  light: primaryColor,
  dark: 'white'
});

export const cardBackgroundColor = theme('theme', {
  light: 'white',
  dark: '#353f41'
});

export const twoInOneButtonColor = {
  left: primaryLightColor,
  right: secondaryColor
};
