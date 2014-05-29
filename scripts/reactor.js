/** @jsx React.DOM */

window.ReactItem = React.createClass({displayName: 'ReactItem',
	render: function() {
		this.props.startTimeList = new Date().getTime();	
		var scope = this.props.scope;
		var item = this.props.item;

		return (
            React.DOM.ul(null, 
                React.DOM.li(null, React.DOM.a( {href:"javascript:void(0)"}, item.prop1)),
                React.DOM.li(null, React.DOM.a( {href:"javascript:void(0)"}, item.prop2)),
                React.DOM.li(null, React.DOM.a( {href:"javascript:void(0)"}, item.prop3)),
                React.DOM.li(null, React.DOM.a( {href:"javascript:void(0)"}, item.prop4)),
                React.DOM.li(null, React.DOM.a( {href:"javascript:void(0)"}, item.prop5))
            )
		);
	},
	componentDidUpdate: function () {
		console.log("REACT - Item updated in: " + (new Date().getTime() - this.props.startTimeList) + " ms");
	}
});

window.ReactItemList = React.createClass({displayName: 'ReactItemList',
	render: function() {    
		this.props.startTimeList = new Date().getTime();
		var scope = this.props.scope;
		var items = scope.reactItems;
        
		var rows = _.map(items, function(item) {		
			return (
				ReactItem( {item:item, scope:scope} )
			);
		});

		return (
			React.DOM.div(null, rows)
		);
	},
	componentDidUpdate: function () {
        var time = (new Date().getTime() - this.props.startTimeList) + " ms";
        this.props.scope.setUpdateTime(time);
		console.log("REACT - List updated in: " + time);
	}
});