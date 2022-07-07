const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const axios = require("axios")

app.get("/language/:language", async (req, res) => {
  try {
    let language = req.params.language
    const response = await axios.get("https://restcountries.com/v3.1/lang/" + language)
    let languageCountries = response.data

    // Given a language, return a list of the common name of all countries using this endpoint
    let countryNames = ""
    for (i = 0; i < languageCountries.length; i++) {
      countryNames += languageCountries[i].name.common + ", "
    }
    console.log("List of countries in this apiResponse: " + countryNames)

    // Output in browser
    res.send(`Output: "${language[0].toUpperCase() + language.substring(1)}" 
    is officially used in these countries: 
    <br><br> ${countryNames}`)
  } catch (err) {
    console.error(err)
    res.send("Something went wrong.")
  }
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
