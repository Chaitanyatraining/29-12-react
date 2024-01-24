import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [admin, setAdmin] = useState(true)
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand">
            <img src='https://www.achieversit.com/assets/images/logo-white.png' />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <Link to="/listsandkeys" class="nav-link">ListsandKeys</Link>
              </li>
              <li class="nav-item">
                <Link to='/funcComponent' class="nav-link">FuncComp</Link>
              </li>
              <li class="nav-item">
                <Link to='/lifecyclemethods' class="nav-link">LifeCycleMethods</Link>
              </li>
              <li class="nav-item">
                <Link to='/Pagination' class="nav-link">Pagination</Link>
              </li>
              <li class="nav-item">
                <Link to='/contactus' class="nav-link">ContactUs</Link>
              </li>
              <li class="nav-item">
                <Link to='/usestatehook' class="nav-link">usestatecounter</Link>
              </li>
              <li class="nav-item">
                <Link to='/useeffecthook' class="nav-link">useEffectHook</Link>
              </li>
              {/* {
                admin ? (
                  <button class="nav-item btn btn-warning" 
                  onClick={()=> setAdmin(false)}
                  >
                    <Link to='/usestatehook' class="nav-link">Admin</Link>
                  </button>
                ) : null
              } */}
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header