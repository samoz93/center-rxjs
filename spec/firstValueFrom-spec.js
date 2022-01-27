"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var chai_1 = require("chai");
var operators_1 = require("rxjs/operators");
describe('firstValueFrom', function () {
    it('should emit the first value as a promise', function () { return __awaiter(void 0, void 0, void 0, function () {
        var finalized, source, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalized = false;
                    source = rxjs_1.interval(10).pipe(operators_1.finalize(function () { return (finalized = true); }));
                    return [4, rxjs_1.firstValueFrom(source)];
                case 1:
                    result = _a.sent();
                    chai_1.expect(result).to.equal(0);
                    chai_1.expect(finalized).to.be.true;
                    return [2];
            }
        });
    }); });
    it('should support a default value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    source = rxjs_1.EMPTY;
                    return [4, rxjs_1.firstValueFrom(source, { defaultValue: 0 })];
                case 1:
                    result = _a.sent();
                    chai_1.expect(result).to.equal(0);
                    return [2];
            }
        });
    }); });
    it('should support an undefined config', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    source = rxjs_1.EMPTY;
                    error = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, rxjs_1.firstValueFrom(source, undefined)];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    err_1 = _a.sent();
                    error = err_1;
                    return [3, 4];
                case 4:
                    chai_1.expect(error).to.be.an.instanceOf(rxjs_1.EmptyError);
                    return [2];
            }
        });
    }); });
    it('should error for empty observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    source = rxjs_1.EMPTY;
                    error = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, rxjs_1.firstValueFrom(source)];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    err_2 = _a.sent();
                    error = err_2;
                    return [3, 4];
                case 4:
                    chai_1.expect(error).to.be.an.instanceOf(rxjs_1.EmptyError);
                    return [2];
            }
        });
    }); });
    it('should error for errored observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    source = rxjs_1.throwError(function () { return new Error('blorp!'); });
                    error = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, rxjs_1.firstValueFrom(source)];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    err_3 = _a.sent();
                    error = err_3;
                    return [3, 4];
                case 4:
                    chai_1.expect(error).to.be.an.instanceOf(Error);
                    chai_1.expect(error.message).to.equal('blorp!');
                    return [2];
            }
        });
    }); });
    it('should work with a synchronous observable', function () { return __awaiter(void 0, void 0, void 0, function () {
        var finalized, source, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalized = false;
                    source = rxjs_1.of('apples', 'bananas').pipe(operators_1.finalize(function () { return (finalized = true); }));
                    return [4, rxjs_1.firstValueFrom(source)];
                case 1:
                    result = _a.sent();
                    chai_1.expect(result).to.equal('apples');
                    chai_1.expect(finalized).to.be.true;
                    return [2];
            }
        });
    }); });
    it('should stop listening to a synchronous observable when resolved', function () { return __awaiter(void 0, void 0, void 0, function () {
        var sideEffects, synchronousObservable, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sideEffects = [];
                    synchronousObservable = new rxjs_1.Observable(function (subscriber) {
                        for (var i = 0; !subscriber.closed && i < 10; i++) {
                            sideEffects.push(i);
                            subscriber.next(i);
                        }
                    });
                    return [4, rxjs_1.firstValueFrom(synchronousObservable)];
                case 1:
                    result = _a.sent();
                    chai_1.expect(sideEffects).to.deep.equal([0]);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=firstValueFrom-spec.js.map