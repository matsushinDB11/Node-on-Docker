const express = require('express');
const router = express.Router();
const app = express();


router.get('/hello1', (req, res) =>{
    res.send('helloapp');
});

router.get('/', (req, res) =>{
    res.render('hello');
});

router.get('/matsushin', (req, res) =>{
    res.send('hello matsushin');
});

module.exports = router;
