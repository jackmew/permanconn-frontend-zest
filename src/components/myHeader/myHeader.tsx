import { useState } from 'react';
import {
  Header,
  Group,
  UnstyledButton,
  Text,
  Menu,
  Box,
  useMantineColorScheme,
} from '@mantine/core';
import { IconLogout, IconSettings, IconUserCircle, IconChevronDown } from '@tabler/icons';
import Image from 'next/image';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './myHeader.styles';

export function MyHeader() {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const renderUserMenu = () => (
    <Menu
      position="bottom-end"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group spacing={7}>
            <IconUserCircle />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {'Zest'}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{'Settings'}</Menu.Label>
        {/*<Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account Settings</Menu.Item>*/}
        <Menu.Item
          onClick={() => console.log('logout')}
          icon={<IconLogout size={14} stroke={1.5} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  return (
    <Box pb={0}>
      <Header height={60} px="md" className={classes.header}>
        <Group position="apart" sx={{ height: '100%' }}>
          <Image
            priority
            src="/permanconn-zest/logo.png"
            height={42}
            width={231}
            alt="permanconn log"
          />
          <Group className={classes.hiddenMobile}>
            <ColorSchemeToggle />
            {renderUserMenu()}
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
