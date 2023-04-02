import { DEFAULT_THEME, MantineThemeBase } from '@mantine/core';
// https://mantine.dev/theming/theme-object/
export const myTheme: Partial<MantineThemeBase> = {
  colors: {
    ...DEFAULT_THEME.colors,
  },
};
