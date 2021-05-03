import LocalTable from "../../DB/Entities/Locals"

export default function deleteLocal(id: number): string {
    try {
        LocalTable.deleteRegister(id)
        return "Local successfully deleted"
    }
    catch (error) {
        throw error
    }
}