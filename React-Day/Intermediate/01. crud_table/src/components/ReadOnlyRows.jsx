const ReadOnlyRows = ({ contact, handleDelete, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
