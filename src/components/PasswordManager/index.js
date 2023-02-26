import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {passwordsList: [], name: '', website: '', password: ''}

  submitDetails = () => {
    this.preventDefault()
  }

  addPasswords= () =>{
      const {name, website, password}= this.state
      const userDetails= {
          name,
          password,
          website
      }

      this.setState(prevState=> {
          return ({passwordsList: ...prevState, userDetails})   //you are stopped here
      })
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({name: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {name, website, password} = this.state

    console.log(name)
    console.log(password)
    console.log(website)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app-logo"
          className="app-logo"
        />
        <div className="user-details-container">
          <div className="user-details-card">
            <h1 className="user-details-heading"> Add New Password </h1>
            <form onSubmit={this.submitDetails}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-element"
                  onChange={this.changeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-element"
                  onChange={this.changeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="input-element"
                  onChange={this.changePassword}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button" onClick= {this.addPasswords}>
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="user-details-logo"
            />
          </div>
        </div>
        <div className="user-passwords-container">
          <div className="user-passwords-navbar">
            <h1 className="user-details-heading"> Your Passwords </h1>
            <div className="user-navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon-container"
              />
              <input
                type="search"
                className="search-passwords-container"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-passwords-container">
            <input type="checkbox" id="show password" className="check-box" />
            <label htmlFor="show password" className="label-element">
              Show Passwords
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
