import { HttpParams } from '@angular/common/http';

export type BuildParams = Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;

export function buildHttpParams(params?: BuildParams): HttpParams | undefined {
  if (!params) {
    return undefined;
  }
  const filteredParams = Object.keys(params).reduce<BuildParams>((acc, key) => {
    if (params[key] ?? undefined) {
      acc[key] = params[key];
    }
    return acc;
  }, {});

  return new HttpParams({ fromObject: filteredParams });
}
