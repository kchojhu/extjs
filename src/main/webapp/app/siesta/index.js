var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    hostPageUrl: '../index.html'
});

Harness.start({
	group : 'Sanity',
	items : [ 'sanity/global_variables.t.js' ]
	}, {
	group : 'View',
	items : [ {
		group : 'Main',
		items : [ 'view/main/main.t.js' ]
	}, {
		group : 'Model'
	} ]
});