import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="Hero" id="Hero">
      <div id="section0" className="HeroGroup">
        <h1 id="mainTitle">
          I'm Eli Lerner <br />
        </h1>
        <p id="mainText">A designer & front-end developer</p>
        <a href="https://zety.com/mycv/elilerner">View My Online Resume</a>
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div id="section1" className="Cards">
      <h2>5 Projects, more coming</h2>
      <a href="https://github.com/elilerner">View On Github</a>
      <div className="CardGroup">
        <Card
          title="iPhone UI"
          text="React Native"
          image={require("../images/ReactNativeProject.png")}
          bg={require("../images/bg5.png")}
        />
        <Card
          title="iPhone Prototype"
          text="Framer X + React"
          image={require("../images/FramerXProject.png")}
          bg={require("../images/bg3.png")}
        />
        <Card
          title="IOS Weather App"
          text="Swift"
          image={require("../images/IOSSwiftProject.png")}
          bg={require("../images/bg4.png")}
        />
        <Card
          title="Fitness Tracker"
          text="JS, PHP, SQL"
          image={require("../images/FitnessTrackerProject.png")}
          bg={require("../images/bg1.png")}
        />
        <Card
          title="iWatch Home UI"
          text="Figma"
          image={require("../images/FigmaProject.png")}
          bg={require("../images/bg2.png")}
        />
      </div>
    </div>
    <SectionCaption id="section2">Skills</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell class="Cell" title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
    <Footer id="section3" />
  </Layout>
)

export default IndexPage

const SectionCaption = styled.p`
  margin-top: 150px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
