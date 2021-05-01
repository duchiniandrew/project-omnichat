import { EmptyEmailError, EmptyNameError, EmptyPasswordError, FormatPasswordError, NameFormatError } from "./errors"
import testPassword from "../../Utils/validatePassword"
import User from "../../Types/User"

export default function validation({ name, email, password }: User) {
    console.log("Checking add User Request parameters - " + new Date())
    if (name === "") {
        throw new EmptyNameError()
    }
    else if (!isNaN(parseInt(name))) {
        throw new NameFormatError()
    }
    if (email === "") {
        throw new EmptyEmailError()
    }
    if (password === "") {
        throw new EmptyPasswordError()
    }
    else if (password.length < 8 || !testPassword(password)) {
        throw new FormatPasswordError()
    }
}