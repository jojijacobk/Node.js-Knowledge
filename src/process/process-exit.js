const pid = "27139";
process.kill(pid, "SIGTERM");

process.exitCode = 1;
const then = Date.now();
while (Date.now() - then < 3000) {}
// to check exit code, run the following command in terminal after the program is extied
// echo $?
