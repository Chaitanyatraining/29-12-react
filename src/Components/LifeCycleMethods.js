import React, { Component } from 'react'

class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log('constructor executed')
    }
    state = {
        usersData: []
    }
    componentDidMount(){
        this.getUsersData()
    }

    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({usersData: data})
        console.log(this.state)
    }

    static getDerivedStateFromProps(){
        console.log('static getDerivedStateFromProps executed')
        return null
    }

  render() {
    console.log('render executed')
    
    return (
      <div>
        <h2>LifeCycleMethods</h2>
        {
            
        }
      </div>
    )
  }
}

export default LifeCycleMethods