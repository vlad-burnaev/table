import React from "react";
import styles from "../Table.module.css";

export default function Head(props) {
    const {tableHeader, sortTable} = props;
    return (
        <div className={styles.tr}>
            {tableHeader.map((el,index) =>
                <div className={styles.td} key={index}>
                    <a onClick={() => sortTable(el) }>{el}</a>
                    {/*&nbsp;*/}
                    {/*<span className={styles.arrowUp}>&#9650;</span>*/}
                    {/*<span className={styles.arrowDown}>&#9660;</span>*/}
                </div>)}
        </div>
    )
}