const {Router} = require('express')
const router = Router()
const controllerUsuario = require('../src/controller/usuario')
const controllerLogin = require('../src/controller/login')
const {autenticado} = require('../src/middleware/autenticado')


//router.get('/', (req, res) => {
 //res.json({Hello: 'world'})
//})


router.post('/criar/Usuario', autenticado, controllerUsuario.criarUsuario);
router.post('/login', controllerLogin.login)
router.get('/home', autenticado, (req, res) => {res.json({Hello: "Word"})})
router.get('/login/sucesso', controllerLogin.loginSuccess)
router.get('/login/fracasso', controllerLogin.loginFailure)



// https://www.youtube.com/watch?v=Jjy-gxew1Lc&list=PLqfQXYWB7zoZPoo7LsSqUSqgRsBXQOQ6y&index=8 16:37
module.exports = router