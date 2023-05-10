import ContactListItem from "components/ContactListItem/ContactListItem";
import { Component } from "react";
import PropTypes from "prop-types";
import { ContactListWrapper } from "./ContactList.styled";

class ContactList extends Component {
    

    render() {
        const { contactsFilter, onDeleteBtnClick } = this.props;
        return (
            <ContactListWrapper>
                {contactsFilter.length === 0 ? (<li>Contact don`t find</li>) : (contactsFilter
                .map((item) => (
                    <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
                )))}
            </ContactListWrapper>
        )
    }
}

export default ContactList;

ContactList.propTypes = {
    contactsFilter: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onDeleteBtnClick: PropTypes.func.isRequired,
}