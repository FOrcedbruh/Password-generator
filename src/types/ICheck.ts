export interface ICheck {
    title: string,
    checked: boolean,
    onAction: (checked: boolean) => void
}