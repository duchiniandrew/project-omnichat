export class EmptyEmailError extends Error {
    code: number
    constructor() {
        super("Email parameter is empty.")
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
export class FailedAuthentication extends Error {
    code: number
    constructor() {
        super("Email or password invalid.")
        this.code = 401
    }
}
export class UserAllreadyLoggedError extends Error {
    code: number
    constructor() {
        super("User allready logged.")
        this.code = 403
    }
}