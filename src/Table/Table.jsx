import React, {useEffect, useState} from "react";
import styles from './Table.module.css'
import Rows from "./Rows/Rows";
import Head from "./Head/Head";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import _ from "lodash";

export default function Table(props) {
    const {requestURL} = props;
    useEffect(() => {
        fetch(requestURL)
            .then(response => response.json())
            .then(persons => {
                setPersons(_.orderBy(persons, 'id', 'asc'))
            })
    }, []);

    const [persons, setPersons] = useState([]);
    const [prevPersons, setPrevPersons] = useState([]);
    const [sortTo, setSortTo] = useState('asc');
    const [sortField, setSortField] = useState('id');
    const [page, setPage] = useState(1);

    const tableHeader = ['id', 'firstName', 'lastName', 'email', 'phone'];
    const rowsPerPage = 50;
    const numberOfPages = Math.ceil(persons.length / rowsPerPage);
    const pagesIntervals = takeIntervals(rowsPerPage, numberOfPages);

    function takeIntervals(nRows, nPages) {
        const intervals = [];
        let start = 0;
        let end = nRows-1;
        for (let i=0; i<=nPages; i++) {
            intervals[i]=[start, end];
            start+=nRows;
            end+=nRows;
        }
        return intervals;
    }
    function sortTable(sortField) {
        const copyPersons = persons.concat();
        const sortType = sortTo === 'asc' ? 'desc' : 'asc';
        const sortPersons = _.orderBy(copyPersons, sortField, sortType);
        setSortField(sortField);
        setPersons(sortPersons);
        setSortTo(sortType);
    }
    function filterTable(value) {
        const copyPersons = persons.concat();
        setPrevPersons(copyPersons);
        if (value !== '') {
            const filterPersons = _.filter(copyPersons, function (o) {
                if (o.firstName.includes(value) || o.lastName.includes(value) || o.email.includes(value) || o.phone.includes(value)) {
                    return true;
                } else return false;
            })
            setPersons(filterPersons);
        } else {
            setPersons(prevPersons);
        }
        ;

    }

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