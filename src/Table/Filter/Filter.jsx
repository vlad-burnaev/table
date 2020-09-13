import React, {useState} from "react";
import styles from './Filter.module.css'

export default function Filter(props) {
    const {filterTable} = props;
    const [value, setValue] = useState('');
    return (
        <div className={styles.filter}>
            <div>Search by value</div>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button className='btn btn-secondary' type='button' onClick={() => {
                if (value.trim() !== '') {
                    filterTable(value);
                } else filterTable('goToPrev');

            } }>Search</button>
        </div>
    )
}