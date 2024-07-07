import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const UserDetails = () => {
    const context = useContext(noteContext);
    const {getUser, user} = context;
   
      useEffect(() => {
        getUser();
           // eslint-disable-next-line
      }, []);
  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
        
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
          <h2 className='mb-4'>User Details</h2>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Unique User Id</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user._id}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Date of Account Creation</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.date}</p>
              </div>
            </div>
            <hr/>
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default UserDetails
