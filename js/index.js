var NavBar = React.createClass({
	render: function(){
		return(
			<div className="navBar">
				<ul className="navItems">
					<li className="navItem">關於</li>
					<li className="navItem">活動</li>
					<li className="navItem">資源</li>
					<li className="navItem">會友區</li>
					<li className="navItem">奉獻支持</li>
				</ul>
			</div>

		)
	}
});

var Top = React.createClass({
	render: function(){
		return(
			<div className="top">
				<div id="logo"></div>
				<NavBar />
			</div>

		)
	}
});

var SlideShow = React.createClass({
	render: function(){
		return(
			<div id="slideShow">
				
			</div>

		)
	}
});

var WorshipInfo = React.createClass({
	render: function(){
		return(
			<div id="worshipInfo">
				
			</div>

		)
	}
});

var Banner = React.createClass({
	render: function(){
		return(
			<div>
				<SlideShow />
				<WorshipInfo />
			</div>

		)
	}
});

var Main = React.createClass({
	render: function(){
		return(
			<div>
				<Top />
				<Banner />
			</div>

		)
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);