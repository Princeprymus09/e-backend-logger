var mongoose = require('mongoose');

const id = 'backend';
const password = 'cobsys-xozqiz-2bycGe';

const connection = async()=>{
    const URL = `mongodb://${id}:${password}@ac-94xasmj-shard-00-00.eynmgds.mongodb.net:27017,ac-94xasmj-shard-00-01.eynmgds.mongodb.net:27017,ac-94xasmj-shard-00-02.eynmgds.mongodb.net:27017/?ssl=true&replicaSet=atlas-l5jt69-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
      await mongoose.connect(URL, {useUnifiedTopology:true});
      console.log("data base connected succesfully");
    } catch (error) {
        console.log("error while connecting databasee" , error.message);
    }
}
module.exports = connection;