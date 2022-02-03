var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computador = /** @class */ (function () {
    function Computador(_processador, _memoria) {
        this._processador = _processador;
        this._memoria = _memoria;
    }
    Object.defineProperty(Computador.prototype, "processador", {
        get: function () {
            return this._processador;
        },
        set: function (value) {
            this._processador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "memoria", {
        get: function () {
            return this._memoria;
        },
        set: function (value) {
            this._memoria = value;
        },
        enumerable: false,
        configurable: true
    });
    return Computador;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bateria_watts = 0;
        return _this;
    }
    return Laptop;
}(Computador));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gabinete = "";
        return _this;
    }
    return Desktop;
}(Computador));
var computador1 = new Computador("I5", 4);
console.log(computador1);
var laptop1 = new Laptop("I7", 8);
console.log(laptop1);
var desktop1 = new Desktop("I9", 16);
console.log(desktop1);
