import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class ServiceBase<T> {
  protected url: string = "http://localhost:5000/api/";
  protected controller: string;

  private http: HttpClient;

  constructor(controller: string, http: HttpClient, url?: string) {
    this.controller = controller;
    this.http = http;
    if (url) {
      this.url = url;
    }
  }

  public getAll(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.url + this.controller)
  }

  public getById(id: string): Observable<T> {
    return this.http.get<T>(this.url + this.controller + '/' + id);
  }

  public create(newItem: T): void {
    // TODO: Implement this
  }
}
