# Install Git
apt-get -y install git

# Install MongoDB
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list
apt-get -y update
apt-get -y install mongodb-org

# Install NodeJS
apt-get -y install python-software-properties python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get -y update
apt-get -y install nodejs
npm update -g npm

# Install Global NPM Packages
npm install -g bower
npm install -g grunt-cli
npm install -g nodemon
