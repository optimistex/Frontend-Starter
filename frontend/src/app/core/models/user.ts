import { ProductItemRaw } from '@fe-core/models/product-item-raw';

interface UserOrderRaw {
  /** Order ID */
  id: number;
  products: ProductItemRaw[];
}

class UserName {
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(data?: Partial<UserName>) {
    this.firstName = data?.firstName ?? '';
    this.lastName = data?.lastName ?? '';
  }
}

class UserAddress {
  public readonly country: string;
  public readonly city: string;
  public readonly zip: string;
  public readonly street: string;

  constructor(data?: Partial<UserAddress>) {
    this.country = data?.country ?? '';
    this.city = data?.city ?? '';
    this.zip = data?.zip ?? '';
    this.street = data?.street ?? '';
  }
}

export class User {
  public readonly id: number;
  public readonly name: UserName;
  public readonly address: UserAddress;
  public readonly phone: string;
  public readonly avatar: string;
  public readonly email: string;
  public readonly role: 'ADMIN' | 'CUSTOMER' | 'GUEST';
  public readonly orders: UserOrderRaw[];

  constructor(data?: Partial<User>) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? new UserName({ firstName: 'Guest' });
    this.address = data?.address ?? new UserAddress();
    this.phone = data?.phone ?? '';
    this.avatar = data?.avatar ?? '';
    this.email = data?.email ?? '';
    this.role = data?.role ?? 'GUEST';
    this.orders = data?.orders ?? [];
  }

  public get isAdmin(): boolean {
    return this.role === 'ADMIN';
  }
}
