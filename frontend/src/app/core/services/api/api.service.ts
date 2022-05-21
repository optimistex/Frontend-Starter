import * as utpl from 'uri-templates';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, pipe, UnaryFunction } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@fe-environment';
import { NotificationService } from '../notification/notification.service';
import { buildHttpParams, BuildParams } from './build-http-params';
import { ApiLinks } from './api-links.interface';
import { apiLinks } from './api-links';

@Injectable()
export class ApiService {
  private readonly apiLinks: ApiLinks = apiLinks;

  constructor(private httpClient: HttpClient, private notificationService: NotificationService) {
  }

  public post<T>(urlKey: keyof ApiLinks, postData: unknown = {}, uriParameters: { [key: string]: string | { [key: string]: string } } = {}): Observable<T> {
    const url: utpl.URITemplate = utpl(environment.hostApi + this.apiLinks[urlKey]);
    return this.httpClient.post<T>(url.fillFromObject(uriParameters), postData).pipe(this.rxHandleHttpError());
  }

  public put<T>(urlKey: keyof ApiLinks, postData: unknown): Observable<T> {
    return this.httpClient.put<T>(environment.hostApi + this.apiLinks[urlKey], postData).pipe(this.rxHandleHttpError());
  }

  public get<T>(urlKey: keyof ApiLinks | [keyof ApiLinks, Record<string, string>], params?: BuildParams): Observable<T> {
    const url: utpl.URITemplate = utpl(environment.hostApi + (Array.isArray(urlKey) ? this.apiLinks[urlKey[0]] : this.apiLinks[urlKey]));
    const urlStr = Array.isArray(urlKey) ? url.fill(urlKey[1]) : url.fillFromObject({});
    return this.httpClient.get<T>(urlStr, { params: buildHttpParams(params) }).pipe(this.rxHandleHttpError());
  }

  public patch<T>(urlKey: keyof ApiLinks, patchData?: unknown): Observable<T> {
    return this.httpClient.patch<T>(environment.hostApi + this.apiLinks[urlKey], patchData).pipe(this.rxHandleHttpError());
  }

  private rxHandleHttpError<T>(): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe<Observable<T>, Observable<T>, Observable<T>>(
      this.notificationService.rxHttpError(),
      catchError(() => EMPTY)
    );
  }
}
