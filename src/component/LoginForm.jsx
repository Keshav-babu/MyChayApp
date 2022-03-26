import { useState } from "react";
import axios from "axios";

const ProjectID="c8216b7b-ad64-4289-82a2-c1aed23818e7"
export const Login=()=>{
    const [userName,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObject={"Project-ID":ProjectID,"User-Name":userName,"User-Secret":password}

        try{
            //username/password=>chatengine->give message
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            //workd out->login
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
            
        }catch(err){
            setError('Oops, incorrect credentials.');
        }
        
        //error->try with new username
    }
        return (
            <div className="wrapper" >
                <div className="form">
                    <h1 className="title">Chat Application</h1>
                    <form onSubmit={handleSubmit}>
                            <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Inter user Name" required/>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Inter Password" required/>
                            <div >
                                <button type="submit" className="button" >
                                    <span>Start Chating</span>
                                </button>
                            </div>
                    </form>
                    <h1>{error}</h1>
                    
                </div>
            </div>
        )
}