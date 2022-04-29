const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "..", 'public');
const PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("*", (req, res) => {
    res.render(path.join(publicPath, "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is open on ${PORT}`);
})
