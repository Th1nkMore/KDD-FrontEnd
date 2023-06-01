import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
export const NavBar = ({ handleShow }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function simulateNetworkRequest () {
    return new Promise((resolve) => setTimeout(resolve, 250))
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''} bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">KDD</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Micro">Micro</Nav.Link>
          <Nav.Link href="#Macro">Macro</Nav.Link>
          <Button style={{ position: "absolute", right: "10%" }} onClick={handleShow}>Chat</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
