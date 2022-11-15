const http = require("http");
const fs = require("fs");

let content_of_home = "";
let content_of_project = "";
let content_of_registration = "";

const args = require("minimist")(process.argv.slice(2));

console.log(args);

fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    content_of_home = home;
  });
  
  fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    content_of_project = project;
  });

  fs.readFile("registration.html", (err,registration) =>{
    if(err){
        throw err;
    }
    content_of_registration = registration;
  });

  http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(content_of_project);
        response.end();
        break;
      case "/registration":
        response.write(content_of_registration);
        response.end();
        break;
      default:
        response.write(content_of_home);
        response.end();
        break;
    }
  })
  .listen(args.port);