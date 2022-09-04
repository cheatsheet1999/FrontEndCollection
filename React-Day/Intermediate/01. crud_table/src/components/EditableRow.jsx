import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleEditFormChange}
          value={editFormData.fullName}
        ></input>
      </td>

      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address"
          onChange={handleEditFormChange}
          value={editFormData.address}
        ></input>
      </td>

      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number"
          onChange={handleEditFormChange}
          value={editFormData.phoneNumber}
        ></input>
      </td>

      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        ></input>
      </td>

      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
