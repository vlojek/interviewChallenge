const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")

app.get("/language/:languageName", async (req, res) => {
  try {
    let languageName = req.params.languageName
    const response = await axios.get("https://restcountries.com/v3.1/lang/" + languageName)
    const countries = response.data

    languageName = response.data[0].region

    res.send(`Test Output: <br><br> ${countries}`)
  } catch (err) {
    console.error(err)
    res.send("Something went wrong.")
  }
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
