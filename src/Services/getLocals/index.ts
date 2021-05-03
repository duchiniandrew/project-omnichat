import LocalTable from "../../DB/Entities/Locals"
import Local from "../../Types/Locals"

export default function getAll(): Local[] {
    try {
        return LocalTable.getAll()
    }
    catch (error) {
        throw error
    }
}