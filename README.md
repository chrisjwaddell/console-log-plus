# Console Log Plus

Console Log Plus brings color and size formatting to a browser console.log
message. It also automatically adds function name and function arguments to the
start of the message to make it easier to debug. (This only works for non-strict
mode.)

<h2>Logs appear like this</h2>
![Console Log Plus message example](https://github.com/chrisjwaddell/console-log-plus/blob/main/logs.jpg)

## How to use it

In your HTML file. Put at the top of the script tags:

```
<script src="https://cdn.rawgit.com/chrisjwaddell/console-log-plus/main/logs.js"></script>
```

Or download log.js and put it in your project and put at the top of your HTML
file:

```
<script src="../log.js"></script>
```

The console.log message is this format: \
`console.log('%c' + log.fnName(...arguments) + ' - message', log.logType('info'))`

If it's a console.log messge on the global scope, add: \
`console.log('%c' + ' - message', log.logType('info'))`

It's a good idea to use Visual Studio code snippets to type this out easily with
3 letters (see below).

Console Log Plus works on the fact that you can run simple, well tested
functions from within a console.log statement.

Log type can be anything you want and any color you want. The default types
are - _info_, _new_ and _watch_.

It's a good idea to add a code snippet to Visual Studio to easily add this
console log format. Instead of typing out `console.log(xxxxx)`, type out `jco`.
It makes it faster and better to use console log statements.

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

You can add settings for the message color and size. You can have categories of
logs. It's best to have a basic few categories and to keep them similar from
project to project.
