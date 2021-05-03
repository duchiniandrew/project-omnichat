import Local from "../../Types/Locals"
import BaseEntitie from "./BaseEntitie"
import { RegisterNotFound, LocalAllreadyAdded } from "./errors"

class LocalTable extends BaseEntitie {
    registers: Local[]
    id: number

    constructor() {
        super("LocalTable")
        this.registers = []
        this.id = 0
    }
    public addRegister(local: Local): void {
        if (this.checkLocalAllreadyAdded(local.name)) {
            throw new LocalAllreadyAdded()
        }
        this.registers.push({ ...local, id: this.id++ })
    }
    findRegister(id: number): Local | undefined {
        return this.registers.find(local => local.id === id)
    }
    getAll(): Local[] {
        return this.registers
    }
    updateRegister(id: number, newLocal: Local): void {
        const localIndex = this.getLocalIndex(id)
        if (localIndex >= 0) {
            this.registers[localIndex] = newLocal
        }
        else {
            throw new RegisterNotFound()
        }
    }
    deleteRegister(id: number): void {
        const localIndex = this.getLocalIndex(id)
        if (localIndex >= 0) {
            this.registers.splice(localIndex, 1)
        }
        else {
            throw new RegisterNotFound()
        }
    }
    getLocalIndex(id: number): number {
        return this.registers.findIndex(local => local.id === id)
    }
    checkLocalAllreadyAdded(name: string): Local | undefined {
        return this.registers.find(local => local.name === name)
    }
}
export default new LocalTable()