import Local from "../../Types/Locals"
import LocalTable from "../../DB/Entities/Locals"

export default function updateLocal(local: Local) {
    try {
        console.log("Updating local into dataBase - " + new Date())
        return LocalTable.updateRegister(local.id, local)
    }
    catch (error) {
        throw error
    }
}