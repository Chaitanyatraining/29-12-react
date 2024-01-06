import React, { Component } from 'react'
import './styles.css'
import primaryButton from './primarybtn.module.css'

class StylingsComp extends Component {
  render() {
        // Inline
        // Internal
        // External
        // Module Css
        const intStyles = {
            btnStyles:{
                color:'white',
                backgroundColor:'orange',
                border:'0px',
                padding:'10px',
            },
            btnSubmit:{
                color:'white',
                backgroundColor:'lightgreen',
                border:'0px',
                padding:'10px',
                fontSize:'15px',
                marginLeft:'10px'
            }
        }
    return (
      <div>
        <h2>StylingsComp</h2>
        <h3 style={{backgroundColor:'lightblue', color:'white'}}>This is Inline Stylings</h3>
        <button style={intStyles.btnStyles}>Internal btn</button>
        <button style={intStyles.btnSubmit}>Submit btn</button>
        <p className={primaryButton.primaryBtn}>This is External Styles</p>
        <button className={primaryButton.primaryBtn}>primary Btn</button>
        <button className={primaryButton.searchbar}>searchbar Btn</button>
      </div>
    )
  }
}

export default StylingsComp