/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SlickDeals.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SlickDeals',
    stores: [

    ],
    
    launch: function () {

    	
//    	Ext.Ajax.request({
//    		   url: '../api/Posts/1',
//    		   success: function(response, opts) {
//    		      var obj = Ext.decode(response.responseText);
//    		      console.dir(obj);
//    		   },
//    		   failure: function(response, opts) {
//    			   Ext.toast('No!!!!!!!!!!!!!!!!', 'No!!!!!!!!!!!!!!!!!!!!!!!!TT', 't');
//    		      console.log('server-side failure with status code ' + response.status);
//    		   }
//    		});

//Ext.Ajax.request({
//	   url: 'https://api.import.io/store/data/bbffc541-8695-4c1a-909d-13b96c2278a8/_query?input/webpage/url=http%3A%2F%2Fslickdeals.net%2Fforums%2Fforumdisplay.php%3Ff%3D9%26order%3Ddesc%26pp%3D80%26sort%3Dlastpost&_user=9290f6ad-b221-415a-8871-024b19d23a54&_apikey=enywA5ye07R%2Bpyv29lchchQOB1KoMBqkeq6vv0fB29ggr3vqwBrRZjS4qvpi3apMX5dhAPXMnyxwprv8JzST8g%3D%3D',
//	   success: function(response, opts) {
//	      var obj = Ext.decode(response.responseText);
//	      console.dir(obj);
//	   },
//	   failure: function(response, opts) {
//		   Ext.toast('No!!!!!!!!!!!!!!!!', 'No!!!!!!!!!!!!!!!!!!!!!!!!TT', 't');
//	      console.log('server-side failure with status code ' + response.status);
//	   }
//	});    
    
    }
});
