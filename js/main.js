/*

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
		
		this.on("invalid", function( model, error ){
			console.log("error found:");
			console.log( error );
		});

	},
	adopt: function( newChildsName ){
		this.set({
			child: newChildsName
		});
	},
	validate: function( attributes ){
		if ( attributes.age < 0 && attributes.name != "Dr Manhatten" ){
			return "You can't be negative years old";
		}
	}
});

// Validation example 

var person = new Person();

person.set({
	name: "Mary Poppins",
	age: -1
}, {
	validate: true
});



// Interacting wih the server

var UserModel = Backbone.Model.extend({
	urlRoot: 'http://tests.punkbit.com:2403/users',
	defaults: {
		username: '',
		password: '',
		email: ''
	}
});

// Post example

var user = new UserModel();

var userDetails = {
	username: 'Thomas',
	email: 'thomasalwas@gmail.com',
	password: 'testpassword'
};

// Get example

user.save( userDetails, {
	success: function( user ){
		console.log("save return data:");
		console.log(user.toJSON());
	}
});

var user = new UserModel({ id: 'b910c34776076895' });

user.fetch({
	success: function( user ){
		console.log( user.toJSON() );
	}
});

// PUT (Update) example

var user = new UserModel({
	id: 'b910c34776076895',
	username: 'Peter Griffin',
	email: 'peter.griffins@supersitta.com'
});

user.save({
		username: 'Petter Isgriffin'
	}, {
		success: function( model ){
			console.log( user.toJSON() );
		}
	}
);

// DELETE example

var user = new UserModel({
	id: 'b910c34776076895'
});

user.destroy({
	success: function(){
		console.log('Destroyed!');
	}
});

var Song = Backbone.Model.extend({
	defaults: {
		name: "Not specified",
		artist: "Not specified"
	},
	initialize: function(){
		console.log("Music is the answer");
	}
});

var Album = Backbone.Collection.extend({
	model: Song
});

var song1 = new Song({
	name: "How Bizarre",
	artist: "OMC"
});

var song2 = new Song({
	name: "Flip flops",
	artist: "FUTURE"
});

var song3 = new Song({
	name: "Zubar Foo",
	artist: "LOEE"
});

var myAlbum = new Album([ song1, song2, song3]);

console.log( myAlbum.toJSON() );

*/

// Router example

var AppRouter = Backbone.Router.extend({
	routes: {
		"download/*path": "downloadFile",
		":route/:action": "loadView",
		"posts/:id": "getPost"
	}
});

var app_router = new AppRouter();

app_router.on('route:getPost', function(id) {
	console.log("getPost id:");
	console.log(id);
});

app_router.on('route:defaultRoute', function(actions) {
	console.log("actions");
	console.log(actions);
});

app_router.on('route:downloadFile', function(path) {
	console.log("downloadFile path:");
	console.log(path);
});

app_router.on('route:loadView', function(route, action) {
	console.log(route + " _ " + action);
});

Backbone.history.start();
