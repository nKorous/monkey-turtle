let express = require('express');
let cors = require('cors');
let moment = require('moment');
let dateFormat = require('dateformat');
let bodyParser = require('body-parser');

let app = express();


//app.use declarations

app.use(cors());
app.use(bodyParser.json());

//local vars
let PORT = process.env.PORT || 9000;


//App listens on ENV.PORT or 9000
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}.`)
});

app.get('/helloWorld', async (req, res) => {

	let curDate = await getCurrentDate();
	res.status(200).send({"MSG": `Hello World`, "SENT": `MSG Sent on: ${curDate}`})
});



//methods
async function getCurrentDate(){
	return dateFormat(moment(), 'yyyy-mm-dd HH:MM:ss');
};

