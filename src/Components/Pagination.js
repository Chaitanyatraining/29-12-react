import React, { Component } from 'react'

class Pagination extends Component {
  state = {
    usersData: [],
    pageNumber: 0
  }

  componentDidMount() {
    this.getUsersData()
  }

  getUsersData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, {
      method: "GET",
      headers: {
        "app-id": "633e33e98efd49504c9c7643"
      }
    })
    const { data } = await response.json()
    this.setState({ usersData: data })
    console.log(data)
  }

  handleButtonClick = (num) => {
    this.setState({pageNumber: num})
  }

  componentDidUpdate(prevsProps, prevsState){
    // infinite api loop 
    // update stategy
    //when the state or props is updated (componentDidUpdate will be called)
    if(prevsState.pageNumber != this.state.pageNumber){
        this.getUsersData()
    }
  }

  componentWillUnmount(){
    
  }

  render() {
    return (
      <div>
        <h2>Pagination</h2>

        <div className='row container'>
          {
            this.state.usersData.length ? (this.state?.usersData.map((user) => (
              <div className='col-md-6 mt-3'>
                <div className='card p-3'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img src={user.picture} className='img-fluid' style={{ height: '100px' }} />
                    </div>
                    <div className='col-md-8'>
                      <p>{user.id}</p>
                      <h6>{user.title} {user.firstName}{user.lastName}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))) : <img src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" />
          }
        </div>

          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button className='btn btn-primary me-2 my-3'
            onClick={() => this.handleButtonClick(num)}
            >{num}</button>
          ))}
      </div>
    )
  }
}

export default Pagination