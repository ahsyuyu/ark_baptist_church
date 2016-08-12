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
        //this.setInterval(this.change, 2000);    
    },
	change: function(){//carousel
       // console.log("change");
        var images = $("#slideShow img");
        var that = this;
        $("#slideShow img").each(function(index){
            if(index != that.state.imgIdx % 3){
                $(this).show(1000);
            } else {
                $(this).hide(1000);
            }
            //console.log(that.state.imgIdx, index, this);
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
				<div className="worship-panel">
                    <div className="panel-title">聚會時間</div>
                    <div className="panel-content">
                        聯合主日崇拜: 10:00AM<br/>
                        成人主日學: 11:45AM<br/>
                        兒童及青少年主日學: 10:30AM<br/>
                        週二禱告會: 7:30PM<br/>
                        週五3G小組聚會: 7:30PM<br/>
                    </div>
                </div>
                <div className="worship-panel">
                    <div className="panel-title">教會資訊</div>
                    <div className="panel-content">
                        教會地址: 380 Montague Expressway<br/>
                        Milpitas, CA 95035<br/>
                        電話:       (408) 526-1312 <br/>
                        傳真:       (408) 946-4749 <br/>
                        電郵: info@arkbaptistchurch.org<br/>
                        會牧: 孫慈俠牧師<br/>
                    </div>
                </div>
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