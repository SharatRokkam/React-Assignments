import React from 'react';
import { useState } from 'react';


const  Form = () =>
{

    const [name1, setName] = useState("");
    const[userNewName, setUserName] = useState();

    const[department]

    const inputEvent = (event) =>
    {
        console.log(event.target.value);
        setName(event.target.value)
    };

    const onSubmit = (event) =>
    {
        event.preventDefault();
        setUserName(name1);
    }

    return(
        <>
            <div className='main-container'>
                <h1>
                    EMPLOYEE FEEDBACK FORM
                </h1>
                <hr />

                <form onSubmit={onSubmit}>
                    <center>
                    <table>
                    <tr>
                    <label for="name">Name : </label>
                    <input type="text" value={name1} name="name" id="name"  placeholder='Enter ur Name Here ... ' onChange={inputEvent} required />
                    </tr>     
                    <br/>
                    <tr>
                    <label for="department">Department : </label>
                    <input type="text" value={department} name="department" id="department" placeholder='Enter ur department' required onChange={inputEvent}/>
                    </tr>
                    <br />
                   <tr>
                    <label htmlFor="rate">Rating : </label>
                    {/* <input type="number" placeholder='Enter rate between 1 to 5' name="rate" id="rate"  max="5" min="1" required/> */}
                    </tr>
                    <br />
                    <tr>
                    <input className='sub-btn' type="submit" value="Submit" />
                    </tr>
                    </table>
                    </center>
                </form>

            </div>
            <center>
            <div className='show-data'>
              <h1> hello {userNewName} </h1>

            </div>
            </center>
        </>
    );

}

export default Form;