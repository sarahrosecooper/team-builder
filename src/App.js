import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import FormLayout from "./components/FormLayout";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  border: 1px solid black;
  width: 40%;
  margin: 0 auto;
  padding-bottom: 20px;
  background-image: url("https://i.pinimg.com/originals/d6/61/46/d66146d75fef16bd97cbf3b739ac0c5a.png");
`;

const StyledH1 = styled.h1`
  margin-bottom: 6px;
  font-size: 2rem;
  border-bottom: solid 2px black;
  width: 45%;
  margin: 0 auto;
`;

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sarah R. Cooper",
      email: "sarahrosecooperx@gmail.com",
      role: "web developer",
    },
  ]);

  const addNewCard = (teamMember) => {
    const newCard = {
      id: Date.now(), // gives you a unique id
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };

    setTeamMembers([...teamMembers, newCard]);
  };

  return (
    <MainContent>
      <div className="App">
        <StyledH1>the workplace app 📝</StyledH1>
        <div>
          <Form teamMembers={teamMembers} />
        </div>
        <FormLayout addNewCard={addNewCard} />
      </div>
    </MainContent>
  );
}

export default App;
