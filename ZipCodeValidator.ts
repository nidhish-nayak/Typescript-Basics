export class ZipCodeValidator {
    private pattern: RegExp = /^[1-9][0-9]{3}$/;
    public validate(input: string) {
        return this.pattern.test(input);
    }
}
