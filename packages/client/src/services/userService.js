const userList = [{
    id:1,
    username:'a@a.com',
    password:'benito',
    name:'Benito'
}]
    

export function getUser(id){
    if (id) {
        const user  = userList.find(user => user.userId === parseInt(id));;
        return user;
    } else{
        return {};
    }
}

export function authUser(username,password){
    let found = userList.some(function (userObj) {
        return userObj.username === username && userObj.password === password;
    });
    var user = userList.filter(user => {
        return user.username === username
      })
    if (found){
        return window.btoa(JSON.stringify(user[0]));
    } else{
        return 'denied'
    }
}

export function addUser(user){

    let found = userList.some(function (userObj) {
        return userObj.username === user.username;
    });
    if (!found) { 
        userList.push(user)
        return window.btoa(JSON.stringify(user));
    } else {
        return null;
    }
}