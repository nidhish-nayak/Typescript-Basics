"use strict";
exports.__esModule = true;
exports.ZipCodeValidator = void 0;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
        this.pattern = /^[1-9][0-9]{3}$/;
    }
    ZipCodeValidator.prototype.validate = function (input) {
        return this.pattern.test(input);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
