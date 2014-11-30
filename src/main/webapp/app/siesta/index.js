var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
//    hostPageUrl: '../index.html'
	preload: ["https://extjs.cachefly.net/ext/gpl/5.0.1/build/ext-all-debug.js", 'overrides.js'],
    loaderPath  : { 'SlickDeals' : '../app' }
});

Harness.start({
	group : 'Sanity',
	items : [ 'sanity/global_variables.t.js' ]
	}, {
	group : 'View',
	preload: ["https://extjs.cachefly.net/ext/gpl/5.0.1/build/ext-all-debug.js", 'overrides.js'],
	items : [ {
		group : 'Main',
		items : [ 'test/view/main/main.t.js' ]
	}, {
		group : 'Record',
		items: [ 'test/model/post.t.js']
	} ]
});