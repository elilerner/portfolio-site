//import { Link } from "gatsby"
import React from "react"
import "./Header.css"
import { Link } from "react-scroll"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
      isDarkMode: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleDarkMode() {
    console.log(this.state.isDarkMode + "hello")
    this.setState({ isDarkMode: !this.state.isDarkMode })
    this.state.isDarkMode = !this.state.isDarkMode
    console.log(this.state.isDarkMode + "hello")
    document.body.style.background = this.state.isDarkMode
      ? "#212c4f"
      : "#AFC2D5"
    document.getElementById("Hero").style.background = this.state.isDarkMode
      ? "linear-gradient(90deg, rgba(57, 57, 57, 0.84375) 0%, rgba(56, 56, 56, 0.84375) 0.52%, rgba(41, 41, 41, 0.84375) 24.72%, rgba(35, 36, 35, 0.84375) 45.84%, rgba(24, 24, 24, 0.84375) 64.28%, rgba(17, 17, 17, 0.84375) 82.13%, rgba(4, 4, 4, 0.84375) 97.3%)"
      : "linear-gradient(105.74deg, #fbed96 8.49%, #abecd6 91.84%)"
    document.getElementById("Hero").style.transition = this.state.isDarkMode
      ? "all 3s ease-in"
      : "all 3s ease-in"
    document.getElementById("svg-fill").style.fill = this.state.isDarkMode
      ? "#212c4f"
      : "#AFC2D5"
    document.getElementById("mainTitle").style.color = this.state.isDarkMode
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.8)"
    document.getElementById("mainText").style.color = this.state.isDarkMode
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.8)"
    document.getElementById("section2").style.color = this.state.isDarkMode
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.8)"
    // document.getElementById("cardSection").style.background = this.state
    //   .isDarkMode
    //   ? "#212c4f"
    //   : "#f0f3f5"
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link
            class="nav-item0"
            activeClass="active"
            to="section0"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img width="80" src={require("../images/Frame1.svg")} />
          </Link>
          <Link
            class="nav-item1"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            class="nav-item2"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
          <Link
            class="nav-item3"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
          <button
            id="darkModeButton"
            onClick={event => this.toggleDarkMode(event)}
          >
            <span class="icon">{this.state.isDarkMode ? "☀" : "☾"}</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Header
