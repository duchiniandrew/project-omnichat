import { InvalidIdParameter } from "./errors"

export default function validation(id: number) {
    console.log("Checking delete Local Request parameters - " + new Date())
    if (isNaN(id)) {
        throw new InvalidIdParameter()
    }
}