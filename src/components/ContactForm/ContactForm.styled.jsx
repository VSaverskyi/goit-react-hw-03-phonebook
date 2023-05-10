import styled from "@emotion/styled";

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
padding: 20px 30px;
border: 2px solid #000;
width: 240px;
margin-top: 24px;
`; 

export const ButtonSubmit = styled.button`
background-color: #eff0fc;
color: #000;
font-weight: 600;
border: 1px solid #a2a2a2;
max-width: 160px;
height: 30px;
border-radius: 4px;
padding: 4px 16px;
text-transform: capitalize;
margin-top: 16px;

:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
}

:active {
    background-color: #91a2a2;
}
`;