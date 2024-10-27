import styles from './Home.module.scss'
import { Slider } from '../../../components/ui/slider';
import { useState } from 'react';
import { CheckBox } from '../../components/CheckBox/CheckBox';
import { useGetChecks } from '../../features/useGetChecks';
import { randomValue } from '../../shared/randomValue';
import { difficultyValue } from '../../shared/difficulty';
import { Button } from '../../../components/ui/button';
import { ProgressRoot, ProgressBar } from '../../../components/ui/progress';
import copyIcon from './../../../icons/copyIcon.svg';


const Home: React.FC = () => {

    const [slider, setSlider] = useState<number[]>([8])
    const [result, setResult] = useState<string>("Generate your passsword")
    const [difficulty, setDifficulty] = useState<number>(0)
    const [copy, setCopy] = useState<boolean>(false)

    const copyHandler = () => {
        navigator.clipboard.writeText(result)
    }

    const difficultyHandler = (): string => {
        if (difficulty <= 20) {
            return "red"
        } else if (difficulty > 20 && difficulty <= 40) {
            return "orange"
        }   else if (difficulty > 40 && difficulty <= 60) {
            return "yellow"
        } else if (difficulty > 60 && difficulty <= 80) {
            return "green"
        } else {
            return "purple"
        }
    }

    const { checks, lower, upper, numbers, symbols } = useGetChecks()

    const generatePassword = () => {
        if ((!lower && !upper && !numbers && !symbols) || slider[0] === 0) {
            setResult("Choose tools")
            setDifficulty(0)
            setCopy(false)
        } else {
            const res = randomValue(slider[0], lower, upper, numbers, symbols)
            setResult(res)
            setCopy(true)
            setDifficulty(difficultyValue(slider[0], lower, upper, numbers, symbols))
        }
    }

    return (
        <section className={styles.container}>
            <article>
                {result}
                {copy && <img className={styles.copyBtn} onClick={copyHandler} src={copyIcon} alt="" width={24} height={24}/>}
            </article>
            <div className={styles.tools}>
                <div className={styles.charLength}>
                    <h2>Character length <span>{slider}</span></h2>
                    <Slider colorPalette="green" max={20} className={styles.slider} onValueChange={e => setSlider(e.value)} defaultValue={slider}/>
                </div>
                <ul className={styles.checks}>
                    {checks.map(check => {
                        return (
                            <CheckBox props={check} key={check.title}/>
                        )
                    })}
                </ul>
                <div className={styles.strength}>
                    <h2>Strength</h2>
                    <ProgressRoot colorPalette={"green"} value={difficulty} className={styles.difficulty}>
                        <ProgressBar  colorPalette={difficultyHandler()}/>
                    </ProgressRoot>
                </div>
                <Button onClick={generatePassword} variant={"solid"} className={styles.genBtn} colorPalette={"green"}>
                    <p>Generate</p>
                </Button>
            </div>
        </section>
    )
}


export default Home;