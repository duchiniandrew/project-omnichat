import LocalTable from "../../DB/Entities/Locals"

export default function deleteLocal(id: number) {
    try {
        console.log("Deleting local into dataBase - " + new Date())
        LocalTable.deleteRegister(id)
        console.log("Local successfully deleted - " + new Date())
        return "Local successfully deleted"
    }
    catch (error) {
        throw error
    }
}