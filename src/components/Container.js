import globalStyles from '../styles/GlobalStyles.module.scss';
import FoldingInfo from './FoldingInfo';
import Graphics from './Graphics';
import api from '../data/data';
import { useEffect, useState } from 'react';

function Container() {
    const [data, setData] = useState([]);
    const [toggledItem, setToggledItem] = useState();

    const checkForToglle = (toggledID) => {
        setToggledItem(toggledID);
        // console.log(toggledID);
    }

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                api.get('/faqs').then(
                    (response) => setData(response.data),
                    console.log(data),
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchFAQs();
    }, [])

    return (
    <div className={globalStyles.container}>
        <Graphics/>
        <h1>FAQ</h1>
        {data.map((faq) => {
            return (
                <FoldingInfo
                validState={ toggledItem ? true : false}
                getToggleID={checkForToglle}
                key={faq.id}
                faqItem={faq}
                />
            )
        })}
    </div>
    )
}

export default Container;