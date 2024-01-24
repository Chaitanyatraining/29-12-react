import React, {useState, useEffect} from 'react'
import { ChevronLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const UseEffectHook = () => {
    const [usersData, setUsersData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        // This is similar to componentDidMount and componentDidUpdate
       getUsersData()

    //    return{
        
    //    }
    }, [pageNumber])

    const handlegoBack = () => {
        navigate(-1)
    }

    const getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, {
          method: "GET",
          headers: {
            "app-id": "633e33e98efd49504c9c7643"
          }
        })
        const { data } = await response.json()
        setUsersData(data)
    }

  return (
    <div>
        <div className='d-flex justify-space-around align-items-center'>
        <ChevronLeft size={25} onClick={()=>handlegoBack()} />
        <h2>UseEffectHook</h2>
        </div>
        <div className='row container'>
          {
            usersData?.length ? (usersData?.map((user) => (
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
            onClick={() => setPageNumber(num)}
            >{num}</button>
          ))}
    </div>
  )
}

export default UseEffectHook