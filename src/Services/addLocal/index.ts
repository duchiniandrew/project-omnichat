import Local from "../../Types/Locals"
import LocalTable from "../../DB/Entities/Locals"

export default function addLocal(local: Local) {
    try {
        console.log("Adding local into dataBase - " + new Date())
        LocalTable.addRegister(local)
        console.log("Local successfully added - " + new Date())
        return { message: "Local successfully added." }
    }
    catch (error) {
        throw error
    }
}