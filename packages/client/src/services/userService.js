const userList = [{
    id: 1,
    username: 'a@a.com',
    password: 'jack',
    name: 'Jack'
},
{
    id: 2,
    username: 'b@a.com',
    password: 'Ram',
    name: 'Benito'
}, {
    id: 3,
    username: 'c@a.com',
    password: 'Lee',
    name: 'Lee'
},
{
    id: 4,
    username: 'd@a.com',
    password: 'Ben',
    name: 'Ben'
},
{
    id: 5,
    username: 'e@a.com',
    password: 'benito',
    name: 'Casey'
},
{
    id: 6,
    username: 'f@a.com',
    password: 'benito',
    name: 'Pat'
}]

function getUserList (){
    const localUserList = JSON.parse(localStorage.getItem('userList'));
    let data = [];
    if (localUserList){
        data = [ ...localUserList];
    } else{
        data = [ ...userList];
    }
    return data
}


export function getUser(id) {
    let data = getUserList();
    if (data){
        if (id) {
            const user = data.find(user => user.id === parseInt(id));;
            return user;
        } else {
            return {};
        }
    }
}

export function getName(id) {
    let data = getUserList();
    console.log(data);
    if (data){
        if (id) {
            const user = data.find(user => user.id === parseInt(id));;
            return user.name;
        } else {
            return '';
        }
    }
}

export function authUser(username, password) {

    let data = getUserList();

    if (data){
        let found = data.some(function (userObj) {
            return userObj.username === username && userObj.password === password;
        });
        var user = data.filter(user => {
            return user.username === username
        })
        if (found) {
            return window.btoa(JSON.stringify(user[0]));
        } else {
            return 'denied'
        }
    }
}

export function addUser(user) {

    let data = getUserList();

    if (data){
        let found = data.some(function (userObj) {
            return userObj.username === user.username;
        });
        if (!found) {
            user.id = data.length + 1;
            data.push(user)
            localStorage.setItem('userList', JSON.stringify(data));
            return window.btoa(JSON.stringify(user));
        } else {
            return null;
        }
    }

}