export default function testPassword(password: string) {
    let hasNumber = false
    let hasLetters = false

    //TODO find a better way to check password format
    for (let i = 0; i < password.length; i++) {
        if (/[a-zA-Z]/.test(password[i])) {
            hasLetters = true
        }
        if (/\d+/g.test(password[i])) {
            hasNumber = true
        }
        if (hasLetters && hasNumber) {
            return true
        }
    }
    return false
}