import React, { useState } from 'react'
import axios from 'axios'
export default function HttpPost() {
  const [userName, createUser] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { userName: userName }
    try {
      const res = await axios.post('http://localhost:8090/json-age', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="container mt-2">
      <h2>React HTTP Post Request Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  )
}