import React, { useState } from "react";
import { PageContainer } from "../../styledComponents";
import styled from "styled-components";
import { fetchUsers } from "../../utils";
import { LogInput } from "../../components/LogInput";
import { LogForm } from "../../components/logForm";
import { LogButton } from "../../components/LogButton";

export const Landing = ({ setUser }) => {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();

  return (
    <PageContainer>
      <LogForm onSubmit={(e) => fetchUsers(e, email, userName, pass, setUser)}>
        {newUser && (
          <LogInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <LogInput
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <LogInput
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <LogButton type="submit">{newUser ? "Sign Up" : "Log In"}</LogButton>
      </LogForm>
      <LogButton type="button" onClick={() => setNewUser(!newUser)}>
        {newUser ? "Log In" : "Sign Up"}
      </LogButton>
    </PageContainer>
  );
};


