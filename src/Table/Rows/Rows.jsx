import React from "react";
import styles from '../Table.module.css'


export default function Rows(props) {
    const { persons, tableHeader, pagesIntervals, page, setInfoVisibility, setSelectedPersonId } = props;
    const partOfPersons = persons.slice(pagesIntervals[page-1][0], pagesIntervals[page-1][1]+1);

    return (
        <>
            {partOfPersons.map(person => {
                return (
                    <div className={ styles.tr }
                         key={person.id + person.phone}
                         onClick={() => {
                            setInfoVisibility(true);
                            setSelectedPersonId(person.id);
                    }}>
                        {tableHeader.map((el, index) => <div className={ styles.td } key={index}>{person[el]}</div>)}
                    </div>
                )
            })}
        </>
    )
}