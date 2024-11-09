import { useForm } from 'react-hook-form'
import axios from "axios"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'

const Journal = () => {
  const currentUser = useSelector(state => state?.user?.currentUser)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: ""
    }
  })
  const navigate = useNavigate()
  const [journals, setJournals] = useState([])
  useEffect(()=>{
    axios.post("/api/v1/journal/recent",{
      userId: currentUser?._doc?._id
    }).then(response => {
      console.log(response)
      // setJournals()
    }).catch(error => console.error(error))
  },[])

  if (!currentUser)
    return navigate("/")
  return (
    <div className="container mb-8 mx-auto mt-8 max-w-2xl p-6 bg-gradient-to-r from-blue-50 via-teal-100 to-slate-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Journal Entry</h1>
      <form onSubmit={handleSubmit(formData=>{
        axios
        .post("/api/v1/journal/create", {
          userId: currentUser?._doc?._id,
          content: formData.content
        })
        .then(()=>alert("Journal saved successfully"))
        .catch(error => console.error(error.message))
      })} className="mb-10">
        <textarea
          {...register("content", { required: true })}
          className="w-full h-48 p-4 text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none placeholder-gray-400 shadow-sm"
          placeholder="Speak up your thoughts..."
        />
        <button
          type="submit"
          className="w-full bg-[rgb(16,20,61)] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition duration-200 shadow-md"
        >
          Save Entry
        </button>
      </form>
    </div>
  )
}

export default Journal