import LocalTable from "../../DB/Entities/Locals"

export default function getAll() {
    try {
        console.log("Getting locals list. - " + new Date())
        return LocalTable.getAll()
    }
    catch (error) {
        throw error
    }
}