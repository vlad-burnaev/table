import React, {useEffect, useState} from 'react';
import Table from "./Table/Table";

function App() {
    const smallRequestURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    const tableHeader = ['id', 'firstName', 'lastName', 'email', 'phone'];
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch(smallRequestURL)
            .then(response => response.json())
            .then(persons => {
                setPersons(persons)
            })
    }, [])

    function sortTable(el) {
        const sortedPersons = persons.concat();
        sortedPersons.sort((prev, next) => {
            if ( prev[el] < next[el] ) return -1;
            if ( prev[el] < next[el] ) return 1;
        });
        setPersons(sortedPersons);
    }

    function filterTable(value) {
        console.log(value)
        return value;
    }


    return (
        <div className="app-wrapper">
            <h1>Тестовое задание</h1>
            <Table persons={persons} tableHeader={tableHeader} sortTable={sortTable} filterTable={filterTable}/>
        </div>
    );
}

export default App;
