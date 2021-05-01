export default class BaseEntitie {
    id: number
    tableName: string

    constructor(name: string) {
        this.id = 0
        this.tableName = name
    }
    addRegister(register: any) {
        throw new Error("Using virtual method!")
    }
    findRegister(id: number) {
        throw new Error("Using virtual method!")
    }
    getAll() {
        throw new Error("Using virtual method!")
    }
    deleteRegister(id: number) {
        throw new Error("Using virtual method!")
    }
    updateRegister(id: number, newRegister: any) {
        throw new Error("Using virtual method!")
    }
}