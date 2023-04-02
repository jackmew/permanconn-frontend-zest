import { IconUserCircle } from '@tabler/icons';
export enum UrlPath {
  Root = '/',
  User = '/user',
}
export const menuAll = [{ label: 'User', icon: IconUserCircle, link: UrlPath.User }];
