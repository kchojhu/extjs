function delaySimXhr(delayParam){
	Ext.ux.ajax.SimXhr.prototype.schedule = function() {
		var me = this;
		if (me.mgr && me.mgr.delay) {
			delay = me.mgr.delay;
		} else {
			delay = delayParam;
		}
		
		if (delay) {
			me.timer = setTimeout(function () {
				me.onTick();
			}, delay);
		} else {
			me.onTick();
		}
	};	
}