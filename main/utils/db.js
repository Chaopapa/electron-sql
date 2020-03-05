const mysql  = require('mysql');
class SQL {
    constructor({ip,username,password,db}){
        this.collection = mysql.createConnection({
            host:ip,
            user:username,
            password:password,
            database:db
        });
        this.collection.connect((err)=>{
            if(!err){
                console.log('连接成功');
            }else{
                console.log('连接失败');
            }
        });
    }    
}

module.exports =  SQL;