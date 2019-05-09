import React from "react"
import styled from "styled-components"
import Wave from "./Wave"

const Section = props => <SectionGroup id="section2" />

export default Section

const SectionGroup = styled.div`
  background: #afc2d5;
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: -30px;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionTitleGroup = styled.div`
  margin-top: 20px;
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 40px;
  line-height: 1.2;
`

const SectionText = styled.p`
  color: white;
`
