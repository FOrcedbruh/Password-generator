

export const randomValue = (length: number, lower: boolean, upper: boolean, numbers: boolean, symbols: boolean) => {
    let lowerLetters: string = "abcdefghijklmnopqrstuvwxyz"
    let upperLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numberLetters: string = "0123456789"
    let symbolsLetters: string = "#@$%^&*!;:,.=+\|™£¢∞§¶"

    let els: string = (lower ? lowerLetters : "") + (upper ? upperLetters: "") + (numbers ? numberLetters: "") + (symbols ? symbolsLetters : "");
    let res: string = ""
    let counter: number = 0

    while (counter < length) {
        res += els.charAt(Math.floor(Math.random() * els.length));
        counter += 1;
    }
    return res
}