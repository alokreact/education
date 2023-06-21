export const adduserTolocalsotrage = (user) =>{

    localStorage.setItem('user',JSON.stringify(user));
}

export const getuserFromlocalsotrage = () =>{

    const result = localStorage.getItem('user');
    const user = result?JSON.parse(result):null;
    return user;
}