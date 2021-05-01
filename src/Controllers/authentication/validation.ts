import User from "../../Types/User";

import { EmptyEmailError, EmptyPasswordError } from "./errors"

export default function validation({ email, password }: User) {
    console.log("Checking authentication Request parameters - " + new Date())
    if (email === "") {
        throw new EmptyEmailError()
    }
    if (password === "") {
        throw new EmptyPasswordError()
    }
}