import { User } from "../../Types/User"
import BaseEntitie from "./BaseEntitie"

import { EmailAllreadyInUse } from "./errors"

class UserTable extends BaseEntitie {
    registers: User[]
    id: number

    constructor() {
        super("UserTable")
        this.registers = []
        this.id = 0
    }
    addRegister(user: User): void {
        if (this.checkEmailInUse(user.email)) {
            throw new EmailAllreadyInUse()
        }
        this.registers.push({ ...user, id: this.id++ })
    }
    findRegister(id: number): User | undefined {
        return this.registers.find(user => user.id === id)
    }
    findUserByEmailAndPassword(email: string, password: string) {
        return this.registers.find(user => user.email === email && user.password === password)
    }
    checkEmailInUse(email: string) {
        return this.registers.find(user => user.email === email)
    }
}

export default new UserTable()