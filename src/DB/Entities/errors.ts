export class RegisterNotFound extends Error {
    code: number
    constructor() {
        super("Not found.")
        this.code = 404
    }
}
export class EmailAllreadyInUse extends Error {
    code: number
    constructor() {
        super("Email allready in use..")
        this.code = 400
    }
}