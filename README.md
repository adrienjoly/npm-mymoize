# npm-mymoize
Memoization for standard asynchronous functions which callback(err, res).

```javascript
function fn(callback) {
  var err = null;
  var res = {ok: 1};
  callback(err, res);
};
var mymoized = mymoize(fn);
mymoized();
mymoized.getErr(); // => null
mymoized.getRes(); // => {ok: 1}
```
