/**	debounce(callback, arguments, delay, object) && throttle(callback, arguments, delay, object)
 *	Method to help reduce multifire issues || Fires so many times per second until event is finished
 **/
;(function() {
	function debounce(cb, args, delay, obj) {	//	return function
		var tmr;
		return function() {
			void 0 == obj && (obj = this);
			tmr && clearTimeout(tmr);
			args = args && 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : arguments;
			(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
			tmr = setTimeout(function() { cb.apply(obj, args); }, delay);
		}
	}
	function throttle(cb, args, delay, obj) {
		(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
		var lst, tmr;
		return function() {
			void 0 == obj && (obj = this);
			args = args && 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : arguments;
			var now = +new Date;
			if (lst && now < lst + delay) {	//	hold it
				tmr && clearTimeout(tmr);
				return tmr = setTimeout(function() { lst = now; cb.apply(obj, args); }, delay);
			}
			lst = now;
			return cb.apply(obj, args);
		}
	}
	window.hasOwnProperty("debounce") || (window.debounce = debounce);
	window.hasOwnProperty("throttle") || (window.throttle = throttle);
	if (window.hasOwnProperty('jQuery')) {
		if (!jQuery['debounce']) jQuery.debounce = debounce;
		if (!jQuery['throttle']) jQuery.throttle = throttle;
	}
})();
