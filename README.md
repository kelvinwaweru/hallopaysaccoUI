##Setting up Frontend - HalloPay Sacco

##Let's get started!

1.Ensure you have
	npm installed - goto  to download the installer for your OS.
	ruby installed - goto  to download the latest version of ruby.
	
Note: On Ubuntu Linux you can use sudo apt-get install npm nodejs-legacy, which avoids the /usr/bin/env: node: No such file or directory problem.
Note that on Linux distributions you'll need to install the Ruby Development package (e.g. sudo dnf install ruby-devel on Fedora), and not just ruby, otherwise bundle install below will fail when it gets to installing ffi which uses native extensions.

2.Clone this repository to your local filesystem (default branch is 'develop'):
 git clone https://github.com/openMF/community-app.git
 
3.To download the dependencies, and be able to build, first install bower & grunt:
	```
	 npm install -g bower
	 ```
	 
	 
	 npm install -g grunt-cli
	 
If this fails with npm WARN checkPermissions Missing write access to /usr/local/lib and npm ERR! code EACCES because you are not running npm with sudo as root (which you rightfully really shouldn't!) then use npm config set prefix ~ once before doing npm install. Note that in that case bower and grunt will be installed into ./bin/bower instead of /usr/local/bin, and so you need to prefix it in the usages below.

1.Next pull the runtime and build time dependencies by running bower, npm, and gem commands on the project root folder:
```
 bower install
 ```
 ```
 npm install
 ```
 ```
 gem install bundler
 ```
 ```
 bundle install
 ```
If you used ```npm config set prefix ~```, then you have to use ```./bin/bower install``` instead of bower install.
To preview the app, run the following command on the project root folder:
 ```grunt serve```
If you used ```npm config set prefix ~```, then you have to use ```./bin/grunt serve``` instead of grunt serve.
or open the 'index.html' file in FIREFOX browser
Note: If you see a warning similar to the one shown below on running grunt serve , try increasing the number of open files limit as per the suggestions at:
https://stackoverflow.com/questions/34588/how-do-i-change-the-number-of-open-files-limit-in-linux/ ​
 ```Waiting...Warning: EMFILE, too many open files```
​
You can use these credentials to log in:
``` Username: mifos ```


``` Password: password ```
 
You are done.
