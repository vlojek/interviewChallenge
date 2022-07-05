const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")

app.get("/language/:language", async (req, res) => {
  try {
    let language = req.params.language
    const response = await axios.get("https://restcountries.com/v3.1/lang/" + language)
    languageCountries = response.data

    // given a language, return a list of the common name of all countries using this endpoint

    let count = 0
    let countryNames = ""
    for (i = 0; i < languageCountries.length; i++) {
      count += 1
      countryNames += languageCountries[i].name.common + "<br>"
    }
    console.log(countryNames)

    // find total population that speaks this language

    // find smallest country which speaks this language

    res.send(`Output: <br><br> ${countryNames}`)
  } catch (err) {
    console.error(err)
    res.send("Something went wrong.")
  }
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
