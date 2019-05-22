

//var Browser = require("zombie"); 
//browser = new Browser(); 
var request = require("request");
//const rp = require('request-promise')
var cheerio = require('cheerio');
var fs = require('fs');
request('https://www.imdb.com/chart/moviemeter', function(err, res, body){
 //console.log('acessou a url novo');
 if(err) console.log('Erro: '+err);

 let $ = cheerio.load(body);
 //console.log(cheerio.load(body));
 
   $('.lister-list tr').each(function(){

 	   var title = $(this).find('.titleColumn a').text().trim();
 	   var rat = $(this).find('.imdbRating strong').text().trim();
     console.log('titulo: '+title+' rat: '+rat);
     
     fs.appendFile('C:\\Users\\tr642633\\Documents\\desenvolvimento\\node\\projeto\\mynewfile1.txt', title + ' ' + rat + '; ' + '\n', function (err) {
      if (err) throw err;
      
     });
     
    console.log('procedimento finalizado.');

    });

   









});




