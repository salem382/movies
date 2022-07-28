import axios from "axios";
import Joi from 'joi';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {

    const navigate = useNavigate();
    const [isPost, setIsPost] = useState (false);
    const [errArr, setErrArr] = useState([]);
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState({
        first_name:"",
	    last_name:"",
        email:"",
        password:"",
        age:""
    });

    const postData = (e) => {
        let usr = {...userData};
        usr[e.target.name] = e.target.value;
        setUserData(usr)
    }

    const submitData = async (e) => {
        e.preventDefault();
        if (userValidation().error) {
            let errs = userValidation().error.details.map(item =>item.message )
            setErrArr(errs)
        } else {
            setErrArr([]);
            setIsPost(true);
            const {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup',userData)
            data.message.includes('email already registered') ? setMsg('email already registered'): setMsg("");
            data.message.includes('success') && navigate('/login');
            setIsPost(false);
        }
    }

    const userValidation = () => {
        const schema = Joi.object({
            first_name:Joi.string().alphanum().min(3).max(10).required(),
            last_name:Joi.string().alphanum().min(3).max(10).required(),
            email:Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().min(7).max(20).required(),
            age:Joi.number().integer().min(10).max(70).required()
        })
        return schema.validate(userData,{abortEarly:false});
    }

    return (
        <form className="register mt-3" onSubmit={(e) => submitData (e)}>
            <div className="container">
                <h2 className="w-75 mx-auto mb-4">Register Form</h2>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">First Name :</label>
                    <input onChange={(e) => postData(e)} type="text" className="form-control" name="first_name"/>
                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('first_name'))}</p>
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name :</label>
                    <input onChange={(e) => postData(e)} type="text" className="form-control" name="last_name"/>
                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('last_name'))}</p>
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Age :</label>
                    <input onChange={(e) => postData(e)} type="number" className="form-control" name="age"/>
                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('age'))}</p>
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email :</label>
                    <input onChange={(e) => postData(e)} type="email" className="form-control" name="email"/>
                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('email'))}</p>
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password :</label>
                    <input onChange={(e) => postData(e)} type="password" className="form-control" name="password"/>
                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('password'))}</p>
                </div>
                <p className="w-75 mx-auto text-danger fs-3">{msg}</p>
                <button  className="btn btn-primary" style={{marginLeft:'135px'}}>
                    {isPost ? <div class="spinner-border" role="status"></div>: "Register" }
                </button>
            </div>
        </form>
    )
}

export default Register;
