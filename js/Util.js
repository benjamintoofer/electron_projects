
const fs = require('fs');


exports.load_json = function({file_path:path}) {
    console.log('Load JSON: '+path);
    return __read_file({path_of_file:path,create:true});
}

exports.save_json = function () {
    console.log('Save JSON');
}

/*
Private Methods
*/

/*
*
*/
function __read_file({path_of_file:path,create:create}){

    console.log(path);
    if(fs.existsSync(path)){
        return JSON.parse(fs.readFileSync(path));
    }

    if(create){
        console.log("Created File: "+path );
        fs.closeSync(fs.openSync(path, 'w'));

    }else{
        console.log("doesnt exist");
    }


    // fs.readFile(path,(err,data)=>{
    //     if (err){
    //
    //         if (create) {
    //             console.log("Created File: "+path );
    //             fs.closeSync(fs.openSync(path, 'w'));
    //         }else{
    //             console.log("doesnt exist");
    //         }
    //
    //         return null;
    //     }
    //     console.log("RETURNING ---- "+data);
    //     return JSON.parse(data);
    // });
}
