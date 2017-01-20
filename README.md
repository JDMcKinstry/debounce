# debounce
Simple and EZ JavaScript debounce(fire method after short delay) method.

This is pretty short and sweet and makes dealing with issues such as multiple fires during user typing events far easier to deal with.

####Quick Links:
 - [Just `debounce` method](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/debounce.js) || [minimized](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/debounce.min.js)
 - [Just `throttle` method](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/throttle.js) || [minimized](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/throttle.min.js)
 - [Both Methods](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/debounce_throttle.js) || [minimized](https://cdn.rawgit.com/JDMcKinstry/debounce/31161904/debounce_throttle.min.js)

Uses are pretty simple and EZ!

 - callback: The Function to fire at end of given time.
 - arguments: An array of arguments to pass to your callback method.
  - if `null`, then will default to event passed arguments (Example: IN $(window).resize(debounce(func, null... ARGS would be EVENT ARGS)
 - delay: In milliseconds, the time to wait before firing.
 - object: Will become `this` within the scope of your callback.
  - Defaults to `this`

```javascript
debounce(callback, arguments, delay, object)
```

##BONUS!
###`throttle` method fires so many times per second until event has ended.

```javascript
throttle(callback, arguments, delay, object)
```
