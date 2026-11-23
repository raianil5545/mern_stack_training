// blocking: wait till the execution of code is completed sequntially
console.log("start");
const start = Date.now();
while(Date.now() - start < 3000){}
console.log("stop")