import{Redirect } from "react-router-dom";

export const fetchUsers = async (e, email, username, pass, setUser) => {
  e.preventDefault();
  try {
    let response;
    if (email) {
      response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          username: username,
          password: pass,
        }),
      });
    } else {
      response = await fetch(
        `${process.env.REACT_APP_API_NAME}users/${username}`
      );
    }
    const data = await response.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const editUsername = async (e,oldUsername,newUsername) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      oldUsername: oldUsername,
      newUsername: newUsername        
      }),
    });

  } catch (error) {
    console.log(error);
  }
};

export const editPassword = async (e,oldUsername,oldPassword,newPassword) => {
  e.preventDefault();
  try {
   
    const response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      oldUsername: oldUsername,
      oldPassword: oldPassword,
      newPassword: newPassword        
      }),
    });

  } catch (error) {
    console.log(error);
  }
};

export const editEmail = async (e,oldUsername,oldPassword,newEmail) => {
  e.preventDefault();
  try {    
    const response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      oldUsername: oldUsername,
      oldPassword: oldPassword,
      email: newEmail      
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (e,oldUsername,oldPassword) => {
  e.preventDefault();
const  response = await fetch(`${process.env.REACT_APP_API_NAME}deleteUsers`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    
    username: oldUsername,
    password: oldPassword,
  }),

});

}
