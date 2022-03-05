import React from "react";
import './UserDataStyle.css'

//getting data in the form props from useEffectApi component

const UserData = ({ userSelectedData }) => {
  console.log("From userData", userSelectedData);
  return (

    <div className="userDetailsContainer">
      <p className="userFormHeading">
        <strong>User Details</strong>
      </p>
      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              <th scope="col">First Name</th>
              <td>{userSelectedData?.first_name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="col">Last Name</th>
              <td>{userSelectedData?.last_name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="col">Email</th>
              <td>{userSelectedData?.email}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="col">Avatar</th>
              <td>{userSelectedData?.avatar}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
