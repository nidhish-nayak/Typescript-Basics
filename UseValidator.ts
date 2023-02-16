import { ZipCodeValidator } from "./ZipCodeValidator";
let input: string = "12345";
var z: ZipCodeValidator = new ZipCodeValidator();
console.log(z.validate(input));
