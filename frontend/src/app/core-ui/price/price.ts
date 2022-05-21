export interface Price {
  /** A basic price value (eg. 1000) */
  price: number;

  /** Actual price equal `price - discount` (eg. 1000 - 10% = 900) */
  totalPrice: number;
}
