function log(m) {
  console.log(`[${ new Date().toUTCString() }]: ${ m }`);
}

module.exports = log;