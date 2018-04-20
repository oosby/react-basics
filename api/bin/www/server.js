const app = require('../../app');

const { PORT = 8200 } = process.env;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
