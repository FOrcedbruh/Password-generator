import styles from './Home.module.scss'
import { Slider } from '../../../components/ui/slider';
import { useState } from 'react';
import { CheckBox } from '../../components/CheckBox/CheckBox';


const Home: React.FC = () => {

    const [slider, setSlider] = useState<number[]>([8])

    let value = false

    return (
        <section className={styles.container}>
            <article>
                Password
            </article>
            <div className={styles.tools}>
                <div className={styles.charLength}>
                    <h2>Character length <span>{slider}</span></h2>
                    <Slider colorPalette="green" max={20} className={styles.slider} onValueChange={e => setSlider(e.value)} defaultValue={slider}/>
                </div>
                <ul className={styles.checks}>
                    <CheckBox value={value} isDefaultChecked={true} title='Include Uppercase Letters'/>
                </ul>
            </div>
        </section>
    )
}


export default Home;