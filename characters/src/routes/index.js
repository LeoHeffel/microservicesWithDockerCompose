const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/',  controllers.getCharacters)
    .get('/:id',  controllers.getCharacterById)
    .post('/',middlewares.characterValidation, controllers.createCharacter)

module.exports=router