# debounce
Simple and EZ JavaScript debounce(fire method after short delay) method.

This is pretty short and sweet and makes dealing with issues such as multiple fires during user typing events far easier to deal with.

Uses are pretty simple and EZ!

 - callback: The Function to fire at end of given time.
 - arguments[]: An array of arguments to pass to your callback method.
 - delayTime: In milliseconds, the time to wait before firing.
 - element|object: Will become `this` within the scope of your callback.

```javascript
debounce(callback, arguments[], delayTime)
```
```javascript
// to apply scope to a specific element or object
debounce.apply(element, [callback, arguments[], delayTime])
```
```javascript
// if you keep end code and choose to simply use as a Function property method
method.debounce(element, arguments[], delayTime)
```
