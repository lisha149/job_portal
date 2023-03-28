const app = require("./config/express.config");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port :http://localhost:${process.env.PORT}`);
});
