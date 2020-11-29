## NPM
**npm semantic version rules**

npm packages follow semver (semantic versioning). Based on the version scheme of each installed npm packages as found in package.json file, when you run `npm update` the behavior varies as follows:
- `~` - means only patch versions (3rd position of semver) are going to be updated.
- `^` - means both patch versions and minor versions (2nd and 3rd position of semver) are going to be updated.

npm update will update all the packages and dependencies in the package respective of their semver schemes, and update this information in the `package-lock.json` file. Whereas, `package.json` file is untouched. So you can test the software with updated packages and if anything goes wrong, revert back to `package.json` version of software.

**check package versions**

- `npm list` : Lists the **installed versions** of all dependencies in this software
- `npm list -g --depth 0` : Lists the **installed versions** of all globally installed packages
- `npm view` : Lists the **latest versions** of all dependencies in this software
- `npm outdated` : Lists only the dependencies in this software which are outdated

**install package**

Though it is useful to have some executables installed globally, in general all npm packages are recommended to be installed locally in your project directory.

- `npm install <package> --save` : Install the <package> and add it as **dependencies** in package.json file.
- `npm install <package> --save-dev` : Install the <package> and add it as **devDependencies** in package.json file.
- `npm install` : Install all the dependency & devDependency packages
- `npm install --production` : Install only dependency packages
  
**install path**

- `npm root -g` : Shows global path where Node modules are installed

**npx**
- `npx <script-name>` : It runs a binary executable with name `<script-name>`. The executable found in `node_modules/bin` either in the current directory or global root path is automatically resolved.
- `npx create-react-app my-app` is equivalent to `npm install create-react-app` & `create-react-app my-app`. With npx you can avoid the need to have the package installed before invoking its executable.
- `npx node@10 -v` : With npx you can pick a version of package (or even node) to run a command. This avoids the need to use nvm for node version management.
- `npx <Github gist url>` : It executes the piece of code present in a URL

## Node.js

- Like `window` is the global object in browser environment, `global` is the global object of Node.js environment. So, `console.log()` can be also written as `global.console.log()`.
- Each js file is a module. And, you have to export variables, functions, objects into global scope if you need to access it from another module or from global space.
- Every .js page in Node.js project is like a module. Invisibly behind the scenes each .js page is wrapped by a wrapper function which looks like:
```Javascript
// Module wrapper function
(function(exports,require,module,__filename,__dirname){
})
```
- All Node.js APIs are designed to work asynchronously. In Node.js asynchrony is facilitated using callbacks. So every Node.js I/O APIs support callback. And, they also do have synchronous counterparts that has `Sync` in method name.

### Advantages of Node.js
- It is used for asynchrounous, event driven, non blocking, I/O bound, single process-single threaded programming.

If you application program involves performing actions based on a lot of events such as user interactions (like a webpage), or I/O (file read/write, disk access) - these actions can work asynchronously making use of event loop like in the browser. In a browser while javascript functions are executed in the call stack, any other events occuring gets queued in the event loop. For eg: a user click, or a setTimeout event, or a web page document ready etc gets queued into the event loop, and they are moved into the call stack when current tasks in call stack is finished. Similarly, in Node.js there is only a single process and single thread - which is used to execute the application. While the application is built foundationally using asynchrounous APIs, all those gets queued into the event loop. Hence, this wouldn't block the main application.

Node.js application can be best illustrated as a restaurant. Where, there is only a single waiter who is super efficient to serve every tables fastly and passes instructions to the Chef at kitchen swiftly. Chef is the callstack which actually performs CPU intesive operations.

- Node.js is best for implementing microservice architecture. 

Because you can use node modules to break down programs into smaller chunks and each peice of application can interact easily based on event driven model.

### Disadvantages of Node.js
- CPU intensive applications such as processing heavy graphics, crunching numbers of pi etc isn't advisable to be implemented using Node.js because it would essentially block the only available process. Also, Node.js has only one process against other programming languages which could use multi-process multi-threaded execution. 

### How to avoid blocking in Node.js ?
- Yield a big synchronous callback or program into smaller, quick asynchronous callbacks.
- Fork child processes to avoid using event loop for big tasks

### Event Loop
- The event loop in node.js environment is similar to that of JavaScript in browser environment. 
- ES6 has introduced **job queue**, the tasks in which shall get executed before the beginning of next round of event loop. That means when you have a code with `setTimeout` and then a code for `promise` within a function, the promise will get executed before the function passed into setTimeout. This is because promise API works in `job queue` level whereas the latter works in the `message queue`. 
- The `process.nextTick()` of node.js is similar to the `job queue` of JavaScript in browser.
- Node.js `setImmediate` is very similar to setTimeout with 0ms timeout `setTimeout(fn,0)`
- When current `call stack` is finished,
  - then `process.nextTick(fn)` is executed
  - then `setImmediate(fn)` is executed
  - then `setTimeout(fn,0)` is executed
  
### Node.js core modules  
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

### Testing
- In Node.js, you can test source codes by installing mocha & chai. And, to do testing of values, you could use either `assert`, `should` or `expect`.
- `describe` is used to write the suite of tests. You can nest `describe` as needed.
- `it` is used to define each tests.
- `it` can be used to implement `asynchronous` testing by passing a value (for eg: _done_) into the callback of `it`.
- In cases such as testing a website result, you don't need to bother about testing result from the actual URL. Instead you can mock it using `Nock`.

### Debug
- `node --inspect-brk ./node_modules/.bin/gulp css`

# Reference
- https://stackoverflow.com/questions/40033298/how-to-debug-a-gulp-task
