import './login.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../actions/allActions';

export default function LoginFn() {

    // const counter = useSelector(state => state.counter)
    const currentUser = useSelector(state => state.currentUser)

    const dispatch = useDispatch()


    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => axios.get("http://localhost:3000/users", {
        params: {
            username: data.username,
            password: data.password
        }
    })
        .then(function (response) {
            if (response.data[0]) {
                console.log(response.data[0])
                dispatch(allActions.userActions.setUser(response.data[0]))
                history.push("/dashboard");
            }
            else
                alert("Invalid User");
            // if(Array(response.data).length>0)
            // history.push("/dashboard");
        });

    //http://localhost:3000/users?username=json&password=1234

    return (
        <div className='form-input'>
            <h1 style={{ color: '#15cdfc', textShadow: '2px 2px' }}>{currentUser.username}</h1>
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
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );

}