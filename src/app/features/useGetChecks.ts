import { useState } from "react"
import { ICheck } from "../../types/ICheck"

const useGetChecks = () => {
    const [lower, setLower] = useState<boolean>(true)
    const [upper, setUpper] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<boolean>(false)
    const [symbols, setSymbols] = useState<boolean>(false)


    const checks: ICheck[] = [
        {
            title: "Include Lowercase Letters",
            onAction: () => setLower(!lower),
            checked: lower
        },
        {
            title: "Include Uppercase Letters",
            onAction: () => setUpper(!upper),
            checked: upper
        },
        {
            title: "Include Numbers",
            onAction: () => setNumbers(!numbers),
            checked: numbers
        },
        {
            title: "Include Symbols",
            onAction: () => setSymbols(!symbols),
            checked: symbols
        }
       
    ]


    return { checks, lower, upper, numbers, symbols }
}

export { useGetChecks };