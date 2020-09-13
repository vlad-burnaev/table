import React, {useState} from "react";
import styles from './NewPerson.module.css'

export default function NewPerson(props) {
    const {setPersons, persons} = props;
    const [formVisibility, setFormVisibility] = useState(false);
    const [addBtnVisibility, setAddBtnVisibility] = useState(true)
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const copyPersons = persons.concat();
    const newPersonObj = {id, firstName, lastName, email, phone};
    let formIsRequired = false;
    if (id !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== '') {
        formIsRequired = true;
    }
    return (
        <div className={styles.newPerson}>
            {addBtnVisibility === true && <button className={styles.addBtnUp + ' btn btn-secondary'} onClick={() => {
                setFormVisibility(true);
                setAddBtnVisibility(false);
            }}>Add person</button>}
            {formVisibility === true && <form action="#">
                <div className={styles.wrapper}>
                    <div>id</div>
                    <div>firstName</div>
                    <div>lastName</div>
                    <div>email</div>
                    <div>phone</div>
                </div>
                <div className={styles.wrapper}>
                    <input type="text" value={id} onChange={e => setId(e.target.value.trim())}/>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                {formIsRequired && <button className={styles.addBtnDown + ' btn btn-secondary'} onClick={() => {
                    copyPersons.unshift(newPersonObj);
                    setPersons(copyPersons);
                    setId('');
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhone('');
                    setFormVisibility(false);
                    setAddBtnVisibility(true);
                }}>Add person</button>}
            </form>}
        </div>
    )
}