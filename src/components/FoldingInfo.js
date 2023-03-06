import styles from '../styles/GlobalStyles.module.scss';
import arrow from '../assets/icon-arrow-down.svg';
// import { useState } from 'react';

function FoldingInfo({faqItem,getToggleID}) {

    return (
        <div
            className={styles.unfold}
            onClick={() => getToggleID(faqItem.id)}>
            <div className={styles.row}>
                <p className={faqItem.isToggled ? styles.unfoldedText : null}>
                        {faqItem.title}
                    </p>
                    <img
                    className={faqItem.isToggled ? styles.unfoldedArrow : null}
                    src={arrow} alt=''/>
            </div>
            <hr/>
            <p className={faqItem.isToggled ? styles.showtime : null}
                >{faqItem.content}
            </p>
        </div>
    )

}

export default FoldingInfo;