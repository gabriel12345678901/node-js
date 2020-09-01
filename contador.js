const contador = 0;

const adicionar = async(req,res,next)=>{
    contador += 1;
    next();
}

const contar = () =>{
    return contador;
}


module.exports = {
    adicionar,
    contar,
}





















/*
const contador = 0;

const adicionar = async (req,res, next)=>{
    contador += 1;
    next();
};

const contar = ()=> {
    return contador;
}

module.exports = {
    adicionar,
    contar,
}

*/