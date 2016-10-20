
const remote = require('electron').remote
const storage_path = './storage.json'

let json_obj = util.load_json({file_path:storage_path});
let data_model = new DataModel();

data_model.parse({json_obj:json_obj});

// console.log(json_obj);

var list_manager = new ListManager("Benjamin")

console.log("FINISHED");
