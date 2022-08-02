import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error(error.error.message);
          return throwError(() => error.error.message);
        }

        switch (error.status) {
          case HttpStatusCode.BadRequest: {
            const message =
              error?.error?.message ||
              'Houve um erro ao realizar a operação. Por favor, tente novamente.';
            console.error(message);
            break;
          }
          case HttpStatusCode.Unauthorized: {
            const message =
              error?.error?.message ||
              'Você não está autorizado a realizar esta operação.';
            console.error(message);
            break;
          }
          case HttpStatusCode.Forbidden:
            console.error(
              'Você não tem permissão para realizar esta operação.'
            );
            break;
          case HttpStatusCode.NotFound:
            console.error('Não foi possível encontrar o recurso solicitado.');
            break;
          case HttpStatusCode.MethodNotAllowed:
            console.error('Método de requisição não permitido.');
            break;
          case HttpStatusCode.GatewayTimeout:
            console.error('Erro no servidor, tempo de resposta excedido.');
            break;
          default:
            console.error(
              'Houve um erro ao realizar a operação. Por favor, tente novamente.'
            );
            break;
        }

        return throwError(() => error);
      })
    );
  }
}
