var request=require("request");
var cheerio=require("cheerio");



request("https://www.reddit.com/search/?q=bitcion",function(error,response,body){

if(!error && response.statusCode==200){

    var $=cheerio.load(body);
  var allitems=[];

    $("._2XDITKxlj4y3M99thqyCsO").each((i,el)=>{
       let link=$(el).find('a').attr('href');
        let h3=$(el).find('._eYtD2XCVieq6emjKBH3m').text();
        let commnets=$(el).find('.FHCV02u6Cp2zYL0fhQPsO').text();
        let time=$(el).find('._3jOxDPIQ0KaOWpzvSQo-1s').text();

         allitems.push({Title:h3,Link:link,Comments:commnets,TimeStamp:time});
        
    })

    console.log(allitems);


}
});

