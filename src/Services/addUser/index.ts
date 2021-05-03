import { User } from "../../Types/User"
import UserTable from "../../DB/Entities/User"

export default function addUser(user: User) {
    try {
        UserTable.addRegister(user)
        return "user successfully added."
    }
    catch (error) {
        throw error
    }
}