export function isLoggedin() {
    let token = localStorage.getItem("bingo_token");
    if (token == undefined) return false;
    return true;
}