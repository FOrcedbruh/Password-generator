

export const difficultyValue = (lenght: number, lower: boolean, upper: boolean, numbers: boolean, symbols: boolean): number => {
    let res: number = 0

    res = ((lower ? 4 : 0) + (upper ? 4 : 0) + (numbers ? 5 : 0) + (symbols ? 6 : 0)) * (lenght / 2)

    return res
}