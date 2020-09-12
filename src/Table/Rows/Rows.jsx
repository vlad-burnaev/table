import React from "react";
import styles from '../Table.module.css'


export default function Rows(props) {
    const { persons, tableHeader } = props;
    const partOfPersons = persons.slice(0, 10);

    return (
        <>
            {partOfPersons.map(person => {
                return (
                    <div className={ styles.tr } key={person.id + person.phone}>
                        {tableHeader.map((el, index) => <div className={ styles.td } key={index}>{person[el]}</div>)}
                    </div>
                )
            })}
        </>
    )
}