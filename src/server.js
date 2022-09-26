const app = require('./app');
require('dotenv').config();

const port = process.env.NODE_DOCKER_PORT || 3001

app.listen(port, async() => console.log(`server running on port ${port}!`))