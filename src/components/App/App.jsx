import { Component } from "react";
import { Container, ContactsWrapper } from "./App.styled";
import ContactForm from "components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }

  componentDidMount() {
    const data = this.getFromLocalStorage('savedContacts');
    if (data) {
      this.setState({ contacts: data })
    }
  }
  
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.setToLocalStorage('savedContacts', this.state.contacts);
    }
  }

  setToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }

  getFromLocalStorage = key => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
    return  data === null ? undefined : data;
  } catch (err) {
    console.log(err);
  }
};
  
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (name, number) => {
    if (this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(name + ' is already in contacts.');
    }
     
    this.setState((prevState) => {
        return {contacts: prevState.contacts.concat({ name, number, id: nanoid() })}
      }
    );
  }

  handleDeleteBtnClick = (id) => {
    this.setState((prevState) => {
      return {contacts: prevState.contacts.filter((item) => item.id !== id)}
    })
  }

  checkIncludesFilterInArray = (item) => {
        return item.name.toLowerCase().includes(this.state.filter.toLowerCase());
    }

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm  onSubmit={this.handleSubmit} />
        
        {contacts.length !== 0 && 
        <ContactsWrapper>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleChange}/>
          <ContactList contactsFilter={contacts.filter(this.checkIncludesFilterInArray)}  onDeleteBtnClick={this.handleDeleteBtnClick} />
        </ContactsWrapper>
        }
      </Container>
    );
  }
}

export default App;