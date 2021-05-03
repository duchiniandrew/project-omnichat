import { EmptyNameError, NameFormatError, EmptyDescriptionError, EmptyAddressError, EmptyRateError } from "./errors"
import Local from "../../Types/Locals"

export default function validation({ name, description, address, rate }: Local) {
    if (name === "") {
        throw new EmptyNameError()
    }
    else if (!isNaN(parseInt(name))) {
        throw new NameFormatError()
    }
    if (description === "") {
        throw new EmptyDescriptionError()
    }
    if (address === "") {
        throw new EmptyAddressError()
    }
    if (!rate) {
        throw new EmptyRateError()
    }
}