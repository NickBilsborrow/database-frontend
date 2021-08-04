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
    // console.log(data)
    setUser(data.user.username);
  } catch (error) {
      console.log(error)
  }
};
