import { HttpParams } from '@angular/common/http';

export function buildHttpParams(params?: Record<string, string | ReadonlyArray<string>>): HttpParams | undefined {
  if (!params) {
    return undefined;
  }
  const filteredParams = Object.keys(params).reduce<Record<string, string | ReadonlyArray<string>>>((acc, key) => {
    if (params[key] ?? undefined) {
      acc[key] = params[key];
    }
    return acc;
  }, {});

  return new HttpParams({ fromObject: filteredParams });
}
