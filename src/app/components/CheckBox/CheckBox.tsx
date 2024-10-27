import { Checkbox } from "../../../components/ui/checkbox"
import { ICheck } from "../../../types/ICheck"
import styles from './CheckBox.module.scss'

interface ICheckBoxProps {
    props: ICheck
}

const CheckBox: React.FC<ICheckBoxProps> = ({ props }) => {

    return (
        <Checkbox size={"lg"} className={styles.checkbox} checked={props.checked} onCheckedChange={e => props.onAction(!e.checked)} colorPalette="green" variant="subtle">
            <p>{props.title}</p>
        </Checkbox>
    )
}

export { CheckBox }