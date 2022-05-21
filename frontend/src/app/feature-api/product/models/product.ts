import { Price } from '@fe-core-ui/price/price';

export class Product {
  public readonly id: number;
  public readonly name: string;
  public readonly description: string;
  public readonly defaultImage: string;
  public readonly images: string[];
  public readonly price: number;
  public readonly discount: number;

  constructor(data?: Partial<Product>) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? '';
    this.description = data?.description ?? '';
    this.defaultImage = data?.defaultImage ?? '';
    this.images = data?.images ?? [];
    this.price = data?.price ?? 0;
    this.discount = data?.discount ?? 0;
  }

  public calculatePrice(quantity: number = 1): Price {
    const price = this.price * quantity;
    const totalPrice = price - price * this.discount / 100;
    return { price, totalPrice };
  }
}
