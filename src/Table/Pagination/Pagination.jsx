import React from "react";
import style from './Pagination.module.css'

export default function Pagination(props) {
    const {numberOfPages, setPage} = props;
    const pages = [];

    for (let i = 0; i < numberOfPages; i++) {
        pages[i] = i + 1;
    }
    return (
        <div className={style.wrapper}>
            {numberOfPages > 1 && pages.map(page => <button className={style.btn + ' btn btn-light'}
                                                            key={page}
                                                            onClick={() => setPage(page)}>{page}</button>)}
        </div>
    )
}