import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Trash2, Pencil } from "lucide-react"
import axios from "axios"

const ChallengeList = ({ onEdit }) => {
  const [challenges, setChallenges] = useState([])

  const fetchChallenges = async () => {
    const res = await axios.get("/api/challenges")
    setChallenges(res.data.data)
  }

  const handleDelete = async (id) => {
    await axios.delete(`/api/challenges/${id}`)
    fetchChallenges()
  }

  useEffect(() => {
    fetchChallenges()
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4">
      <h2 className="text-xl font-bold mb-4">Daftar Challenge</h2>
      <div className="grid gap-4">
        {challenges.map((ch) => (
          <motion.div
            key={ch.id}
            className="bg-white rounded-2xl shadow p-4 flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="font-semibold text-lg">{ch.name}</h3>
              <p className="text-sm">{ch.description}</p>
              <p className="text-xs text-gray-500">Goal: {ch.goal}, Reward: {ch.reward_coins} coins</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onEdit(ch)}>
                <Pencil className="text-blue-500 hover:text-blue-700" />
              </button>
              <button onClick={() => handleDelete(ch.id)}>
                <Trash2 className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ChallengeList
