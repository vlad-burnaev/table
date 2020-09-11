import React from "react";
import styles from './Table.module.css'
import Rows from "./Rows/Rows";
import Head from "./Head/Head";
import Filter from "./Filter/Filter";

export default function Table(props) {
    const {tableHeader, persons, sortTable, filterTable} = props;

    return (
        <>
            <Filter filterTable={filterTable}/>
            <div className={styles.table}>
                <Head tableHeader={tableHeader} sortTable={sortTable}/>
                <Rows tableHeader={tableHeader} persons={persons}/>
            </div>
        </>
    )
}