
module.exports = class DataModel {
    constructor() {

        this.list_manager = []
    }

    parse({json_obj:obj}){

        this.list_manager = new ListManager();

        //List Category
        for (var item in obj) {

            let new_list = {}
            new_list[item] = {}
            console.log("BEN! "+item)
            console.log("JIM "+new_list)
            let pointer_read = obj[item]
            let pointer_write = new_list[item]

            if (obj.hasOwnProperty(item)){

                //Iterate though all the list items
                for (var list_item in pointer_read.Lists){
                    if (pointer_read.Lists.hasOwnProperty(list_item)) {
                        pointer_write[list_item] = {}
                        // console.log("LIST TO ADD "+list_to_add);
                        for (var variable in pointer_read[list_item]) {
                            if (object.hasOwnProperty(variable)) {

                            }
                        }
                    }
                }
            }
            this.list_manager.add({list:new_list})
            // console.log(new_list)
        }

        console.log(this.list_manager);

    }
}
