/**	debounce(callback, arguments[], delayTime)	||	debounce.apply(element, [callback, arguments[], delayTime])
 *		Function.debounce(element, arguments[], delayTime)
 **/
;(function() {
	var debounceTimer;
	function debounce(cb, args, delayTime) {
		var $this = this;
		args = 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : [];
		'number' != typeof delayTime && (delayTime = 0);
		debounceTimer && clearTimeout(debounceTimer);
		return debounceTimer = setTimeout(function() { cb.apply($this, args); }, delayTime);
	}
	window.hasOwnProperty("debounce") || (window.debounce = debounce);
	
	/**	USE THE FOLLOWING WITH CAUTION || REMOVE IF YOU DON'T WANT TO APPEND TO FUNCTION OBJECT **/
	function funcDebounce($this, args, delayTime) { return debounce.apply($this, [this, args, delayTime]); }
	Object['defineProperty'] && !Function.prototype.hasOwnProperty('funcDebounce')
		? Object.defineProperty(Function.prototype, 'debounce', { value: funcDebounce })
			: Function.prototype.debounce = funcDebounce;
})();
