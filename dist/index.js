"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tSignal0 = /** @class */ (function () {
    function tSignal0() {
        this.listeners = [];
    }
    tSignal0.prototype.listen = function (listener) {
        this.listeners.push(listener);
    };
    tSignal0.prototype.unlisten = function (listener) {
        var listenerIndex = this.listeners.indexOf(listener);
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex];
        }
    };
    tSignal0.prototype.dispatch = function () {
        this.listeners.map(function (listener) { return listener(); });
    };
    tSignal0.prototype.dispose = function () {
        this.listeners = [];
    };
    return tSignal0;
}());
exports.tSignal0 = tSignal0;
var tSignal1 = /** @class */ (function () {
    function tSignal1() {
        this.listeners = [];
    }
    tSignal1.prototype.listen = function (listener) {
        this.listeners.push(listener);
    };
    tSignal1.prototype.unlisten = function (listener) {
        var listenerIndex = this.listeners.indexOf(listener);
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex];
        }
    };
    tSignal1.prototype.dispatch = function (payload) {
        this.listeners.map(function (listener) { return listener(payload); });
    };
    tSignal1.prototype.dispose = function () {
        this.listeners = [];
    };
    return tSignal1;
}());
exports.tSignal1 = tSignal1;
var tSignal2 = /** @class */ (function () {
    function tSignal2() {
        this.listeners = [];
    }
    tSignal2.prototype.listen = function (listener) {
        this.listeners.push(listener);
    };
    tSignal2.prototype.unlisten = function (listener) {
        var listenerIndex = this.listeners.indexOf(listener);
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex];
        }
    };
    tSignal2.prototype.dispatch = function (payload1, payload2) {
        this.listeners.map(function (listener) { return listener(payload1, payload2); });
    };
    tSignal2.prototype.dispose = function () {
        this.listeners = [];
    };
    return tSignal2;
}());
exports.tSignal2 = tSignal2;
var tSignal3 = /** @class */ (function () {
    function tSignal3() {
        this.listeners = [];
    }
    tSignal3.prototype.listen = function (listener) {
        this.listeners.push(listener);
    };
    tSignal3.prototype.unlisten = function (listener) {
        var listenerIndex = this.listeners.indexOf(listener);
        if (listenerIndex != -1) {
            delete this.listeners[listenerIndex];
        }
    };
    tSignal3.prototype.dispatch = function (payload1, payload2, payload3) {
        this.listeners.map(function (listener) { return listener(payload1, payload2, payload3); });
    };
    tSignal3.prototype.dispose = function () {
        this.listeners = [];
    };
    return tSignal3;
}());
exports.tSignal3 = tSignal3;
exports.default = tSignal1;
