import { useState } from "react"
import ChallengeForm from "../components/ChallengeForm"
import ChallengeList from "../components/ChallengeList"


const ChallengesPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [refresh, setRefresh] = useState(false)

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ChallengeForm
        selected={selectedChallenge}
        onSuccess={() => {
          setRefresh(!refresh)
          setSelectedChallenge(null)
        }}
        onCancel={() => setSelectedChallenge(null)}
      />
      <ChallengeList
        key={refresh} // refresh list on form submit
        onEdit={(challenge) => setSelectedChallenge(challenge)}
      />
    </div>
  )
}

export default ChallengesPage
