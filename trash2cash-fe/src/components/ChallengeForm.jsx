import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import axios from "axios"

const defaultData = {
  name: "",
  description: "",
  goal: "",
  reward_coins: "",
  start_date: "",
  end_date: "",
}

const ChallengeForm = ({ selected, onSuccess, onCancel }) => {
  const [form, setForm] = useState(defaultData)

  useEffect(() => {
    if (selected) setForm(selected)
    else setForm(defaultData)
  }, [selected])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selected?.id) {
      await axios.put(`/api/challenges/${selected.id}`, form)
    } else {
      await axios.post("/api/challenges", form)
    }
    onSuccess()
    setForm(defaultData)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-2xl p-6 mb-4"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-xl font-bold mb-4">{selected ? "Edit" : "Tambah"} Challenge</h2>
      {["name", "description", "goal", "reward_coins", "start_date", "end_date"].map((field) => (
        <div key={field} className="mb-3">
          <label className="block font-medium capitalize mb-1">{field.replace("_", " ")}</label>
          <input
            type={field.includes("date") ? "date" : "text"}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full border rounded-xl p-2"
            required
          />
        </div>
      ))}
      <div className="flex justify-end gap-2 mt-4">
        <button type="button" onClick={onCancel} className="text-gray-500">Batal</button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
          {selected ? "Update" : "Tambah"}
        </button>
      </div>
    </motion.form>
  )
}

export default ChallengeForm
