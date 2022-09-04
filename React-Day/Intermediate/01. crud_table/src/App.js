import "./styles.css";
import data from "../src/data.json";
import { useState } from "react";
import ReadOnlyRows from "./components/ReadOnlyRows";
import { nanoid } from "nanoid";
import EditableRow from "./components/EditableRow";

export default function App() {
  const defaultData = {
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  };

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState(defaultData);
  const [editContacts, setEditContacts] = useState(null);
  const [editFormData, setEditFormData] = useState(defaultData);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    let new_contact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    let new_contacts = [...contacts, new_contact];
    setContacts(new_contacts);

    setAddFormData(defaultData);
  };

  const handleDelete = (contactId) => {
    let new_contacts = [...contacts];
    new_contacts = new_contacts.filter((contact) => contact.id !== contactId);
    setContacts(new_contacts);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContacts(contact.id);

    let new_contact = {
      id: nanoid(),
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    };
    setEditFormData(new_contact);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const new_contact = {
      id: editContacts,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };

    let new_contacts = [...contacts];
    let index = new_contacts.findIndex((c) => c.id === editContacts);
    new_contacts[index] = new_contact;
    setContacts(new_contacts);
    setEditContacts(null);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditContacts(null);
  };

  return (
    <div className="App">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <>
                {editContacts === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRows
                    contact={contact}
                    handleDelete={handleDelete}
                    handleEditClick={handleEditClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          value={addFormData.fullName}
          onChange={handleAddFormChange}
        ></input>

        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address"
          value={addFormData.address}
          onChange={handleAddFormChange}
        ></input>

        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number"
          value={addFormData.phoneNumber}
          onChange={handleAddFormChange}
        ></input>

        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email"
          value={addFormData.email}
          onChange={handleAddFormChange}
        ></input>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
