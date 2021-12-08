const  express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is Test page');
});

router.get('/advancedTest', (req,res) =>{
    res.send('This is hiden page');
})


module.exports = router;