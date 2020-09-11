import React from "react";
import styles from '../Table.module.css'


export default function Rows(props) {
    const { persons, tableHeader } = props;

    return (
        <>
            {persons.map(person => {
                return (
                    <div className={ styles.tr } key={person.id}>
                        {tableHeader.map((el, index) => <div className={ styles.td } key={index}>{person[el]}</div>)}
                    </div>
                )
            })}
        </>
    )
}