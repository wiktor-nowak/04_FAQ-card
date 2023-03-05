import styles from './Graphics.module.scss';
// import pic from '../assets/illustration-woman-online-mobile.svg'
// import backgr from '../assets/bg-pattern-mobile.svg'
import boxpic from '../assets/illustration-box-desktop.svg'


function Graphics() {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.im} src="" alt=''/>
            <img className={styles.bg} src="" alt=''/>
            <img className={styles.boxgraphics} src={boxpic} alt=''/>
        </div>
    )
}

export default Graphics;