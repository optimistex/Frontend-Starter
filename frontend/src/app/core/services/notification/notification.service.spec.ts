import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError, PartialObserver } from 'rxjs';
import { Mutable } from '@fe-test';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let toastr: ToastrService;
  let spyObserver: PartialObserver<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [NotificationService],
    });

    toastr = TestBed.inject(ToastrService);
    spyOn(toastr, 'success');
    spyOn(toastr, 'warning');
    spyOn(toastr, 'error');
    spyObserver = { next: jasmine.createSpy(), error: jasmine.createSpy(), complete: undefined };
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('success message', () => {
    it('should show success message', () => {
      service.success('test message');

      expect(toastr.success).toHaveBeenCalledTimes(1);
      expect(toastr.success).toHaveBeenCalledWith('test message');
    });

    it('should show success message in rxjs pipe', () => {
      of('test').pipe(service.rxSuccess('test message')).subscribe(spyObserver);

      expect(toastr.success).toHaveBeenCalledTimes(1);
      expect(toastr.success).toHaveBeenCalledWith('test message');
      expect(spyObserver.next).toHaveBeenCalledTimes(1);
      expect(spyObserver.next).toHaveBeenCalledWith('test');
      expect(spyObserver.error).not.toHaveBeenCalled();
    });
  });

  describe('warning message', () => {
    it('should show warning message', () => {
      service.warn('test message');

      expect(toastr.warning).toHaveBeenCalledTimes(1);
      expect(toastr.warning).toHaveBeenCalledWith('test message');
    });

    it('should show warning message in rxjs pipe', () => {
      of('test').pipe(service.rxWarn('test message')).subscribe(spyObserver);

      expect(toastr.warning).toHaveBeenCalledTimes(1);
      expect(toastr.warning).toHaveBeenCalledWith('test message');
      expect(spyObserver.next).toHaveBeenCalledTimes(1);
      expect(spyObserver.next).toHaveBeenCalledWith('test');
      expect(spyObserver.error).not.toHaveBeenCalled();
    });
  });

  describe('error message', () => {
    it('should show error message', () => {
      service.error('test message');

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('test message');
    });

    it('should show error message in rxjs pipe', () => {
      const error = new Error('error message');
      throwError(() => error).pipe(service.rxError()).subscribe(spyObserver);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message');
      expect(spyObserver.next).not.toHaveBeenCalled();
      expect(spyObserver.error).toHaveBeenCalledTimes(1);
      expect(spyObserver.error).toHaveBeenCalledWith(error);
    });

    it('should show custom error message in rxjs pipe', () => {
      const error = new Error('error message');
      throwError(() => error).pipe(service.rxError('custom error message')).subscribe(spyObserver);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('custom error message');
      expect(spyObserver.next).not.toHaveBeenCalled();
      expect(spyObserver.error).toHaveBeenCalledTimes(1);
      expect(spyObserver.error).toHaveBeenCalledWith(error);
    });

    it('should show http error message 1', () => {
      const error: Mutable<HttpErrorResponse> = new HttpErrorResponse({ error: { message: 'error message 1' } });
      error.message = 'error message 2';
      throwError(() => error).pipe(service.rxHttpError()).subscribe(spyObserver);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message 1');
      expect(spyObserver.next).not.toHaveBeenCalled();
      expect(spyObserver.error).toHaveBeenCalledTimes(1);
      expect(spyObserver.error).toHaveBeenCalledWith(error);
    });

    it('should show http error message 2', () => {
      const error: Mutable<HttpErrorResponse> = new HttpErrorResponse({});
      error.message = 'error message 2';
      throwError(() => error).pipe(service.rxHttpError()).subscribe(spyObserver);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message 2');
      expect(spyObserver.next).not.toHaveBeenCalled();
      expect(spyObserver.error).toHaveBeenCalledTimes(1);
      expect(spyObserver.error).toHaveBeenCalledWith(error);
    });
  });
});
