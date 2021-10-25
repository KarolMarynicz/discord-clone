import { BehaviorSubject, Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

export class StateBase<T> {
  private state$: BehaviorSubject<T>;
  protected get state(): T {
    return this.state$.getValue();
  }

  private isLoading$: BehaviorSubject<boolean>;
  /**
   * Get information about current loading state of any http request.
   * */
  public get isLoading(): boolean {
    return this.isLoading$.getValue();
  }
  /**
   * Set loading state of any http request.
   * */
  public set isLoading(loading: boolean) {
    this.isLoading$.next(loading);
  }

  private isError$: BehaviorSubject<boolean>;
  /**
   * Get information about any errors of any http request.
   * */
  public get isError(): boolean {
    return this.isError$.getValue();
  }
  /**
   * Set error state of any http request.
   * */
  public set isError(error: boolean) {
    this.isError$.next(error);
  }

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.isError$ = new BehaviorSubject<boolean>(false);
  }

  protected select<K>(mapFunc: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFunc(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>): void {
    this.state$.next({
      ...this.state,
      ...newState
    })
  }
}
