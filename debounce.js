/**	debounce(callback, arguments, delay, object)	||	Function.debounce(arguments, delay, object)	||	lib.debounce(cb, args, delay, object=lib)
 *	Method to help reduce multifire issues 
 **/
;(function() {
	function debounce(cb, args, delay, obj) {
		void 0 == obj && (obj = window);
		obj['__debounce_timer__'] && clearTimeout(obj['__debounce_timer__']);
		args = 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : arguments;
		(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
		return obj['__debounce_timer__'] = setTimeout(function() { delete obj['__debounce_timer__']; cb.apply(obj, args); }, delay);
	}
	window.hasOwnProperty("debounce") || (window.debounce = debounce);
	/**	CAUTION	APPENDS TO FUNCTION OBJECT **/
	/**	Function based libs (like jQuery) will be lib.debounce(cb, args, delay, object=lib)	**/
	function funcDebounce(args, delay, obj) { return args instanceof Function ? debounce(args, delay, obj, void 0 != arguments[3] ? arguments[3] : this) : debounce(this, args, delay, obj); }
	if (window.debounce === debounce) {
		Object['defineProperty'] && !Function.prototype.hasOwnProperty('funcDebounce')
			? Object.defineProperty(Function.prototype, 'debounce', { value: funcDebounce })
				: Function.prototype.debounce = funcDebounce;
	}
})();
