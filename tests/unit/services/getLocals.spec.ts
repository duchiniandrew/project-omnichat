import getLocalsService from "../../../src/Services/getLocals"

describe("Testing getLocals service", () => {
    it("Should return a success object", () => {
        expect(getLocalsService()).toEqual([])
    })
})