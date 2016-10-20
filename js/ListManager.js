
module.exports = class ListManager {

    constructor() {
        this.lists = [];
    }

    add({list:list}){
        this.lists.push(list)
    }
}
