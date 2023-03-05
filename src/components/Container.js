import globalStyles from '../styles/GlobalStyles.module.scss';
import FoldingInfo from './FoldingInfo';
import Graphics from './Graphics';
import api from '../data/data.json' // assert {type: 'json'};
import { useEffect, useState } from 'react';

function Container() {
    let [data, setData] = useState([]);
    // const [toggledItem, setToggledItem] = useState(false);

    const checkForToglle = (toggledID) => {
        const entries = data.map((item) => item.id === toggledID ? {...item, isToggled: !item.isToggled} : {...item, isToggled: false});
        setData(entries);
    }

    // const handleCheck = (id) => {
    //     const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    //     //jak dziala ten fragment w wąsatych u góry?!
    //     setItems(listItems);

    //   }

    useEffect(() => {
        setData(api.faqs)
        console.log(api.faqs)
    }, [])

    return (
    <div className={globalStyles.container}>
        <Graphics/>
        <div className={globalStyles.outerContent}>
            <h1>FAQ</h1>
            <div className={globalStyles.content}>
                {data.map((faq) => {
                        return (
                            <FoldingInfo
                            getToggleID={checkForToglle}
                            key={faq.id}
                            faqItem={faq}
                            />
                        )
                    })}
            </div>
        </div>
    </div>
    )
}

export default Container;