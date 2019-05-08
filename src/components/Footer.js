import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>
      Thanks for checking out my work. Feel free to contact me by email if you
      want to get in touch!
    </Text>
    <Button>Send me an email</Button>
    <LinkGroup>
      <Link
        class="nav-item"
        activeClass="active"
        to="section0"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Back to top
      </Link>
    </LinkGroup>
    <Copyright>{children}</Copyright>
  </FooterGroup>
)

export default Footer

let FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  justify-content: center;
`

const Button = styled.button`
  font-size: 24px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  a {
    color: #5334f5;
    font-size: 20px;
    font-weight: 500;
    margin: 5px 0;
    transition: 1s;
  }

  a:hover {
    color: black;
  }
`
const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
