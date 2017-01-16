/**	debounce(callback, object, delay, arguments)	||	Function.debounce(object, arguments[], delayTime)
 *	Method to help reduce multifire issues 
 **/
;(function() {
	function debounce(cb, obj, delay, args) {
		args = 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : [];
		(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
		obj.tmrDebounce && clearTimeout(obj.tmrDebounce);
		return obj.tmrDebounce = setTimeout(function() { delete obj.tmrDebounce; cb.apply(obj, args); }, delay);
	}
	window.hasOwnProperty("debounce") || (window.debounce = debounce);
	
	/**	USE THE FOLLOWING WITH CAUTION || REMOVE IF YOU DON'T WANT TO APPEND TO FUNCTION OBJECT **/
	function funcDebounce(obj, delay, args) { return debounce(this, obj, delay, args); }
	if (window.debounce === debounce) {
		Object['defineProperty'] && !Function.prototype.hasOwnProperty('funcDebounce')
			? Object.defineProperty(Function.prototype, 'debounce', { value: funcDebounce })
				: Function.prototype.debounce = funcDebounce;
	}
})();
