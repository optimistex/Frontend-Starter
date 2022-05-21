import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';
import { ApiService } from './api.service';
import { ApiLinks } from './api-links.interface';
import { pipe, PartialObserver } from 'rxjs';
import { Provider } from '@angular/core';

export const mockNotificationService: Provider = {
  provide: NotificationService, multi: false, useFactory: () => {
    const spy = jasmine.createSpyObj<NotificationService>('NotificationService', [
      'error', 'warn', 'success', 'rxSuccess', 'rxWarn', 'rxError', 'rxHttpError',
    ]);
    spy.rxSuccess.and.returnValue(pipe());
    spy.rxWarn.and.returnValue(pipe());
    spy.rxError.and.returnValue(pipe());
    spy.rxHttpError.and.returnValue(pipe());
    return spy;
  },
};

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let spyObserver: PartialObserver<unknown>;
  let notificationService: jasmine.SpyObj<NotificationService>;
  const matchUri = (uri: string) => (req: HttpRequest<unknown>) => req.url.endsWith(uri);
  const expectedApiLinkKey: keyof ApiLinks = 'productListApi';
  const expectedUri = '/api/legal-document/create';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, mockNotificationService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    notificationService = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;

    spyObserver = { next: jasmine.createSpy(), error: jasmine.createSpy(), complete: undefined };
  });

  afterAll(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('ApiService.post', () => {
    it('should handle request', () => {
      service.post(expectedApiLinkKey, {}).subscribe(spyObserver);
      httpMock.expectOne(matchUri(expectedUri)).flush({ key: 'text' });
      expect(spyObserver.next).toHaveBeenCalledTimes(1);
      expect(spyObserver.next).toHaveBeenCalledWith({ key: 'text' });
      expect(spyObserver.error).not.toHaveBeenCalled();
    });

    it('should handle request without postData', () => {
      service.post(expectedApiLinkKey).subscribe(spyObserver);
      httpMock.expectOne(matchUri(expectedUri)).flush({ key: 'text' });
      expect(spyObserver.next).toHaveBeenCalledTimes(1);
      expect(spyObserver.next).toHaveBeenCalledWith({ key: 'text' });
      expect(spyObserver.error).not.toHaveBeenCalled();
    });

    it('should handle error', () => {
      expect(notificationService.rxHttpError).not.toHaveBeenCalled();
      service.post(expectedApiLinkKey).subscribe(spyObserver);
      httpMock.expectOne(matchUri(expectedUri)).error(new ProgressEvent('Test fail connection'));
      expect(spyObserver.next).not.toHaveBeenCalled();
      expect(spyObserver.error).not.toHaveBeenCalled();
      expect(notificationService.rxHttpError).toHaveBeenCalledTimes(1);
    });
  });

  it('should make a put request', () => {
    service.put(expectedApiLinkKey, {}).subscribe(spyObserver);
    httpMock.expectOne(matchUri(expectedUri)).flush({ key: 'text' });
    expect(spyObserver.next).toHaveBeenCalledTimes(1);
    expect(spyObserver.next).toHaveBeenCalledWith({ key: 'text' });
    expect(spyObserver.error).not.toHaveBeenCalled();
  });

  it('should make a get request', () => {
    service.get(expectedApiLinkKey).subscribe(spyObserver);
    httpMock.expectOne(matchUri(expectedUri)).flush({ key: 'text' });
    expect(spyObserver.next).toHaveBeenCalledTimes(1);
    expect(spyObserver.error).not.toHaveBeenCalled();
  });

  it('should make a patch request', () => {
    service.patch(expectedApiLinkKey).subscribe(spyObserver);
    httpMock.expectOne(matchUri(expectedUri)).flush({ key: 'text' });
    expect(spyObserver.next).toHaveBeenCalledTimes(1);
    expect(spyObserver.error).not.toHaveBeenCalled();
  });
});
