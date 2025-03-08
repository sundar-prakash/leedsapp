"use client"

import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simple validation
    if (!name || !email || !subject || !message) {
      setSubmitMessage("Please fill in all fields.")
      setIsSubmitting(false)
      return
    }

    // Simulate successful submission
    setSubmitMessage("Message sent successfully!")
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED3059] focus:border-transparent"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED3059] focus:border-transparent"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED3059] focus:border-transparent"
            required
          />
        </div>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED3059] focus:border-transparent min-h-[150px]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#ED3059] text-white py-2 px-4 rounded-md hover:bg-[#D62A50] focus:outline-none focus:ring-2 focus:ring-[#ED3059] focus:ring-opacity-50 transition duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitMessage && (
          <p className={`text-center ${submitMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {submitMessage}
          </p>
        )}
      </div>
    </form>
  )
}

