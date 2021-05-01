import UserTable from "../../DB/Entities/User"

export default function getUser(id: number) {
    return UserTable.findRegister(id)
}