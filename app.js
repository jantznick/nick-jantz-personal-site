const express = require('express');
const app = express();
const port = 3006;

require('dotenv').config()

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

const hasMenu = process.env.menu === 'true';
const hasProjects = process.env.menu === 'true';
const hasCompanies = process.env.menu === 'true';

const getConfigData = (data) => {
	return {
		hasProjects,
		hasCompanies,
		activePage: data.page,
		menu: hasMenu ? menu : [],
	}
}

app.get("/", (req,res) => {
	res.render('index', getConfigData({
		page: 'home'
	}));
});

app.get("/resume", (req,res) => {
	res.render('resume', getConfigData({
		page: 'resume'
	}));
})

app.get("/contact", (req,res) => {
	res.render('contact', getConfigData({
		page: 'contact'
	}));
})

app.get("/login", (req,res) => {
	res.render('login', getConfigData({
		page: 'login'
	}));
})

app.get("*", (req,res) => {
	res.render('error')
})

app.listen(port, () => {
	console.log(`SERVER IS RUNNING ON PORT ${port}!`);
});
