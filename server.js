var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

articles={
	'article-one':{
		title:"Article One | Clint Johnson",
		head:"Article One",
		date:"4 March 2017",
		content:"This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one",
	},
	'article-two':{
		title:"Article Two| Clint Johnson",
		head:"Article Two",
		date:"9 March 2017",
		content:"This is article two",
	},
	'article-three':{
	
		title:"Article Three| Clint Johnson",
		head:"Article Three",
		date:"12 March 2017",
		content:"This is article three",
	}
}

htmlTemplate=function(article){
	title=article.title;
	head=article.head;
	date=article.date;
	content=article.content;

	html=`<!DOCTYPE html>
				<html>
				<head>
					<title>${title}</title>
					<link rel="stylesheet" type="text/css" href="/ui/style.css">
				</head>
				<body>
					<div class="MainContent">
					<link href="/">Main Page</link>
						<h1> ${head} </h1>
						<h4>${date}</h4>
						<hr>
						<p> ${content}</p>
					</div>
				</body>
				</html>`

	return html;
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
})

counter =0;
app.get('/counter',function(req,res){
	counter++;
	res.send(counter.toString());

});

var namesList=[];
app.get("/submitName",function(req,res){	// /submitName?name=xxxx

	var name=req.query.name;
	namesList.push(name);
	res.send(JSON.stringify(namesList));

});

app.get('/:articleName', function (req, res) {
	articleName=req.params.articleName;
	console.log(articleName);
  res.send(htmlTemplate(articles[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
