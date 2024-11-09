import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "./Input"

const AuthForm = () => {
    const { register, handleSubmit, setValue, formState } = useForm({
		defaultValues: {
			username: "",
			email: "",
			password: "",
		}
	})
    const { errors } = formState
    
  return (
    <form noValidate onSubmit={handleSubmit(formData=>{
        console.log(formData)
        setValue("username","")
        setValue("email","")
        setValue("password","")
    })}>
        <div className='flex flex-col gap-1'>
            <Input
                label='Name'
                type='text'
                {...register("name", {
                    required: {
                        value: true,
                        message: "This is a required field",
                    }
                })}
            />
            <p className='text-red-600'>{errors.name?.message}</p>
        </div>
        <div className='flex flex-col gap-1'>
            <Input
                label='Email'
                type='email'
                {...register("email", {
                    required: {
                        value: true,
                        message: "This is a required field",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid Email",
                    },
                })}
            />
            <p className='text-red-600'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col gap-1'>
            <Input
                label='Password'
                type='password'
                placeholder='••••••••'
                {...register("password", {
                    required: {
                        value: true,
                        message: "This is a required field",
                    }
                })}
            />
            <p className='text-red-600'>{errors.password?.message}</p>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AuthForm