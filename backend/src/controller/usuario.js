const model = require('../models');
const Usuario = model.Usuario;

module.exports = {
    async criarUsuario(req, res) {
        
        try {
            const {
                nome,
                email,
                senha_hash
            } = req.body;

            const salvarUsuario = await Usuario.create({
                nome,
                email,
                senha_hash
            })
            salvarUsuario.senha_hash = undefined

            return res.json({ salvarUsuario })
        }
        catch (err){
            console.log('erro ao salvar usuário ' + err)
        }
    }
}