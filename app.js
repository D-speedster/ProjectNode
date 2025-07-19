const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/movies', (req, res, next) => {
    res.render('movies/main')
})


app.get('/', (req, res) => {
    res.render('layout/main')
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
