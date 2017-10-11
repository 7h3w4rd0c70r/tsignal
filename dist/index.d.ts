export declare class tSignal0 {
    listeners: Array<Function>;
    listen(listener: Function): void;
    unlisten(listener: Function): void;
    dispatch(): void;
    dispose(): void;
}
export declare class tSignal1<T> {
    listeners: Array<(payload: T) => any>;
    listen(listener: (payload: T) => any): void;
    unlisten(listener: (payload: T) => any): void;
    dispatch(payload: T): void;
    dispose(): void;
}
export declare class tSignal2<T1, T2> {
    listeners: Array<(payload1: T1, payload2: T2) => any>;
    listen(listener: (payload1: T1, payload2: T2) => any): void;
    unlisten(listener: (payload1: T1, payload2: T2) => any): void;
    dispatch(payload1: T1, payload2: T2): void;
    dispose(): void;
}
export declare class tSignal3<T1, T2, T3> {
    listeners: Array<(payload1: T1, payload2: T2, payload3: T3) => any>;
    listen(listener: (payload1: T1, payload2: T2, payload3: T3) => any): void;
    unlisten(listener: (payload1: T1, payload2: T2, payload3: T3) => any): void;
    dispatch(payload1: T1, payload2: T2, payload3: T3): void;
    dispose(): void;
}
export default tSignal1;
