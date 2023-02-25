import styles from './FoldingInfo.module.scss';
import arrow from '../assets/icon-arrow-down.svg';
import useToggle from './ToggleHook'

function FoldingInfo(props) {
    const [isToggled, setIsToggled] = useToggle(props.validState);
    const item = props.faqItem;

    const unfoldEffect = () => {
        props.getToggleID(item.id);
        setIsToggled(true);
    }

    return (
        <div>
            <div
            className={styles.unfold}
            onClick={unfoldEffect}>
                <p className={isToggled ? styles.unfoldedText : ''}>
                    {item.title}
                </p>
                <img
                className={isToggled ? styles.unfoldedArrow : ''}
                src={arrow} alt=''/>
            </div>
            {(isToggled && <p>
                {item.content}
            </p>)}
            <hr/>
        </div>
    )


}

export default FoldingInfo;