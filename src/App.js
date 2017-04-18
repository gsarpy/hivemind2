import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Layout from "./pages/Layout";

// Import components //
import Featured from "./pages/Featured";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Settings from "./pages/Settings";

// Simplify DOM node targets //
const app = document.getElementById('app');
const footer = document.getElementById('footer');
const search = document.getElementById('search');

ReactDOM.render(
	<Nav />,
	document.getElementById('nav')
);

ReactDOM.render(
	<Search />,
	search
);

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="friends" component={Friends}></Route>
			<Route path="groups" component={Groups}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
app);



//import Search from "./components/Search";
//ReactDOM.render( <Search />, search );
