const app = require('../../app');

const { PORT = 80 } = process.env;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
