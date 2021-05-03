import { Local } from "../../Types/Locals"
import LocalTable from "../../DB/Entities/Locals"

export default function addLocal(local: Local) {
    try {
        LocalTable.addRegister(local)
        return "Local successfully added."
    }
    catch (error) {
        throw error
    }
}