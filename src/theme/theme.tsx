import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-brand-primary-pink',
  },
  fonts: {
    heading: `'Lato', san-serif`,
    body: 'DM Mono',
  },
});

export default theme;
