import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

const Contact = ({id, name, number}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteContact(id))
    };

    return (
        <div className={css.contactContainer}>
            <div className={css.personalData}>
                <p><IoPerson className={css.contactIcon} /> {name}</p>
                <p><FaPhone className={css.contactIcon} /> {number}</p>
            </div>
            <button className={css.deleteButton} type="button" onClick={handleClick}>Delete</button>
        </div>
    );
};

export default Contact;