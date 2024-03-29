const inputRange = document.querySelectorAll(".range-input")
const checkbox = document.querySelector("#range-checkbox")
const priceDisplay = document.querySelector(".price")
const DISCOUNT = 0.75
checkbox.checked = false

const offers = [
  {
    pageviews: "10K",
    price: 8,
    perc: 0
  },
  {
    pageviews: "50K",
    price: 12,
    perc: 25
  },
  {
    pageviews: "100K",
    price: 16,
    perc: 50
  },
  {
    pageviews: "500K",
    price: 24,
    perc: 75
  },
  {
    pageviews: "1M",
    price: 36,
    perc: 100
  }
]

inputRange.forEach(input => {
  input.addEventListener("input", e => {
    const views = document.querySelector(".views")
    const {value} = e.target
    e.target.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%`

    for (let {pageviews, price, perc} of offers) {
      if (perc === parseInt(value)) {
        views.textContent = pageviews
        priceDisplay.textContent = `$${checkbox.checked ? (price * DISCOUNT).toString() : price.toString()}.00`
      }
    }
  })
})

checkbox.addEventListener("change", e => {
  const currentPrice = parseInt(priceDisplay.textContent.split(".")[0].substring(1), 10)
  priceDisplay.textContent = `$${checkbox.checked ? (currentPrice * DISCOUNT).toString() : (currentPrice / DISCOUNT).toString()}.00`

})