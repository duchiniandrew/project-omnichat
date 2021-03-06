import jwt, { Secret } from "jsonwebtoken"

import { FailedAuthentication } from "../../Controllers/authentication/errors"
import { User } from "../../Types/User"
import UserTable from "../../DB/Entities/User"

export default function authenticate({ email, password }: User) {
    const expirationTime = {
        expiresIn: '1h'
    }
    const user = UserTable.findUserByEmailAndPassword(email, password)
    if (user) {
        return jwt.sign({ id: user.id }, process.env.SECRET as Secret, expirationTime)
    }
    else {
        throw new FailedAuthentication()
    }
}