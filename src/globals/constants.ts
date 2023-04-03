import { IconBrandProducthunt } from '@tabler/icons';
export enum UrlPath {
  Root = '/',
  Product = '/product',
}
export const menuAll = [{ label: 'Product', icon: IconBrandProducthunt, link: UrlPath.Product }];
