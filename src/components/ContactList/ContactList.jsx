import Contact from '../Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const currentFilter = useSelector(getFilter);
    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(currentFilter.toLowerCase()));;
    
    return (
        <ul className={css.contactList}>
            {visibleContacts.length > 0 ? (
                visibleContacts.map((contact) => (
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