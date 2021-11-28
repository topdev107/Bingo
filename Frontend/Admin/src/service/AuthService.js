export function isLoggedin() {
    let token = JSON.parse(localStorage.getItem("bingo_user")).token;
    if (token == undefined) return false;
    return true;
}

export function getUsername() {
    let username = JSON.parse(localStorage.getItem("bingo_user")).username;
    return username;
}