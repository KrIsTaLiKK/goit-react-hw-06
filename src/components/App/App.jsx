import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.firstSection}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <div className={css.secondSection}>
        <ContactForm />
        <div className={css.secondSectionWrap}>
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
};
