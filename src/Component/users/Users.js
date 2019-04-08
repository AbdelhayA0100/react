import React, { Component } from 'react'
import {Consumer} from './../context';
import Liste from './../liste/Liste';
export default class Users extends Component {
  render() {
    return (
      <div>
      <Consumer>
      { value=>(
          <div>
          {value.users.map((user)=>
            <Liste data={user}/>
            )}
          </div>

      )}
       </Consumer>
      </div>
    )
  }
}
