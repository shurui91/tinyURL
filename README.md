# tinyURL
A full-stack project that handles at least 10k of URL processing request per second.

## How to use
### How to use locally
* Fork or download the zip file; after unzipping, get into the folder, then do
    * ```npm install```
    * ```nodemon server.js```
* Then check out the project at ```localhost:3000```

### How to build Docker image file with this repo
* After unzipping the repo, go to ```/app```.
* ```docker build -t 'xxx/tinyurl' .```, do not forget the dot at the end. xxx part could be anything.
* To run your docker image, ```docker run --name tinyurl -p 3000:3000 -d xxx/tinyurl```
    * If your port 3000 is not available (most likely because of NodeJS process is still running), run ```killall -9 node```

### Some other Docker commands
* ```docker images```
* ```docker rm xxxxxx```, remove a specific container by ID
* ```docker ps -a```, to show all the containers

### To upload a Docker image to nginx
* ```docker-compose up --build```
