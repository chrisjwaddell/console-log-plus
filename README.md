# Console Log Plus
Console log Plus adds color and size formatting to a browser console.log message. It also automatically adds function name and function arguments to the start of the message to make it easier to debug. (This only works for non-strict mode.)


## How to use it
In your HTML file. Put at the top of the script tags: \
``
cc<script src="../log.js"></script>
``

The console.log message is this format: \
``
console.log('%c' + log.fnName(...arguments) + ' -  message', log.logType('info'))
``

If it's a console.log messge on the global scope, add: \
``
console.log('%c' + ' -  message', log.logType('info'))
``

It's a good idea to add a code snippet to Visual Studio to easily add this console log format. Instead of typing out ``console.log(xxxxx)``, type out ``jco``.

You could add the following to your javascript.json file:

```
"Log with extra features": {
    "prefix": "jco",
	"body": [
        "console.log('%c' + log.fnName(...arguments) + ' - ${1}', log.logType('info'))"
	],
	"description": "Log with extra features. It shows function name and arguments. Use debugger or breakpoint if applicable."
},
"Log with extra features Global": {
	"prefix": "jcog",
	"body": [
        "console.log('%c' + ${1}', log.logType('info'))"
	],
	"description": "Log with extra features globally. Use debugger or breakpoint if applicable."
}
```


You can add settings for the message color and size.

