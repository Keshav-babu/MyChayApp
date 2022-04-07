import { useState } from 'react';
import { Link } from 'react-router-dom';

const private_key="5c161fa8-30c1-41c1-84d1-88a64e87277f"
var axios = require('axios');

export const Signin=()=>{
    const [name,setName]=useState('')
    const [secret,setSecret]=useState('')



    const handleSubmit=()=>{
        var data = {
	    "username": name,
	    "secret": secret,
	    "email": "",
	    "first_name": "",
	    "last_name": ""
        };
        var config = {
	        method: 'post',
	        url: 'htps://api.chatengine.io/users/',
	        headers: {
		    'PRIVATE-KEY':private_key
	        },
	        data : data
        };

        try {
            axios(config)
            .then(function (response) {
	        console.log(JSON.stringify(response.data));
            })
            
        } catch (error) {
            console.log("Error",error);
            
        }
        console.log(name,secret)
    }
    return (
        <div>

            

            
            <div className="wrapper">
                <div className="form">
                    <h1 className="title">Sigin to Chat Application</h1>
                    <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Username' value={name} className="input" onChange={(e)=>setName(e.target.value)} />
                            <input type="password" placeholder='password' className="input" value={secret} onChange={(e)=>setSecret(e.target.value)}/>
                            <input type='email' placeholder='Email id' className="input" onChange={()=>{}} />
                            <div >
                                <button type="submit" className="input" >
                                    {/* <span>SignUp</span> */}
                                    <Link style={{textDecoration:'none'}} to="/login"> SignUp</Link>
                                </button>
                                
                            </div>
                            Already have an Account? <Link style={{color:"white"}} to="/login">Login</Link>
                    </form>
                    {/* <h3>{error}</h3>
                     */}
                </div>
            </div>
        </div>
    )
}