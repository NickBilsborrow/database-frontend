import React, { useContext, useState } from "react";
import { LogButton } from "../../components/LogButton";
import { LogForm } from "../../components/logForm";
import { LogInput } from "../../components/LogInput";
import { deleteUser, editEmail, editPassword, editUsername } from "../../utils";

export const Settings = () => {
  const [newUsername, setNewUsername] = useState();
  const [oldUsername, setOldUsername] = useState();
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newEmail, setNewEmail] = useState();
  const [userName, setUserName] = useState();
  const [setting,setSetting]=useState(0)
  

  return (

    <div>




        <h1>Settings</h1>

        <LogButton onClick={(e)=>{setSetting(1)}}>Change Username</LogButton>
        <LogButton onClick={(e)=>{setSetting(2)}}>Change Password</LogButton>
        <LogButton onClick={(e)=>{setSetting(3)}}>Change email</LogButton>
        <LogButton onClick={(e)=>{setSetting(4)}}>Delete Account</LogButton>
        { (setting == 1 )? 
      <div>
        <h1>Change Username</h1>
        <LogForm onSubmit={(e) => editUsername(e, oldUsername, newUsername)}>
          <LogInput
            onChange={(e) => setOldUsername(e.target.value)}
            placeholder="Old Username"
          />

          <LogInput
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="New Username"
          />

          <LogButton type="submit">Submit</LogButton>
        </LogForm>
      </div>
 : <div></div> }
 { (setting == 2 )? 
      <div>
        <h1>Change Password</h1>
        <LogForm onSubmit={(e) => editPassword(e,oldUsername, oldPassword, newPassword)}>
        <LogInput
            onChange={(e) => setOldUsername(e.target.value)}
            placeholder="Username"
          />
          <LogInput
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
          />
          <LogInput
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
          />
          <LogButton type="submit">Submit</LogButton>
        </LogForm>
      </div>
      : <div></div> }

{ (setting == 3 )? 
      <div>
        <h1>Change Email</h1>
        <LogForm onSubmit={(e) => editEmail(e,oldUsername, oldPassword, newEmail)}>
        <LogInput
            onChange={(e) => setOldUsername(e.target.value)}
            placeholder="Username"
          />
          <LogInput
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Password"
          />
          <LogInput
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New email"
          />
          <LogButton type="submit">Submit</LogButton>
        </LogForm>
      </div>
 : <div></div> }
{ (setting == 4 )? 
      <div>
        <h1>Delete Account</h1>
        <LogForm onSubmit={(e) => deleteUser(e,oldUsername, oldPassword)}>
        <LogInput
            onChange={(e) => setOldUsername(e.target.value)}
            placeholder="Username"
          />
          <LogInput
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Password"
          />
          <LogButton type="submit">Submit</LogButton>
        </LogForm>

      </div>
       : <div></div> }
    </div>
  );
};
