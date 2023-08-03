//added modules
const express = require("express");
const app = express();
const getApi = require('./routes/getApi');
const getHtml = require('./routes/getHtml');
const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setting up middleware
app.use('/api', getApi);
app.use('/', getHtml);

app.listen(process.env.PORT || 3001, () => {
    console.log(`listening on localhost:${PORT}`);
  });
