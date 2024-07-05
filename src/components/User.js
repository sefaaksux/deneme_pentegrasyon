import React, { Component } from 'react'
import PropTypes from 'prop-types'



class User extends Component {


  constructor(props){
    super(props);

    this.state = {users : [
      {UserId:1,Name:"sefa",department:"IT"},
      {UserId:2,Name:"ahmet",department:"muhasebe"},
      {UserId:3,Name:"mehmet",department:"IT"}
    ],
    isVisible :false
  };
  }





  render() {
    const {isVisible,users} = this.state;
    
    return (
      <div className='col-md-8'>
        {users.map(users => (
          <div className='card'>
            <div className='card-header'>
                <h2>{users.Name}</h2>
            </div>

            <div className='card-body'>
              <p> {isVisible ? users.department : null}</p>  
            </div>
          </div>
        ))}
      </div>
    )
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  surname : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}
User.defaultProps = {
  name : "Bilgi yok",
  surname : "Bilgi yok",
  department : "Bilgi yok"
}


export default User;