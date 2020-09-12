import React, {useEffect, useState} from 'react';
import Table from "./Table/Table";
import _ from 'lodash';

function App() {
    const smallRequestURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    useEffect(() => {
        fetch(smallRequestURL)
            .then(response => response.json())
            .then(persons => {
                setPersons(_.orderBy(persons, 'id', 'asc'))
            })
    }, []);
    const [persons, setPersons] = useState([]);
    const tableHeader = ['id', 'firstName', 'lastName', 'email', 'phone'];
    const rowsPerPage = 50;
    const numberOfPages = persons.length / rowsPerPage;
    const [prevPersons, setPrevPersons] = useState([]);
    const [sortTo, setSortTo] = useState('asc');
    const [sortField, setSortField] = useState('id');
    const [page, setPage] = useState(1);

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
                if ( o.firstName.includes(value) || o.lastName.includes(value) || o.email.includes(value) || o.phone.includes(value)) {
                    return true;
                } else return false;
            })
            setPersons(filterPersons);
        } else {
            setPersons(prevPersons);
        };

    }

    return (
        <div className="app-wrapper">
            <h1>Тестовое задание</h1>
            <Table persons={persons} tableHeader={tableHeader} sortTable={sortTable} filterTable={filterTable} sortTo={sortTo} sortField={sortField} numberOfPages={numberOfPages}/>
        </div>
    );
}

export default App;
