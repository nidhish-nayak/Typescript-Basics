"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var input = "12345";
var z = new ZipCodeValidator_1.ZipCodeValidator();
console.log(z.validate(input));
