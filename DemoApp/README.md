# Angular Event Registration — Demo Application for Angular JS

This project is a sample application demonstrating a more fully developed realistic single page
angular application.

### Running the application

open your command line to the root directory of the repository.  run server.sh.

If you are on a windows machine, install the bash shell.  Optionally you may run server.bat.  Note that
after you stop your server, you must change directory back to the root of the project.

Then navigate your browser to `http://localhost:8000/<page>.html` to see the app running in
your browser.  The port may be configured in the scripts/web-server.js file near the top.

### Server

The server is a simple node server that just writes and reads files from the disk in a restful manner.  This keeps the entire project
self-contained, but it puts some limitations because the server has no logic whatsoever.

For more information on AngularJS please check out http://angularjs.org/
