const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("No Cyka!");
});

app.listen(port, () => console.log(`The application is running on port ${port}!`));
