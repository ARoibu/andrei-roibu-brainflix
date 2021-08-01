const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/routes')
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));


app.use("/videos", routes);

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
})