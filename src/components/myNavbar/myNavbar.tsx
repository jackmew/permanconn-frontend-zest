import { Navbar, ScrollArea } from '@mantine/core';
import { menuAll } from '@globals/constants';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import useStyles from './myNavbar.styles';

export function MyNavbar() {
  const { classes } = useStyles();
  const links = menuAll.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
