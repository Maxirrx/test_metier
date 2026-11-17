export interface Rule<T> {
    check(value: T): boolean | Promise<boolean>;
}