import React from "react";
import styles from './Table.module.css'
import Rows from "./Rows/Rows";
import Head from "./Head/Head";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";

export default function Table(props) {
    const {tableHeader, persons, sortTable, filterTable, sortTo, sortField, numberOfPages, pagesIntervals, page, setPage} = props;

    return (
        <>
            <Filter filterTable={filterTable}/>
            <div className={styles.table}>
                <Head tableHeader={tableHeader}
                      sortTable={sortTable}
                      sortTo={sortTo}
                      sortField={sortField}/>
                <Rows tableHeader={tableHeader}
                      persons={persons}
                      pagesIntervals={pagesIntervals}
                      page={page}/>
            </div>
            <Pagination numberOfPages={numberOfPages} setPage={setPage}/>
        </>
    )
}