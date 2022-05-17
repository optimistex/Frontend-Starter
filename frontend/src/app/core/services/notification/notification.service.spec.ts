import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { Mutable } from '@fe-test';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let toastr: ToastrService;
  let spyNext: jasmine.Spy;
  let spyError: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [NotificationService],
    });

    toastr = TestBed.inject(ToastrService);
    spyOn(toastr, 'success');
    spyOn(toastr, 'warning');
    spyOn(toastr, 'error');
    spyNext = jasmine.createSpy();
    spyError = jasmine.createSpy();
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
      of('test').pipe(service.rxSuccess('test message')).subscribe(spyNext, spyError);

      expect(toastr.success).toHaveBeenCalledTimes(1);
      expect(toastr.success).toHaveBeenCalledWith('test message');
      expect(spyNext).toHaveBeenCalledTimes(1);
      expect(spyNext).toHaveBeenCalledWith('test');
      expect(spyError).not.toHaveBeenCalled();
    });
  });

  describe('warning message', () => {
    it('should show warning message', () => {
      service.warn('test message');

      expect(toastr.warning).toHaveBeenCalledTimes(1);
      expect(toastr.warning).toHaveBeenCalledWith('test message');
    });

    it('should show warning message in rxjs pipe', () => {
      of('test').pipe(service.rxWarn('test message')).subscribe(spyNext, spyError);

      expect(toastr.warning).toHaveBeenCalledTimes(1);
      expect(toastr.warning).toHaveBeenCalledWith('test message');
      expect(spyNext).toHaveBeenCalledTimes(1);
      expect(spyNext).toHaveBeenCalledWith('test');
      expect(spyError).not.toHaveBeenCalled();
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
      throwError(error).pipe(service.rxError()).subscribe(spyNext, spyError);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message');
      expect(spyNext).not.toHaveBeenCalled();
      expect(spyError).toHaveBeenCalledTimes(1);
      expect(spyError).toHaveBeenCalledWith(error);
    });

    it('should show custom error message in rxjs pipe', () => {
      const error = new Error('error message');
      throwError(error).pipe(service.rxError('custom error message')).subscribe(spyNext, spyError);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('custom error message');
      expect(spyNext).not.toHaveBeenCalled();
      expect(spyError).toHaveBeenCalledTimes(1);
      expect(spyError).toHaveBeenCalledWith(error);
    });

    it('should show http error message 1', () => {
      const error: Mutable<HttpErrorResponse> = new HttpErrorResponse({ error: { message: 'error message 1' } });
      error.message = 'error message 2';
      throwError(error).pipe(service.rxHttpError()).subscribe(spyNext, spyError);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message 1');
      expect(spyNext).not.toHaveBeenCalled();
      expect(spyError).toHaveBeenCalledTimes(1);
      expect(spyError).toHaveBeenCalledWith(error);
    });

    it('should show http error message 2', () => {
      const error: Mutable<HttpErrorResponse> = new HttpErrorResponse({});
      error.message = 'error message 2';
      throwError(error).pipe(service.rxHttpError()).subscribe(spyNext, spyError);

      expect(toastr.error).toHaveBeenCalledTimes(1);
      expect(toastr.error).toHaveBeenCalledWith('error message 2');
      expect(spyNext).not.toHaveBeenCalled();
      expect(spyError).toHaveBeenCalledTimes(1);
      expect(spyError).toHaveBeenCalledWith(error);
    });
  });
});
