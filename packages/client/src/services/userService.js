const userList = [{
    id:1,
    username:'a@a.com',
    password:'jack',
    name:'Jack'
},
{
    id:2,
    username:'b@a.com',
    password:'Ram',
    name:'Benito'
},{
    id:3,
    username:'c@a.com',
    password:'Lee',
    name:'Lee'
},
{
    id:4,
    username:'d@a.com',
    password:'Ben',
    name:'Ben'
},
{
    id:5,
    username:'e@a.com',
    password:'benito',
    name:'Casey'
},
{
    id:6,
    username:'f@a.com',
    password:'benito',
    name:'Pat'
}]
    

export function getUser(id){
    if (id) {
        const user  = userList.find(user => user.id === parseInt(id));;
        return user;
    } else{
        return {};
    }
}

export function getName(id){
    if (id) {
        const user  = userList.find(user => user.id === parseInt(id));;
        return user.name;
    } else{
        return '';
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
        console.log(userList.length)
        user.id = userList.length + 1 ;
        userList.push(user)
        console.log(userList);
        console.log(userList.length)
        return window.btoa(JSON.stringify(user));
    } else {
        return null;
    }
}