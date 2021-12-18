import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MessageService } from "primeng/api";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toast: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage: string = '';

          if (error.error instanceof ErrorEvent) {
            // Client-Side Error.
            errorMessage = `Error: ${error.error.message}`;
          } else if (error.status === 0) {
            // Server service not available
            errorMessage = 'Server service is not available. Please try again later.'
          } else {
            // Server-Side Error.
            errorMessage = `Error Code: ${error.error.status}, Error Message: ${error.error.message}`
          }

          this.toast.add({ key: 'error-toast', severity: 'error', summary: 'Error', detail: errorMessage, sticky: true });

          return throwError(() => { new Error(errorMessage) });
        })
      );
  }
}
