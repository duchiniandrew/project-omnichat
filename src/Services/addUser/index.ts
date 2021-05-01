import User from "../../Types/User"
import UserTable from "../../DB/Entities/User"

export default function addUser(user: User) {
    try {
        console.log("Adding user into dataBase - " + new Date())
        UserTable.addRegister(user)
        return { message: "user successfully added." }
    }
    catch (error) {
        throw error
    }
}