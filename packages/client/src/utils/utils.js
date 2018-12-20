
import {getPrice} from '../services/bidingService'
import {getName} from '../services/userService'
import {getProject} from '../services/projectService' 


export function getCurrentUser(){
    const authToken = localStorage.getItem('authToken');
    let userObj = window.atob(authToken)
    const user = JSON.parse(userObj);
    console.log(user)
    return user;
}

export function getQuote(projectId) {
    const price = getPrice(projectId);
    if (price && price >0){
      console.log(price);
      return price
    } else{
      return '--'
    }
}

export function getUserName(userId) {
    const name = getName(userId);
    if (name && name.length >0){
      console.log(name);
      return name
    } else{
      return '-'
    }
}

export function getProjectDetails (projectId){
    /*const api_call = await fetch(`/api/search/${id}`);
    const data = await api_call.json();*/
    //const id = this.props.id;
    const data = getProject(projectId);
    return data;
  }