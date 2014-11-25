/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SlickDeals.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SlickDeals',
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
    	Ext.Ajax.request({
    		   url: '../api/Posts/1',
    		   success: function(response, opts) {
    		      var obj = Ext.decode(response.responseText);
//    		      console.dir(obj);
    		   },
    		   failure: function(response, opts) {
    			   Ext.toast('No!!!!!!!!!!!!!!!', 'No!!!!!!!!!!!!!!!!!!!!!!!!TT', 't');
    		      console.log('server-side failure with status code ' + response.status);
    		   }
    		});
    }
});
