import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly spinnerService: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.hide()));
  }
}
