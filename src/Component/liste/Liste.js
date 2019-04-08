import React, { Component } from 'react'
import './Liste.css' 
import {Consumer} from "./../context"
import Users from './../users/Users';
export default class Liste extends Component {
  render() {
        const {id,name , email}= this.props.data;
    return (
      
      <div class="main-content">
            <div class="title">
            <Consumer>
               {
                       value=> {
                               return 
                               (
                                        <h1>{data.id}</h1>
                               )
                       }
               }
       
                </Consumer>
                    Analytics
            </div>
      <div  class="main">
       
      <div class="table active">
      <table class="table table-hover ">
              <thead class="head-table">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">favoris</th>
                 
                </tr>
              </thead>
              <tbody>
                      <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td><span id='favoris' onclick="active()"><i class="fas fa-heart"></i></span></td>
                       </tr>
                       <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td>Mark</td>
                              <td><span><i id='favoris' onclick="active()" class="fas fa-heart"></i></span></td>
                             
                       </tr>
                     </tbody>
                 </table>
                </div>
              </div>
          </div>
      
    )
  }
}
