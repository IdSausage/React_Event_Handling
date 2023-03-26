import { useState } from "react";

function MyForm()
{
    const [name , setName] = useState("");
    const [lastname , setLastName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState('');
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");

    function ChangePassword(e)
    {
        setPassword(e.target.value);
    }

    function ChangePhoneNumber(e)
    {
        
        setPhoneNumber(e.target.value);
    }

    function ChangeLastName(e)
    {
        setLastName(e.target.value);
    }

    function ChangeName(e)
    {
        setName(e.target.value);
    }

    function ChangeEmail(e)
    {
        setEmail(e.target.value);
    }

    function HandleSubmit(event)
    {
        event.preventDefault();
    }

    return(
        <form onSubmit={HandleSubmit}>
            
            <label style={{color: "white"}}>Email Address: 
            <input type="email" placeholder="Enter Email" pattern = "^[a-zA-Z\@]*$" value={email} onChange={ChangeEmail} required />
            </label>

            <br />

            <label style={{color: "white"}}>Name: 
            <input type="text" placeholder="Enter Firstname" pattern = "^[a-zA-Z ]*$" value={name} onChange={ChangeName} required />
            </label>

            <br />

            <label style={{color: "white"}}>LastName: 
            <input type="text" placeholder="Enter Lastname" pattern = "^[a-zA-Z ]*$" value={lastname} onChange={ChangeLastName} required />
            </label>

            <br />

            <label style={{color: "white"}}>Phone Number: 
            <input type="tel" placeholder="Enter Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNumber} onChange={ChangePhoneNumber} required />
            </label>

            <br />

            <label style={{color: "white"}}>Password: 
            <input type="password" placeholder="Enter Password" value={password} onChange={ChangePassword} required />
            </label>

            <br />

            <input type="submit" />
        </form>
    )
}

export default MyForm