/** @jsx React.DOM */

window.ReactItem = React.createClass({
	render: function() {
		this.props.startTimeList = new Date().getTime();	
		var scope = this.props.scope;
		var item = this.props.item;

		return (
            <ul>
                <li><a href="javascript:void(0)">{item.prop1}</a></li>
                <li><a href="javascript:void(0)">{item.prop2}</a></li>
                <li><a href="javascript:void(0)">{item.prop3}</a></li>
                <li><a href="javascript:void(0)">{item.prop4}</a></li>
                <li><a href="javascript:void(0)">{item.prop5}</a></li>
            </ul>
		);
	},
	componentDidUpdate: function () {
		console.log("REACT - Item updated in: " + (new Date().getTime() - this.props.startTimeList) + " ms");
	}
});

window.ReactItemList = React.createClass({
	render: function() {    
		this.props.startTimeList = new Date().getTime();
		var scope = this.props.scope;
		var items = scope.reactItems;
        
		var rows = _.map(items, function(item) {		
			return (
				<ReactItem item={item} scope={scope} />
			);
		});

		return (
			<div>{rows}</div>
		);
	},
	componentDidUpdate: function () {
        var time = (new Date().getTime() - this.props.startTimeList) + " ms";
        this.props.scope.setUpdateTime(time);
		console.log("REACT - List updated in: " + time);
	}
});