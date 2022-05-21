import { ApiLinks } from '@fe-core/services/api/api-links.interface';

export const apiLinks: ApiLinks = {
  productGetList: '/products',

  cartGetItem: '/carts/{userId}',
};
