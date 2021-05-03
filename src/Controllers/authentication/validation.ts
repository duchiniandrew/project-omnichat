import User from "../../Types/User";

import { EmptyEmailError, EmptyPasswordError } from "./errors"

export default function validation({ email, password }: User) {
    if (email === "") {
        throw new EmptyEmailError()
    }
    if (password === "") {
        throw new EmptyPasswordError()
    }
}