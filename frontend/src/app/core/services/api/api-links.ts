import { ApiLinks } from '@fe-core/services/api/api-links.interface';

export const apiLinks: ApiLinks = {
  productItemApi: '/products/{productId}',
  productListApi: '/products',
  productRecommendedListApi: '/recommendeds',

  cartItemApi: '/carts/{userId}',

  userListApi: '/users',
};
