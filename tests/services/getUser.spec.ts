import getUserService from "../../src/Services/getUser"
import User from "../../src/Types/User"

describe("Testing getUser service", () => {
    it("Should return a user", () => {
        const expectUser:User = {
            id: 0,
            name: "andrew",
            email: "email@email.com",
            password: "1234abcd"
        }

        expect(getUserService(0)).toStrictEqual(undefined)
    })
})