// Console log Plus adds color and size formatting to a console.log message
// It also automatically adds function name and function arguments to the
// start of the message to make it easier to debug. (This only works for
// non-strict mode.)


// Usage
// console.log("%c" + log.fnName(...arguments) + " - message", log.logType("new"))
// In the global scope:
// console.log("%c" + " - message", log.logType("new"))



let log = function () {

    // ^SETTINGS
    // Put your log type settings in here
    // Font color, font size
    const logLevelList = [{
            logType: "info",
            description: "Information",
            color: "#4499ff",
            size: 15
        },
        {
            logType: "new",
            description: "Working on code temporarily, fix and move on",
            color: "#cc5522",
            size: 17
        },
        {
            logType: "watch",
            description: "To watch variables",
            color: "#22cc77",
            size: 15
        }
    ]


    function logCSS(c, size) {
        let fs
        try {
            fs = Number(size) || 22;
        } catch {
            fs = 22
        }
        let color = c || "#4444ff";
        return `color: ${color}; font-size: ${fs}px`
    }


    function logTypeFind(lType) {
        return logLevelList.find(logLevel => logLevel.logType === lType)
    }

    function logType(lType) {
        let logobj = logTypeFind(lType)
        return (logobj) ? logCSS(logobj.color, logobj.size) : logCSS()
    }


    function fnName(...args) {
        let logFnName = ""
        try {
            logFnName = (fnName.caller != null) ? fnName.caller.name : ""
        } catch {
            logFnName = ""
        }

        let argList = ""
        try {
            if (args != null) {
                args.forEach(el => {
                    if (el) {
                        if (argList) argList += ", "
                        argList += (el.toString() === "[object Object]") ? JSON.stringify(el) : el.toString()
                    }
                })
            }
        } catch {
            argList = ""
        }

        return logFnName + "(" + argList + ")"
    }


    return {
        logType,
        fnName
    }
}();
