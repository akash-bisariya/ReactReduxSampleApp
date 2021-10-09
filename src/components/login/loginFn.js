import './login.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default function LoginFn() {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  axios.get("http://localhost:3000/users",{
        params:{
            username:data.username,
            password:data.password
        }
    })
    .then(function(response){
        // console.log(JSON.parse(response))
        // console.log(Array(response.data).get(0).length)
        if(response.data[0])
        history.push("/dashboard");
        else
        alert("Invalid User");
        // if(Array(response.data).length>0)
        // history.push("/dashboard");
    });

    //http://localhost:3000/users?username=json&password=1234

    return (
        <div className='form-input'>
            <h1 style={{color:'#15cdfc', textShadow:'2px 2px'}}>Bank Account Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className='form-label'>
                <input placeholder="Username" {...register("username", {
                    required: true
                }
                )} />
                {errors.username && <div className='form-error'>Please enter username.</div>}
            </div>
            <div className='form-label'>
                <input placeholder="Password" {...register("password", {
                    required: true
                }
                )} />
                {errors.password && <div className='form-error'>Please enter password.</div>}
            </div>
            <div className='form-label'>
                <input type="submit" value="Login"/>
            </div>
        </form>
        </div>
    );

}