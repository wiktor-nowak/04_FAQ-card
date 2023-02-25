import styles from './Graphics.module.scss';
import pic from '../assets/illustration-woman-online-mobile.svg'
import backgr from '../assets/bg-pattern-mobile.svg'


function Graphics() {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.im} src={pic} alt=''/>
            <img className={styles.bg} src={backgr} alt=''/>
        </div>
    )
}

export default Graphics;