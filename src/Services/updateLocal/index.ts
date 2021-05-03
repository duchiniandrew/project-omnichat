import Local from "../../Types/Locals"
import LocalTable from "../../DB/Entities/Locals"

export default function updateLocal(local: Local) {
    try {
        return LocalTable.updateRegister(local.id, local)
    }
    catch (error) {
        throw error
    }
}