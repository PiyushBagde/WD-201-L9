/* eslint-disable quotes */
/* eslint-disable semi */
const app = require("./app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started express sever on port ${PORT}`);
});
