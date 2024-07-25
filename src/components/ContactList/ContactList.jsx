import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.contactList}>
            {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                    <li className={css.contactListItem} key={contact.id}>
                        <Contact id={contact.id} name={contact.name} number={contact.number} />
                    </li>
                ))
            ) : (
                <li>
                    <p>No contacts</p>
                </li>
            )}
        </ul>
    );
}

export default ContactList;