import React from 'react'
import { HeartPulseIcon } from 'lucide-react/dist/cjs/lucide-react'
import { useParams } from 'react-router-dom'

export default function MeditationDetail() {
  const data = new Map()
  data.set(1, {
    title: "Yoga", subtitle: "Patanjali Rishi", imgSrc: "", content: "Hey there I am doing Yoga"
  })
  data.set(2, {
    title: "", subtitle: "", imgSrc: "", content: ""
  })
  data.set(3, {
    title: "", subtitle: "", imgSrc: "", content: ""
  })

  const {id} = useParams()
  console.log(id)
  
  const obj = data.get(Number(id))
  return (
    <div className="min-h-[100vh] my-10 px-2 md:px-16">
      {/* Header */}
      <header className="flex flex-col items-start mb-10">
        <h1 className="text-4xl text-[rgb(16,20,61)] font-bold">{obj?.title}</h1>
        <p className="text-sm text-gray-500">{obj?.subtitle}</p>
      </header>

      {/* Image */}
      <div className="mt-8">
        <img src={obj?.imgSrc} alt="Meditation Image" className="w-full h-auto max-h-[45vh] object-cover rounded-xl" />
      </div>

      {/* Logo */}
      <div className="my-4 px-2">
        <HeartPulseIcon />
      </div>

      {/* Content */}
      <p className="mt-4 flex flex-col justify-center items-center">
        {obj?.content}
      </p>
    </div>
  )
}