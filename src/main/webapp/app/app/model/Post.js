"use strict";

Ext.define('SlickDeals.model.Post', {
	extend : 'SlickDeals.model.Base',
	proxy : {
		type : 'ajax',
		url : '//api.import.io/store/data/bbffc541-8695-4c1a-909d-13b96c2278a8/_query?input/webpage/url=http%3A%2F%2Fslickdeals.net%2Fforums%2Fforumdisplay.php%3Ff%3D9%26order%3Ddesc%26pp%3D80%26sort%3Dlastpost&_user=9290f6ad-b221-415a-8871-024b19d23a54&_apikey=enywA5ye07R%2Bpyv29lchchQOB1KoMBqkeq6vv0fB29ggr3vqwBrRZjS4qvpi3apMX5dhAPXMnyxwprv8JzST8g%3D%3D',
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
	},
	fields : []
});