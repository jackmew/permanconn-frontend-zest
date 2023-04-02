import { createStyles } from '@mantine/core';
// mantine 6.0.0 calc - https://github.com/mantinedev/mantine/releases/tag/6.0.0
// omit px
export default createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    // original value is 1000, make it to 0 to let  Modal gray presentation cover work well.
    zIndex: 0,
  },
  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));
