# debounce
Simple and EZ JavaScript debounce(fire method after short delay) method.

This is pretty short and sweet and makes dealing with issues such as multiple fires during user typing events far easier to deal with.

Uses are pretty simple and EZ!

 - callback: The Function to fire at end of given time.
 - object: Will become `this` within the scope of your callback.
 - delay: In milliseconds, the time to wait before firing.
 - arguments: An array of arguments to pass to your callback method.

```javascript
debounce(callback, arguments, delay, object)
```
```javascript
// if you keep end code and choose to simply use as a Function property method
method.debounce(arguments, delay, object)
```
