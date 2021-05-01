import Local from "../../Types/Locals"
import BaseEntitie from "./BaseEntitie"
import { RegisterNotFound } from "./errors"

class LocalTable extends BaseEntitie {
    registers: Local[]
    id: number

    constructor() {
        super("LocalTable")
        this.registers = []
        this.id = 0
    }
    public addRegister(local: Local): void {
        this.registers.push({ ...local, id: this.id++ })
    }
    findRegister(id: number): Local | undefined {
        return this.registers.find(local => local.id === id)
    }
    getAll() {
        return this.registers
    }
    updateRegister(id: number, newLocal: Local) {
        const localIndex = this.getLocalIndex(id)
        if (localIndex >= 0) {
            this.registers[localIndex] = newLocal
            return { message: "Local successfully updated." }
        }
        throw new RegisterNotFound()
    }
    deleteRegister(id: number) {
        const localIndex = this.getLocalIndex(id)
        if (localIndex >= 0) {
            this.registers.splice(localIndex, 1)
            return { message: "Local successfully deleted." }
        }
        throw new RegisterNotFound()
    }
    getLocalIndex(id: number): number {
        return this.registers.findIndex(local => local.id === id)
    }
}
export default new LocalTable()