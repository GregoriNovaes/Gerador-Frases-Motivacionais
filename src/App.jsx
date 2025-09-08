import  ContainerLeft  from "./components/ContainerLeft.jsx"
import ContainerRight from "./components/ContainerRight.jsx"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState(() => {
    const savedPhrases = localStorage.getItem("listPhrases")
    return savedPhrases ? JSON.parse(savedPhrases) : []
  })

  useEffect(() => {
    localStorage.setItem("listPhrases", JSON.stringify(data))
  }, [data])

  function addNewPhrase(newPhrase) {

        if (data.find(p => p.id === newPhrase.id)) {
            return
        }

        setData([... data, newPhrase])
    }
  
    const removePhrase = (id) => {
      const updateListPhrases = data.filter(d => d.id !== id)

      setData(updateListPhrases)
    }

  return (
    <>
      <ContainerLeft addPhrase={addNewPhrase} />
      <ContainerRight data={data} remove={removePhrase}/>
    </>
  )
}

export default App
