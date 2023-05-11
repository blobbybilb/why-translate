let translations = JSON.parse(await (await fetch("/wt-data.json")).text())

/* for v2
let translationsStatus = "loading"
async function loadTranslations() {
  try {
    translations = JSON.parse(await (await fetch("/wt-data.json")).text())
  } catch (e) {
    console.log("why?translate: translations file not loaded")
  }
  translationsStatus = "loaded"
}
*/

async function setLanguage(lang = navigator.language) {
  lang = lang.split("-")[0]

  document.querySelectorAll("[wt]").forEach((element) => {
    if (element.getAttribute(`wt-${lang}`)) {
      return
    }

    if (!translations[element.getAttribute("wt")][lang]) {
      return
    }

    element.textContent = translations[element.getAttribute("wt")][lang]
  })

  document.querySelectorAll(`[wt-${lang}]`).forEach((element) => {
    element.textContent = element.getAttribute(`wt-${lang}`)
  })
}

window.WT = {
  setLanguage,
}

WT.setLanguage("fr")
