import React from "react";
import _ from 'lodash'

export default function Info(props) {
    const {selectedPersonId, persons} = props;
    const selectedPerson = _.find(persons, ['id', selectedPersonId]);
    return (
        <div className="Info" style={{marginBottom: '20px'}}>
            <div>User selected: <b>{selectedPerson.firstName}</b></div>
            <div>
                Description: <br/>
                <textarea defaultValue={selectedPerson.description} cols={70} rows={3}/>
            </div>
            <div>Address: <b>{selectedPerson.address.streetAddress}</b></div>
            <div>City: <b>{selectedPerson.address.city}</b></div>
            <div>State: <b>{selectedPerson.address.state}</b></div>
            <div>Zip code: <b>{selectedPerson.address.zip}</b></div>
        </div>
    )
}