var NavBar = React.createClass({
	render: function(){
		return(
			<div className="navBar">
				<ul className="navItems">
					<li className="navItem dropdown">
						<a herf="#">關於</a>
						<div className="dropdown-content">
							<a herf="#">關於我們</a>
							<a herf="#">1312異象</a>
						</div>
					</li>
					<li className="navItem dropdown">
						<a herf="#">活動</a>
						<div className="dropdown-content">
							<a herf="#">活動消息</a>
							<a herf="#">小榮光品格營</a>
						</div>
					</li>
					<li className="navItem dropdown">
						<a herf="#">資源</a>
						<div className="dropdown-content">
							<a herf="#">網上主日信息</a>
							<a herf="#">主日學資源區</a>
							<a herf="#">教育訓練區</a>
							<a herf="#">特會影音區</a>
						</div>
					</li>
					<li className="navItem dropdown">
						<a herf="#">會友區</a>
						<div className="dropdown-content">
							<a herf="#">方舟小語</a>
							<a herf="#">3G 小組</a>
							<a herf="#">代禱頁</a>
						</div>
					</li>
					<li className="navItem dropdown">
						<a herf="#">奉獻支持</a>
					</li>
				</ul>
			</div>

		)
	}
});

var Top = React.createClass({
	render: function(){
		return(
			<div className="top">
				<img id="logo" src="img/logo.png" alt="Logo" />
				<NavBar />
			</div>

		)
	}
});

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var SlideShow = React.createClass({
    mixins: [SetIntervalMixin],
	getInitialState: function(){
		return {imgIdx:0};
	},
    componentDidMount: function(){
        this.setInterval(this.change, 2000);    
    },
	change: function(){//carousel
       // console.log("change");
        var images = $("#slideShow img");
        var that = this;
        $("#slideShow img").each(function(index){
            if(index == that.state.imgIdx % 3){
                //$(this).fadeIn(1000);
                //$(this).addClass("show");
            } else {
                //$(this).fadeOut(1000);
                //$(this).removeClass("show");
            }
            console.log(that.state.imgIdx, index, this);
        });
        this.setState({imgIdx: this.state.imgIdx + 1});
	},
	render: function(){

		return(
			<div id="slideShow">
                <img src="img/img1.jpg" />
				<img src="img/img2.jpg" />
				<img src="img/img3.jpg" />
			</div>

		)
	}
});

var WorshipInfo = React.createClass({
	render: function(){
		return(
			<div id="worshipInfo">
                聯合主日崇拜<br/> 10:00AM<br/>
                成人主日學<br/> 11:45AM<br/>
                兒童及青少年主日學<br/> 10:30AM<br/>
                週二禱告會<br/> 7:30PM<br/>
                週五3G小組聚會<br/> 7:30PM<br/>
			</div>

		)
	}
});

var Banner = React.createClass({
	render: function(){
		return(
			<div className="banner">
				<SlideShow />
				<WorshipInfo />
			</div>

		)
	}
});

var DescSection = React.createClass({
	render: function(){
		return(
			<div className="desc-section">
				<div className="desc-panel">
                    <div className="panel-title">異象/Vision</div>
                    <div className="panel-content">
                        塑造當代基督門徒 <br/>
                        Making Christ’s disciples 
                        of the day
                    </div>
                </div>
                <div className="desc-panel">
                    <div className="panel-title">使命/Mission</div>
                    <div className="panel-content">
                        在基督裡成長 <br/>
                        Growing in Christ<br/>
                        在萬民中傳揚 <br/>
                        Preaching among nations
                    </div>
                </div>
                <div className="desc-panel">
                    <div className="panel-title">行動/Action</div>
                    <div className="panel-content">
                        塑造門徒 Making disciples<br/>
                        修造家庭 Restoring families<br/>
                        建造團隊 Building teams<br/>
                        造福萬民 Transforming  nations
                    </div>
                </div>
			</div>

		)
	}
});

var LatestEvents = React.createClass({
	render: function(){
		return(
			<div className="latest-events">
				<div className="big-panel">
                    <div className="panel-title">最新消息</div>
                    <div className="panel-content">
                        <img src="img/One_Psalm_a_Month_web_banner.jpg" alt="One Psalm a Month" />
                        <img src="img/Book_Study_Retreat_web_banner_2016.jpg" alt="Book Study Retreat" />
                    </div>
                </div>
			</div>

		)
	}
});


var Content = React.createClass({
	render: function(){
		return(
			<div className="content">
				<DescSection />
				<LatestEvents />
			</div>

		)
	}
});

var Footer = React.createClass({
	render: function(){
		return(
			<div className="footer">
				教會地址: 380 Montague Expressway<br/>
                Milpitas, CA 95035<br/>
                電話:       (408) 526-1312 <br/>
                傳真:       (408) 946-4749<br/>
                電郵: info@arkbaptistchurch.org<br/>
                會牧: 孫慈俠牧師
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
                <Content />
                <Footer />
			</div>

		)
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);