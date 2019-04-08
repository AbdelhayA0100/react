import React, { Component } from 'react';


const Context =React.createContext();


export  class Provider extends Component {
    state={
        users:[{id:1 ,name:"Mohammed",Email:"Mohammed@gmail.com"}
        ,
        {id:2 ,name:"Kamal",Email:"Kamal@gmail.com"}]
    }
  render() {

    return (
      <div>
      <Context.Provider value={this.state}>
            {this.props.children}
      </Context.Provider>
      </div>
    )
  }
}
export const Consumer =Context.Consumer;
