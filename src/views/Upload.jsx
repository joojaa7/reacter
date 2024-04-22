import { useState } from "react"
import { Link } from "react-router-dom"

const baseApiUrl = "http://127.0.0.1:3000"

const Upload = () => {
  const [file, setFile] = useState(null)
  const [name, setName] = useState("")
  const [apiResult, setApiResult] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // clear possible previous api result
    setApiResult(null)

    console.log("file", file)
    console.log("name", name)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", name)

    // send local state values (name, file) to a backend
    const response = await fetch(`${baseApiUrl}/post-test`, {
      method: "post",
      body: formData
    })

    const result = await response.json()

    console.log("result", result)

    setApiResult(result)
  }

  return <>
  {apiResult !== null && <div>
    <img src={`${baseApiUrl}/${apiResult.file.path}`} />
    </div>}
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="tiedosto"
        onChange={(event) => {
          setApiResult(null)
          console.log("event", event)
          setFile(event.target.files[0])
        }}
      /><br />

      {file !== null &&
        <p>
          Preview:<br />
          <img src={URL.createObjectURL(file)} />
        </p>
      }

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(event) => {
          setApiResult(null)
          setName(event.target.value)
        }}
      />
      <button
        className="
          m-3 mt-0
          p-3
          rounded-lg
          bg-blue-400 text-white
        "
        type="submit"
      >Upload file</button>
    </form>

    <p className="mt-12">
      <Link to="/">Back to home</Link>
    </p>
  </>
}


export default Upload
