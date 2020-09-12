import React from "react";
import styles from "../Table.module.css";

export default function Head(props) {
    const {tableHeader, sortTable, sortTo, sortField} = props;

    return (
        <div className={styles.tr}>
            {tableHeader.map((el,index) =>
                <div className={styles.td} key={index}>
                    <span onClick={() => sortTable(el) }>{el}</span>
                    &nbsp;
                    <span>{sortField === el ? (sortTo === 'asc' ? '▲' : '▼') : ''}</span>
                </div>)}
        </div>
    )
}