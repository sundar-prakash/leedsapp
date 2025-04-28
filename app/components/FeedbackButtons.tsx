'use client'

import {useState} from 'react'

export default function FeedbackButtons({ slug, title }: { slug: string; title: string }) {
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = async (type: 'helpful' | 'notHelpful') => {
    if (submitted) return
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({slug, type, title}),
      })

      if (response.ok) setSubmitted(true)
    } catch (error) {
      console.error('Feedback error:', error)
    }
  }

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => handleFeedback('helpful')}
        disabled={submitted}
        className="flex items-center p-4 border border-green-300 hover:border-green-500 text-green-700 text-sm font-medium rounded-full disabled:opacity-50"
      >
        {submitted ? '✅ Thanks!' : '👍 Helpful'}
      </button>
      <button
        onClick={() => handleFeedback('notHelpful')}
        disabled={submitted}
        className="flex items-center p-4 border border-red-300 hover:border-red-500 text-red-700 text-sm font-medium rounded-full disabled:opacity-50"
      >
        {submitted ? '✅ Thanks!' : '👎 Not Helpful'}
      </button>
    </div>
  )
}
