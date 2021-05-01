export class EmptyNameError extends Error {
    code: number
    constructor() {
        super("Name parameter empty.")
        this.code = 400
    }
}
export class NameFormatError extends Error {
    code: number
    constructor() {
        super("Name is out of format.")
        this.code = 422
    }
}
export class EmptyDescriptionError extends Error {
    code: number
    constructor() {
        super("Description parameter empty.")
        this.code = 400
    }
}
export class EmptyAddressError extends Error {
    code: number
    constructor() {
        super("Address parameter empty.")
        this.code = 400
    }
}
export class EmptyRateError extends Error {
    code: number
    constructor() {
        super("Rate parameter empty.")
        this.code = 400
    }
}