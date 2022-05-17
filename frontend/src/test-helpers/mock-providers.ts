export function mock<T>(data: Partial<T>): T {
  return data as T;
}

export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};
