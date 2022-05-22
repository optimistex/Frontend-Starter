import { Price } from '@fe-core-ui/price/price';

function makeUrl(originUrl: string | undefined, id: number, type: string | number): string {
  return originUrl ? `${originUrl}?id=${id}&type=${type}` : '';
}

export class Product {
  public readonly id: number;
  public readonly name: string;
  public readonly description: string;
  public readonly defaultImage: string;
  public readonly images: string[];
  public readonly price: number;
  public readonly discount: number;

  // Calculated
  public readonly srcDefaultImage: string;
  public readonly srcImages: string[];

  constructor(data?: Partial<Product>) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? '';
    this.description = data?.description ?? '';
    this.defaultImage = data?.defaultImage ?? '';
    this.images = data?.images ?? [];
    this.price = data?.price ?? 0;
    this.discount = data?.discount ?? 0;

    // Calculated
    this.srcDefaultImage = makeUrl(data?.defaultImage, this.id, 'default');
    this.srcImages = data?.images?.map((url, idx) => makeUrl(url, this.id, idx)) ?? [];
  }

  public calculatePrice(quantity: number = 1): Price {
    const price = this.price * quantity;
    const totalPrice = price - price * this.discount / 100;
    return { price, totalPrice };
  }
}
