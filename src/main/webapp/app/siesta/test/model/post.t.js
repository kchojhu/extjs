StartTest(function(t) {
	t.requireOk([ 'SlickDeals.model.Post' ], function() {

		t.requireOk('Ext.ux.ajax.SimManager', function() {
//			delaySimXhr(1000);
			
			Ext.ux.ajax.SimManager.init({
				delay : 5000
			}).register({
				'//api.import.io/store/data/bbffc541-8695-4c1a-909d-13b96c2278a8/_query?input/webpage/url=http%3A%2F%2Fslickdeals.net%2Fforums%2Fforumdisplay.php%3Ff%3D9%26order%3Ddesc%26pp%3D80%26sort%3Dlastpost&_user=9290f6ad-b221-415a-8871-024b19d23a54&_apikey=enywA5ye07R%2Bpyv29lchchQOB1KoMBqkeq6vv0fB29ggr3vqwBrRZjS4qvpi3apMX5dhAPXMnyxwprv8JzST8g%3D%3D' : {
					stype : 'json',
					data : [ {
						count : '3',
						success : 'true'
					} ]
				}
			});

		});

		
		t.diag('Test Button');
		var test = Ext.create('SlickDeals.model.Post', {});

		var store = Ext.create("Ext.data.Store", {
			model : 'SlickDeals.model.Post'
		});

		t.loadStoresAndThen(store, function() {
			t.diag('count' + store.getCount());

//			delaySimXhr(5000);
			
			t.loadStoresAndThen(store, function() {
				t.diag('count' + store.getCount());
			});		
		
		});

		

		
	});
});
