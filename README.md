# Ghetto CD
### What this is
A quick and dirty trick for continuous deployment.

### Usage
Run this little node thing with forever on a posix machine and a port accessible from the internet. Setup a webhook to call your server whenever you push to github. 

Github will call this node application, which will call the bash script and do a git pull
