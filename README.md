- Like `window` is the global object in browser environment, `global` is the global object of Node.js environment. So, `console.log()` can be also written as `global.console.log()`.
- Each js file is a module. And, you have to export variables, functions, objects into global scope if you need to access it from another module or from global space.
- Every .js page in Node.js project is like a module. Invisibly behind the scenes each .js page is wrapped by a wrapper function which looks like:
```Javascript
// Module wrapper function
(function(exports,require,module,__filename,__dirname){
})
```
- All Node.js APIs are designed to work asynchronously. In Node.js asynchrony is facilitated using callbacks. So every Node.js APIs support callback.

### Advantages of Node.js
- It is used for asynchrounous, event driven, non blocking, I/O bound, single process-single threaded programming.

If you application program involves performing actions based on a lot of events such as user interactions (like a webpage), or I/O (file read/write, disk access) - these actions can work asynchronously making use of event loop like in the browser. In a browser while javascript functions are executed in the call stack, any other events occuring gets queued in the event loop. For eg: a user click, or a setTimeout event, or a web page document ready etc gets queued into the event loop, and they are moved into the call stack when current tasks in call stack is finished. Similarly, in Node.js there is only a single process and single thread - which is used to execute the application. While the application is built foundationally using asynchrounous APIs, all those gets queued into the event loop. Hence, this wouldn't block the main application.

Node.js application can be best illustrated as a restaurant. Where, there is only a single waiter who is super efficient to serve every tables fastly and passes instructions to the Chef at kitchen swiftly. Chef is the callstack which actually performs CPU intesive operations.

#### Node.js core modules  
- `globals`
  - `__filename`
  - `__dirname`
  - `process`
    - `process.argv`
    - `process.stdin.on`
    - `process.stdout.write`
    - `process.exit`
  - `module`
    - `module.exports`
- `path`
  - `path.basename`
  - `path.join`
- `util`
  - `util.log`
  - `util.inherits`
- `readline`
  - `rl = readline.createInterface`
  - `rl.question`
  - `rl.setPrompt`
  - `rl.prompt`
  - `rl.close`
  - `rl.on('line',fn)`
  - `rl.on('close',fn)`
- `events`
  - `e = ('events').EventEmitter`
  - `e.emit`
  - `e.on`
- `child_process`
  - `exec`
  - `spawn`
    - `spawn.on`
    - `spawn.stdout.on`
    - `spawn.stdin.write`
- `fs`
  - `fs.readdirSync`
  - `fs.readdir`
  - `fs.createReadStream`
  - `fs.createWriteStream`

