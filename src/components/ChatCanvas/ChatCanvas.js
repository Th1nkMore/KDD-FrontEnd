import { Offcanvas, Button, Form, ToastContainer, Toast, InputGroup, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import helpers from '../../utils/api'

export const ChatCanvas = ({ show, handleClose }) => {
  const [chatAva, setChatAva] = useState(true)
  const [res, setRes] = useState(null)
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [prompt, setPrompt] = useState(null)

  const handleChat = async () => {
    if (start === '' | end === '') {
      return
    }
    const newchat = {
      time: new Date().toLocaleTimeString(),
      start: start,
      end: end
    }
    setPrompt(newchat)
    await fetchData()
    setStart('')
    setEnd('')
    setChatAva(false)

  }
  const handleStartChange = (event) => {
    setStart(event.target.value)
  }
  const handleEndChange = (event) => {
    setEnd(event.target.value)
  }
  const Reset = () => {
    setPrompt(null)
    setStart('')
    setEnd('')
    setChatAva(true)
    setRes(null)
  }
  const fetchNavi = async (start, end) => {
    try {
      const startPOI = await helpers.fetchHints(start)
      const endPOI = await helpers.fetchHints(end)
      return await helpers.fetchNavi(startPOI.tips[0].location, endPOI.tips[0].location)
    } catch (error) {
      console.error('Error fetching CSV data:', error)
    }

  }
  const fetchData = async () => {
    try {
      setRes('')
      const naviResult = await fetchNavi(start, end)
      setTimeout(async () => {
        const chatText = await helpers.fetchChatResult(start, end, naviResult.route.paths[0].steps.map(obj => obj.instruction))
        var replacedString = chatText.replace(/\\n/g, '\n')
        const newRes = {
          time: new Date().toLocaleTimeString(),
          text: replacedString
        }
        setRes(newRes)
      }, 2000)



    } catch (error) {
      console.error('Error fetching CSV data:', error)
    }

  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: 'black' }}>Chat</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: 'black' }}>
          <h4 style={{ color: 'grey' }}>It takes around half a minute to get result :) </h4>
          <br />
          {chatAva ? <div className='form-wrapper' style={{ position: 'fixed', bottom: "5%" }}>
            <InputGroup className="mb-4">
              <InputGroup.Text>Prompt</InputGroup.Text>
              <Form.Control style={{ width: '100px' }} placeholder="出发点" value={start} onChange={handleStartChange} />
              <Form.Control style={{ width: '100px' }} placeholder="目的地" value={end} onChange={handleEndChange} />
              <Button variant="outline-success" onClick={handleChat}>Chat</Button>
            </InputGroup>
          </div> : <Button variant="danger" style={{ position: 'fixed', bottom: "5%" }} onClick={Reset}> Reset</Button>}
          {prompt === null ? <></> : <div>
            <ToastContainer>
              <Toast bg={'info'} style={{ position: 'relative', left: '5%' }}>
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">User</strong>
                  <small className="text-muted">{prompt.time}</small>
                </Toast.Header>
                <Toast.Body>
                  {"出发点:" + prompt.start}<br />
                  {"目的地:" + prompt.end}
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </div>}
          <br />
          {res === null ? <></> : <div>
            <ToastContainer>
              <Toast bg={'success'} style={{ position: 'absolute', left: '0%' }}>
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">ChatBot</strong>
                  <small className="text-muted">{res.time === undefined ? 'please wait' : res.time}</small>
                </Toast.Header>
                <Toast.Body>
                  {res.text === undefined ? <Spinner animation="border" variant="dark" /> : res.text}
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </div>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}