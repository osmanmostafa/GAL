const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get('/',(req,res) => {
    res.send('hi all')
})
// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});