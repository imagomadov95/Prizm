import { OperatorFunction, pipe, timer } from 'rxjs';
import { distinctUntilChanged, mapTo, startWith, switchMapTo } from 'rxjs/operators';

/**
 * Operator to set lifespan after which current value is considered obsolete
 */
export function prizmIsAlive(lifespan: number = 0): OperatorFunction<any, boolean> {
  return pipe(switchMapTo(timer(lifespan).pipe(mapTo(false), startWith(true))), distinctUntilChanged());
}
