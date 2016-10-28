var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-ne':{
        title:'Article one by Sumit Kr Bishnu',
        heading:'Article One',
        date:'October 29,2016',
        content: ` <p>
                     This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content   
                  <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                 </p>
                 <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                </p>`
    },
    'article-two':{
        title:'Article Two by Sumit Kr Bishnu',
        heading:'Article Two',
        date:'October 30,2016',
        content: ` <p>
                     This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content   
                  <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                 </p>
                 <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                </p>`
    },
    'article-three':{
        title:'Article Three by Sumit Kr Bishnu',
        heading:'Article Three',
        date:'November 1,2016',
        content: ` <p>
                     This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content   
                  <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                 </p>
                 <p>
                    This is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.his is content of my first article.
                </p>`
    }
};
function createTemplate(data){
   var title=data.title;
   var date=data.date;
   var heading=data.heading;
   var content=data.content;
        var htmltemplate =`  <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        
        <body>
            <div class='container'>
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
            </div>
        </body>
        
        </html>`
        ;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
