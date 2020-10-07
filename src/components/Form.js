import React from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  text-transform: lowercase;
  width: 48%;
  padding-bottom: 10px;
  margin: 0 auto;
`;
const Form = (props) => {
  return (
    <FormDiv className="note-list">
      {props.teamMembers.map((teamMember) => (
        <div className="note" key={teamMember.id}>
          <h2>name: {teamMember.name}</h2>
          <p>e:mail: {teamMember.email}</p>
          <p>role: {teamMember.role}</p>
        </div>
      ))}
    </FormDiv>
  );
};
export default Form;
