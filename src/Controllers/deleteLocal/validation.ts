import { InvalidIdParameter } from "./errors"

export default function validation(id: number) {
    if (isNaN(id)) {
        throw new InvalidIdParameter()
    }
}