import adduserService from "../../../src/Services/addUser"
import User from "../../../src/Types/User"

describe("Testing addUser service", () => {
    it("Should add user", () => {
        const userToAdd: User = {
            id: 0,
            name: "andrew",
            email: "email@email.com",
            password: "1234abcd"
        }

        expect(adduserService(userToAdd)).toStrictEqual({ message: "user successfully added." })
    })
})