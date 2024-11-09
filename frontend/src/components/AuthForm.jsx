import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "./Input"
import { useState } from "react"

const AuthForm = () => {
    const { register, handleSubmit, setValue, formState } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    })
    const { errors } = formState
    const [isLoginForm, setIsLoginForm] = useState(true)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                noValidate 
                onSubmit={handleSubmit(formData => {
                    console.log(formData)
                    setValue("username", "")
                    setValue("email", "")
                    setValue("password", "")
                })}
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">{isLoginForm ? "Log In" : "Register"}</h2>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Input
                            label="Name"
                            type="text"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "This is a required field",
                                }
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.username && (
                            <p className="text-sm text-red-600">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <Input
                            label="Email"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "This is a required field",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Enter a valid email",
                                },
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "This is a required field",
                                }
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full mt-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                    Submit
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    {
                        isLoginForm ?
                        <>
                            <span>
                                Don't have an account?{" "}
                            </span>
                            <button to="/signup" className="text-blue-600 hover:underline" onClick={(e)=>{
                                e.preventDefault()
                                setIsLoginForm(false)
                            }}>Sign Up</button>
                        </>
                        :
                        <>
                            <span>
                                Already have an account?{" "}
                            </span>
                            <button to="/signup" className="text-blue-600 hover:underline" onClick={(e)=>{
                                e.preventDefault()
                                setIsLoginForm(true)
                            }}>Log In</button>
                        </>
                    }
                    
                </p>
            </form>
        </div>
    )
}

export default AuthForm
