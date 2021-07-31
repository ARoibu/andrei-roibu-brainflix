const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/routes')
const cors = require("cors");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Express is running!');
});

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
})