- Like `window` is the global object in browser environment, `global` is the global object of Node.js environment. So, `console.log()` can be also written as `global.console.log()`.
- Each js file is a module. And, you have to export variables, functions, objects into global scope if you need to access it from another module or from global space.
- Every .js page in Node.js project is like a module. Invisibly behind the scenes each .js page is wrapped by a wrapper function which looks like:
```Javascript
// Module wrapper function
(function(exports,require,module,__filename,__dirname){
})
```
- All Node.js APIs are designed to work asynchronously. In Node.js asynchrony is facilitated using callbacks. So every Node.js APIs support callback.

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

