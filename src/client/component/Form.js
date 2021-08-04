import React, {useState} from 'react'
import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: black;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
    box-shadow: none;
    border: none;
    width: 30%;
    white-space: none;


`;

const Formm = styled.form`
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    .alt-text{
        text-align: center;
        margin: 10px 0;
    }
`;


const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Open Sans';
    margin-bottom: 8px;
    box-sizing: border-box;
    height: 40px;
    ${p=> (p.md) ? "flex:0 0 46%":'flex:0 0 100%'};

    @media (max-width: 768px) {
        flex: 0 0 100%;
    }

`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`


export default function Form(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    // const {handleSubmit} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstname,lastname,password)
        
      };



    return (
        
                <Formm onSubmit={handleSubmit}>
                    {/* // <Formm> */}
       
        
                    <Input 
                        md
                        onChange={(e)=> setFirstname(e.target.value)}
                        name="username" 
                        type="text"
                        placeholder="Username" />

                    <Input 
                      md
                      onChange={(e)=> setLastname(e.target.value)}
                      name="lastname" 
                      type="text"
                      placeholder="lastname" />

                    <Input 
                       
                       onChange={(e)=> setPassword(e.target.value)}
                        name="password" 
                        type="password"
                        placeholder="Password"
                        />

                    <ButtonContainer>
                        <Button large type="submit" >Submit</Button>
                    </ButtonContainer>
      
        
            </Formm>
       
       
    );
  }
  


