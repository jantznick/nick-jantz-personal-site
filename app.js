const express = require('express');
const app = express();

const port = 3000;

app.set("view engine","ejs");
app.use(express.static("public"));

const menu = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'Resume',
		link: '/resume'
	},
	{
		name: 'Contact',
		link: '/contact'
	}
]

app.get("/", (req,res) => {
	res.render('index', {
		activePage: 'home',
		menu: menu
	});
});

app.get("/resume", (req,res) => {
	res.render('resume', {
		activePage: 'resume',
		menu: menu
	});
})

app.get("/contact", (req,res) => {
	res.render('contact', {
		activePage: 'contact',
		menu: menu
	});
})

app.get("/login", (req,res) => {
	res.render('login', {
		activePage: 'login',
		menu: menu
	});
})

app.get("*", (req,res) => {
	res.render('error')
})

app.listen(port, () => {
	console.log(`SERVER IS RUNNING ON PORT ${port}!`);
});