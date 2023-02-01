var mongoose = require('mongoose');

const id = 'sainiprince09';
const password = 'jmC5sCeAH44vrqx1';

const connection = async()=>{
    const URL = `mongodb://${id}:${password}@ac-bpyghfc-shard-00-00.uaguchq.mongodb.net:27017,ac-bpyghfc-shard-00-01.uaguchq.mongodb.net:27017,ac-bpyghfc-shard-00-02.uaguchq.mongodb.net:27017/?ssl=true&replicaSet=atlas-sixjeq-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
      await mongoose.connect(URL, {useUnifiedTopology:true});
      console.log("data base connected succesfully");
    } catch (error) {
        console.log("error while connecting databasee" , error.message);
    }
}
module.exports = connection;
//something