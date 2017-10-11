
export class tSignal0 {
    listeners: Array<Function> = [ ]

    listen(listener: Function): void {
        this.listeners.push(listener)
    }
    
    unlisten(listener: Function): void {
        const listenerIndex = this.listeners.indexOf(listener)
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex]
        }
    }

    dispatch(): void {
        this.listeners.map(listener => listener())
    }

    dispose(): void {
        this.listeners = [ ]
    }
}

export class tSignal1<T> {
    listeners: Array<(payload: T)=>any> = [ ]

    listen(listener: (payload: T)=>any): void {
        this.listeners.push(listener)
    }
    
    unlisten(listener: (payload: T)=>any): void {
        const listenerIndex = this.listeners.indexOf(listener)
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex]
        }
    }

    dispatch(payload: T): void {
        this.listeners.map(listener => listener(payload))
    }

    dispose(): void {
        this.listeners = [ ]
    }
}

export class tSignal2<T1, T2> {
    listeners: Array<(payload1: T1, payload2: T2)=>any> = [ ]

    listen(listener: (payload1: T1, payload2: T2)=>any): void {
        this.listeners.push(listener)
    }
    
    unlisten(listener: (payload1: T1, payload2: T2)=>any): void {
        const listenerIndex = this.listeners.indexOf(listener)
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex]
        }
    }

    dispatch(payload1: T1, payload2: T2): void {
        this.listeners.map(listener => listener(payload1, payload2))
    }

    dispose(): void {
        this.listeners = [ ]
    }
}

export class tSignal3<T1, T2, T3> {
    listeners: Array<(payload1: T1, payload2: T2, payload3: T3)=>any> = [ ]

    listen(listener: (payload1: T1, payload2: T2, payload3: T3)=>any): void {
        this.listeners.push(listener)
    }
    
    unlisten(listener: (payload1: T1, payload2: T2, payload3: T3)=>any): void {
        const listenerIndex = this.listeners.indexOf(listener)
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex]
        }
    }

    dispatch(payload1: T1, payload2: T2, payload3: T3): void {
        this.listeners.map(listener => listener(payload1, payload2, payload3))
    }

    dispose(): void {
        this.listeners = [ ]
    }
}

export default tSignal1
