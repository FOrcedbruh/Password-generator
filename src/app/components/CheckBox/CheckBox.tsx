import { Dispatch, SetStateAction, useState } from "react"
import { Checkbox } from "../../../components/ui/checkbox"

interface ICheckBoxProps {
    value: boolean,
    title: string,
    isDefaultChecked: boolean
}

const CheckBox: React.FC<ICheckBoxProps> = ({ value, title, isDefaultChecked }) => {

    const [checked, setChecked] = useState<boolean>(isDefaultChecked)

    return (
        <Checkbox defaultChecked={isDefaultChecked} checked={checked} onCheckedChange={e => setChecked(!!e.checked)} colorPalette="green" variant="subtle">
            {title}
        </Checkbox>
    )
}

export { CheckBox }