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
        super("Email allready in use.")
        this.code = 400
    }
}
export class LocalAllreadyAdded extends Error {
    code: number
    constructor() {
        super("Local allready added.")
        this.code = 400
    }
}