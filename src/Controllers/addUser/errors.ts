export class EmptyNameError extends Error {
    code: number
    constructor() {
        super("Name parameter empty.")
        this.code = 400
    }
}
export class EmptyEmailError extends Error {
    code: number
    constructor() {
        super("Email parameter empty.")
        this.code = 400
    }
}
export class EmptyPasswordError extends Error {
    code: number
    constructor() {
        super("Password parameter empty.")
        this.code = 400
    }
}
export class FormatPasswordError extends Error {
    code: number
    constructor() {
        super("Password must have at least 8 characters and include numbers and letters.")
        this.code = 422
    }
}
export class NameFormatError extends Error {
    code: number
    constructor() {
        super("Name is out of format.")
        this.code = 422
    }
}