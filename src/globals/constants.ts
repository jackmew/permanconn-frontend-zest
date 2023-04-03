import { IconBrandProducthunt } from '@tabler/icons';
export enum UrlPath {
  Root = '/',
  Product = '/product',
  ProductEdit = '/product/edit',
}
export const menuAll = [{ label: 'Product', icon: IconBrandProducthunt, link: UrlPath.Product }];

// export const host = 'https://dummyjson.com';
export const host = 'http://localhost:3001/permanconn-backend-zest';
