import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { ButtonSubmit, FormWrapper } from "./ContactForm.styled";

class ContactForm extends Component  {
    state = {
        name: '',
        number: ''
}

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = e.currentTarget.elements;
        this.props.onSubmit(name.value, number.value);
        this.setState({
            name: '',
            number: ''
        })
    }

    handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

    render() {
        const { name, number } = this.state;
        const idForName = nanoid();
        const idForTel = nanoid();

        return (
            <FormWrapper onSubmit={this.handleSubmit}>
                <label htmlFor={idForName}>
                    Name
                </label>
                <input
                    id={idForName}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor={idForTel}>
                    Number
                </label>
                <input
                    id={idForTel}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <ButtonSubmit type="submit">add contact</ButtonSubmit>
            </FormWrapper>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}