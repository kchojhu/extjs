StartTest(function(t) {
	t.requireOk([ 'SlickDeals.view.main.MainController' ], function() {
//		t.diag('Test Button');
		t.chain(next) {
			t.cqExists('app-main', 'Main view exits.');
			next();
		}
		var test = Ext.create('SlickDeals.view.main.MainController', {});
	});
});
