import { ProductItemRaw } from '@fe-core/models/product-item-raw';

export interface CartRaw {
  /** User ID */
  id: number;

  products: ProductItemRaw[];
}
