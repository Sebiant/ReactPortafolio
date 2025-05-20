import { useState, type ChangeEvent, type FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Mensaje enviado:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer
      id='Contacto'
      className="w-full min-h-screen bg-no-repeat bg-center overflow-x-hidden relative flex flex-col items-center px-4"
      style={{
        backgroundImage: "url('/backgraund_footer.webp')",
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1c1f2b",
      }}
    >
<div className="mt-auto mb-8 w-[min(100%,32rem)] bg-[#1c1f2b] text-white p-6 rounded-xl shadow-xl border border-zinc-700">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contáctame</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-zinc-800 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-zinc-800 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-zinc-800 focus:outline-none"
            rows={5}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
          >
            Enviar
          </button>
          {submitted && (
            <p className="text-green-400 text-center mt-2">Mensaje enviado ✅</p>
          )}
        </form>
      </div>
    </footer>
  )
}

export default Footer
