import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { throwError, MonoTypeOperatorFunction } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToastrService) {
  }

  public success(message: string): void {
    this.toastr.success(message);
  }

  public warn(message: string): void {
    this.toastr.warning(message);
  }

  public error(message: string): void {
    this.toastr.error(message);
  }

  public rxSuccess<T>(message: string): MonoTypeOperatorFunction<T> {
    return source$ => source$.pipe(tap(() => this.success(message)));
  }

  public rxWarn<T>(message: string): MonoTypeOperatorFunction<T> {
    return source$ => source$.pipe(tap(() => this.warn(message)));
  }

  public rxError<T>(message?: string): MonoTypeOperatorFunction<T> {
    return source$ => source$.pipe(
      catchError((error: Error) => {
        this.error(message || error.message);
        return throwError(() => error);
      })
    );
  }

  public rxHttpError<T>(): MonoTypeOperatorFunction<T> {
    return source$ => source$.pipe(
      catchError((error: HttpErrorResponse) => {
        this.error(error.error?.message || error.message);
        return throwError(() => error);
      })
    );
  }
}
