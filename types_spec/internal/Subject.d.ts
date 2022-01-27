import { Operator } from './Operator';
import { Observable } from './Observable';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
import { Observer, SubscriptionLike, TeardownLogic } from './types';
/**
 * A Subject is a special type of Observable that allows values to be
 * multicasted to many Observers. Subjects are like EventEmitters.
 *
 * Every Subject is an Observable and an Observer. You can subscribe to a
 * Subject, and you can call next to feed values as well as error and complete.
 */
export declare class Subject<T> extends Observable<T> implements SubscriptionLike {
    closed: boolean;
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    observers: Observer<T>[];
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    isStopped: boolean;
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    hasError: boolean;
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    thrownError: any;
    /**
     * Creates a "subject" by basically gluing an observer to an observable.
     *
     * @nocollapse
     * @deprecated Recommended you do not use. Will be removed at some point in the future. Plans for replacement still under discussion.
     */
    static create: (...args: any[]) => any;
    constructor();
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    lift<R>(operator: Operator<T, R>): Observable<R>;
    /** @internal */
    protected _throwIfClosed(): void;
    next(value: T): void;
    error(err: any): void;
    complete(): void;
    unsubscribe(): void;
    get observed(): boolean;
    /** @internal */
    protected _trySubscribe(subscriber: Subscriber<T>): TeardownLogic;
    /** @internal */
    protected _subscribe(subscriber: Subscriber<T>): Subscription;
    /** @internal */
    protected _innerSubscribe(subscriber: Subscriber<any>): Subscription;
    /** @internal */
    protected _checkFinalizedStatuses(subscriber: Subscriber<any>): void;
    /**
     * Creates a new Observable with this Subject as the source. You can do this
     * to create customize Observer-side logic of the Subject and conceal it from
     * code that uses the Observable.
     * @return {Observable} Observable that the Subject casts to
     */
    asObservable(): Observable<T>;
}
/**
 * @class AnonymousSubject<T>
 */
export declare class AnonymousSubject<T> extends Subject<T> {
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    destination?: Observer<T> | undefined;
    constructor(
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */
    destination?: Observer<T> | undefined, source?: Observable<T>);
    next(value: T): void;
    error(err: any): void;
    complete(): void;
    /** @internal */
    protected _subscribe(subscriber: Subscriber<T>): Subscription;
}
//# sourceMappingURL=Subject.d.ts.map