"use client"

import { registerUser } from "@/app/actions/auth/registerUser";

const RegisterPage = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        // const email = form.email.value;
        const password = form.password.value;
        const payload = {username,password};
        // console.log(name,email,password)
        const result = await registerUser(payload);
        console.log(result);

    }
    return (
        <div className="text-center w-1/2 mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name='username' placeholder='name' />
                {/* <input type="email" name='email' placeholder='email' className="text-black" /> */}
                <input type="password" name='password' placeholder='password' className="text-black" />
                <button className="">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;