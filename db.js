let { Client } = require('pg')


const pg = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.IS_SSL
})

//"postgres://gykctjhvdcjcfj:5b2b1e6c99fe78cce12019acbf1fce5d70bd9fd1eb5630980f0df12c56de8c5a@ec2-54-235-160-57.compute-1.amazonaws.com:5432/dfpb7asu4h34un",

console.log(process.env.DATABASE_URL)


pg.connect(err => { 
        if(err){console.log(err)
        } else { 
            console.log('connected')} 
        })

let testMe = pg.query(`select * from users;`, (err, res) => {
    if(err){
        console.error(err)
    } else {
        for(let row of res.rows){
            console.log(JSON.stringify(row))
        }
    }
})

let dbExports = {
    pg,
    testMe
}

module.exports = dbExports