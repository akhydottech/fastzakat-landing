// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const closeMenuButton = document.getElementById("close-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full")
    mobileMenu.classList.add("translate-x-0")
  })

  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0")
    mobileMenu.classList.add("translate-x-full")
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
      mobileMenu.classList.remove("translate-x-0")
      mobileMenu.classList.add("translate-x-full")
    }
  })
})

// Create placeholder SVG images
function createPlaceholderSVG(width, height) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle  height='${height}' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23475569'%3EPlaceholder%3C/text%3E%3C/svg%3E`
}

// Replace all placeholder.svg sources with actual SVG data
document.addEventListener("DOMContentLoaded", () => {
  const placeholderImages = document.querySelectorAll('img[src^="/placeholder.svg"]')

  placeholderImages.forEach((img) => {
    const width = img.width || 100
    const height = img.height || 100
    img.src = createPlaceholderSVG(width, height)
  })
})

// Simple animation for counters
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".text-4xl.font-bold.text-emerald-600")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const countTo = Number.parseInt(target.innerText.replace(/[^\d]/g, ""))
          let count = 0
          const duration = 2000 // 2 seconds
          const increment = Math.ceil(countTo / (duration / 30))

          const timer = setInterval(() => {
            count += increment
            if (count >= countTo) {
              target.innerText = "+" + countTo
              clearInterval(timer)
            } else {
              target.innerText = "+" + count
            }
          }, 30)

          observer.unobserve(target)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    observer.observe(counter)
  })
})

