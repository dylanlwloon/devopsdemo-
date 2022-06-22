const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Shariot testing DevOps! Yoyoyo!!! Test test");
});
 
const port = process.env.port || 3000;

app.listen(port, () => {
	console.log("App Running!");
})

