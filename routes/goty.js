const {Router}=require('express');
const { postGoty, getGoty} = require('../controllers/goty');



const router=Router();

router.get('/', getGoty);
router.post('/:id', postGoty);



module.exports=router;