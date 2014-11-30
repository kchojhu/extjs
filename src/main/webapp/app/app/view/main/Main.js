"use strict";
Ext.define('SlickDeals.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
//        'SlickDeals.view.main.MainController',
//        'SlickDeals.view.main.MainModel'
		'SlickDeals.*',
		'Ext.ux.ajax.SimManager'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li class="dummy">This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
