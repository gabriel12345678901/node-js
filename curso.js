//https://nodejs.org/dist/latest-v12.x/docs/api/assert.html#assert_assert
//https://nodejs.org/dist/latest-v12.x/docs/api/http.html  http

const {adicionar, contar} = require('./contador');
const http = require('http').createServer(response);
const fs = require('fs');

http.listen(3000,(err)=>{
    if(err){console.log(err)}
    console.log('connected port 3000')
});

function response(req, res){
    fs.readFile(__dirname+'/teste.pdf',(err, data)=>{
        if(err){console.log(err)}
        res.end(data, (err)=>{
            if(err){console.log(err)}
            console.count('number of request: '+contar())
        })
    })




}























/* lendo arquivo em servidor http(http, fs)

const fs = require('fs')
const app = require('http').createServer(resposta);
app.listen(3000);
console.log('em execução')

function resposta(req,res){
    fs.readFile(__dirname + '/teste.pdf',function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Erro ao carregar o arquivo index.html')
        }

        res.writeHead(200);
        res.end(data)
    })
    
}




*/





/* fs e buffer
 const fs = require('fs')
const pdf = require('pdf-parse');

const buffer = require('buffer').Buffer
const texto ='testando'
let data, dados;

arquivo();

function arquivo(){
fs.readFile('teste.txt',(err,data) => {
    if(err){console.log(err)}
    
    
    console.log(texto.substring(3,7))
    
    
    const buffer = Buffer.from(data,'utf8')
    const dados = buffer.toString()
    var txt = dados.substring(3,70)
    

    fs.writeFile('testegravado.txt',txt,(err) => {
      if(err){console.log(err)}
      console.log('arquivo salvo e gravado')
     //global = window.parseInt()
    
     
    })


    console.log(dados.substring(3,170))
    
    


})



}


 
*/ 


/*

//pdf
let dataBuffer = fs.readFileSync('C:/Users/tr642633/Documents/desenvolvimento/node development/api-rest/teste.pdf')
 
 pdf(dataBuffer).then(function(data){
     console.log(data.text)

     fs.writeFile('teste.txt', data.text, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
 })
 

//fs
fs.readFile('teste.pdf',(err, data) => {
    if(err){
        console.error('there was an error reading the file!', err)
        return;
    }
    const buf = Buffer.from(data, 'utf8')
    console.log(buf.toString())
    
})

//dns
//exemplo 1
dns.lookup('nodejs.org',(error,address, family) => {
    if(error) throw error;
    console.log('address: %j family: IPV%s', address, family)
})

//crypto
const crypto = require('crypto')
const secret = 'abcdefg'
const hash = crypto.createHmac('sha256',secret)
                   .update('I love cupcakes')
                   .digest('hex')

console.log(hash)

//buffer
require('buffer').Buffer
const buf = Buffer.from('hellow world', 'utf8')
console.log(buf.toString('base64'));
console.log(buf.toString('hex'));

//async
const async_hooks = require('async_hooks');
const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId()
console.log('ID: '+eid)
//assert
const assert = require('assert');
const {message} = new assert.AssertionError({
   actual: 1,
   expected: 2,
   operator: 'strictEqual' 
})

try{
    assert.strictEqual(1,2);
}catch(err){
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message)
}


//assert.equal('rodrigo','alexandre',"error")
//var um = 2
//var dois = 1+2
//assert.equal(um,dois)

(async() => {
    await assert.rejects(
        async() => {
        throw new TypeError('wrong value');
        return true;
        },

        {
            name: 'typeerror',
            message:'wrong value'


        }
    );
})();

*/

