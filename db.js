let { Client } = require('pg')


const pg = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.IS_SSL
})

pg.connect(err => { 
        if(err){console.log(err)
        } else { 
            console.log('connected')} 
        })

        /*
let testMe = pg.query(`select * from users;`, (err, res) => {
    if(err){
        console.error(err)
    } else {
        for(let row of res.rows){
            console.log(JSON.stringify(row))
        }
    }
})
*/

let dbExports = {
    pg
}

module.exports = dbExports