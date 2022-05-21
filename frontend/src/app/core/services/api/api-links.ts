import { ApiLinks } from '@fe-core/services/api/api-links.interface';

export const apiLinks: ApiLinks = {
  productItemApi: '/products/{productId}',
  productListApi: '/products',

  cartItemApi: '/carts/{userId}',

  userListApi: '/users',
};
