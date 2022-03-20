module.exports = {
	autenticado: (req,res,next)=>{
		console.log(req.isAuthenticated())
	if(req.isAuthenticated()){
	return next();
}
else {return res.json({msg: "Precisa estar logado para acessar"})}
}
}