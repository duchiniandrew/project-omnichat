export class InvalidIdParameter extends Error {
    code: number
    constructor() {
        super("Id parameter is empty.")
        this.code = 422
    }
}