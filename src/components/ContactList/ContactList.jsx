import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.value);

  const visibleUsers = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  const wordContacts = contacts.length === 1 ? 'contact' : 'contacts';

  return (
    <div>
      <h2 className={css.contactListTitle}>Contacts</h2>
      <p className={css.totalContacts}>
        You have {visibleUsers.length} {wordContacts}
      </p>
      <ul className={css.contactList}>
        {visibleUsers.map(contact => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
