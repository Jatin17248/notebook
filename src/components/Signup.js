import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const host = "http://localhost:4000";

const Signup = () => {
  const [credentials, setCredentials] = useState({name: "", email: "", mpassword: "", cpassword: ""});
  const [formTouch, setFormTouch] = useState(false);
  const handleChange = (e) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value});
      setFormTouch(true);
  }
  let navigate = useNavigate();
  const handleSignup = async(e) =>{
      e.preventDefault();
      const url = `${host}/api/auth/createuser`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          "name": credentials.name,
           "email": credentials.email,
          "password": credentials.mpassword
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let loginResponse = await response.json();
      if(loginResponse.success){
        localStorage.setItem("token", loginResponse.authToken);
        navigate("/");
    }
  }
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center p-2'>
<form className="p-5 border rounded my-2" method="post" style={{width: "40vw"}}onSubmit={handleSignup}>
  <h2>Sign Up</h2>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input onChange={handleChange} type="text" className="form-control" id="name" name="name" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="mpassword" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
    <input name="cpassword" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword2" required/>
  </div>
 {formTouch && ( <div id="emailHelp" className="form-text">
    {credentials.mpassword === ""?<p></p>:(credentials.cpassword === credentials.mpassword ?<p className='text-success'>&#10004; Password and Confirm Password Are Same!</p>:<p className='text-danger'>&#10006;Password and Confirm Password Are Not Same!</p>)}
  {credentials.email === ""?(<p className='text-danger lh-1'>&#10006;Email Can't Be Blank!!</p>):<p></p>}
{credentials.name === ""?(<p className='text-danger lh-1'>&#10006;Name Can't Be Blank!!</p>):<p></p>}
{credentials.mpassword === ""?(<p className='text-danger lh-1'>&#10006;Password Can't Be Blank!!</p>):<p></p>}
{!(credentials.name.length >= 3)?(<p className='text-danger lh-1'>&#10071;Name Should be of Minimum 3 Characters!!</p>):<p></p>}
{!(credentials.mpassword.length >= 6)?(<p className='text-danger lh-1'>&#10071;Password Should be of Minimum 6 Characters!!</p>):<p></p>}  
  </div>)}
  <div className="mb-3 ">
  <button disabled={credentials.name.length < 3 || credentials.mpassword.length < 6 || credentials.email === "" || credentials.name === "" || credentials.mpassword === "" || credentials.cpassword !== credentials.mpassword} type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

    </div>
  )
}

export default Signup
