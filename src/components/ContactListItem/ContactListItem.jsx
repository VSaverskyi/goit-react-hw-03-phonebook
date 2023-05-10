import { Component } from "react";
import PropTypes from "prop-types";
import { ButtonDelete, ListItemData, ListItemWrapper } from "./ContactListItem.styled";

class ContactListItem extends Component {
    render() {
        const {  item, onDeleteBtn } = this.props;
        return (
            <ListItemWrapper>
                <ListItemData>{item.name}:</ListItemData>
                <ListItemData>{item.number}:</ListItemData>
                <ButtonDelete type="button" onClick={() => onDeleteBtn(item.id)}>delete</ButtonDelete>
            </ListItemWrapper>
        )
    }
}

export default ContactListItem;

ContactListItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    onDeleteBtn: PropTypes.func.isRequired,
}