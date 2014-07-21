// View

SearchView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var variables = {
			search_label: "My Search"
		};
		var template = _.template( $("#search_template").html(), variables);

		this.$el.html( template );
	},
	events: {
		"click input[type=button]": "doSearch"
	},
	doSearch: function( event ){
		console.log( "Search for " + $("#search_input").val() );
	}
});

var search_view = new SearchView({
	el: $("#search_container")
});

// Model

Person = Backbone.Model.extend({
	defaults: {
		name: 'Feturs',
		age: 0,
		child: ''
	},
	initialize: function(){
		console.log("Hello model");
		this.on("change:name", function(model){
			var name = model.get("name");
			console.log("Changed my name to " + name);
		});
	},
	adopt: function( newChildsName ){
		this.set({
			child: newChildsName
		});
	}
});

var person = new Person({
	name: "Thomans",
	age: 67
});

setTimeout(function(){

	person.set({
		name: 'Stewie Griffin'
	});

}, 2000);