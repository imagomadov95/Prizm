import { TuiEventWith, TuiTypedEventTarget } from '@taiga-ui/cdk/types';
import { fromEvent, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function tuiPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
  return tap(event => event.preventDefault());
}

export function tuiTypedFromEvent<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  options?: AddEventListenerOptions
): Observable<TuiEventWith<WindowEventMap[E], typeof target>>;

export function tuiTypedFromEvent<E extends keyof DocumentEventMap>(
  target: Document,
  event: E,
  options?: AddEventListenerOptions
): Observable<TuiEventWith<DocumentEventMap[E], typeof target>>;

export function tuiTypedFromEvent<T extends Element, E extends keyof HTMLElementEventMap>(
  target: T,
  event: E,
  options?: AddEventListenerOptions
): Observable<TuiEventWith<HTMLElementEventMap[E], typeof target>>;

export function tuiTypedFromEvent<E extends Event, T extends TuiTypedEventTarget<TuiEventWith<E, T>>>(
  target: T,
  event: string,
  options?: AddEventListenerOptions
): Observable<TuiEventWith<E, T>>;

export function tuiTypedFromEvent<E extends Event>(
  target: TuiTypedEventTarget<E>,
  event: string,
  options?: AddEventListenerOptions
): Observable<E>;

export function tuiTypedFromEvent<E extends Event>(
  target: TuiTypedEventTarget<E>,
  event: string,
  options: AddEventListenerOptions = {}
): Observable<E> {
  return fromEvent(target, event, options);
}