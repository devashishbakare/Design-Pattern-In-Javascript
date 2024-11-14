const InternetAccessProxy = require("./InternetAccessProxy");
let internetAccessProxy = new InternetAccessProxy("devashish Bakare");
internetAccessProxy.grantAccess();

internetAccessProxy = new InternetAccessProxy("john doe");
internetAccessProxy.grantAccess();
