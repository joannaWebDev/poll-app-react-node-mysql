$clone  
$npm i  


## Server
cd src  
nodemon server.js  

## Client
npm run start  


SERVER From scratch  
cd server  
npm init  
npm install express cors body-parser  
npm install nodemon --save-dev  

# Demo
https://crud-poll-react-node.herokuapp.com/

Deploy on Heroku
heroku login
$ cd nodejs-express-mysql
$ git init
$ git add .
$ git commit -m "initial commit"
$ heroku create bezkoder-nodejs-mysql
$ git remote -v
$ git push heroku master

cd client
npm run build
move build folder to server

cd root
git add .
git commit -m ""
git push
git push heroku main