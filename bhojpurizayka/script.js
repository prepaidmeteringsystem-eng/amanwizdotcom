const menuSections = [
  {
    group: "pizza",
    title: "Pizza",
    icon: "🍕",
    meta: "Medium · Extra cheese +₹30",
    note: "Freshly baked vegetarian pizzas",
    items: [
      { name: "Margherita Pizza", p: 99 },
      { name: "Tomato Pizza Sizzling", p: 120 },
      { name: "Crispy Veg Pizza", p: 130 },
      { name: "Cheese Burst Pizza", p: 150 },
      { name: "Farm House Pizza", p: 170 },
      { name: "Mushroom Pizza", p: 180 },
      { name: "Paneer Pizza", p: 180 },
      { name: "Mix Veg Pizza", p: 199 }
    ]
  },
  {
    group: "pizza",
    title: "Burger & Sandwich",
    icon: "🍔",
    meta: "Extra cheese +₹30",
    note: "Quick, cheesy and satisfying",
    items: [
      { name: "Veg Burger", p: 50 },
      { name: "Crispy Aloo Tikki Burger", p: 80 },
      { name: "Paneer Burger", p: 90 },
      { name: "Cheese Burger", p: 100 },
      { name: "Veg Grilled Sandwich", p: 79 },
      { name: "Veg Cucumber Sandwich", p: 89 },
      { name: "Cheese Corn Sandwich", p: 99 }
    ]
  },
  {
    group: "breakfast",
    title: "Breakfast",
    icon: "☀️",
    meta: "Single price",
    note: "A hearty start to the day",
    items: [
      { name: "Aloo Paratha", p: 60 },
      { name: "Onion Paratha", p: 70 },
      { name: "Paneer Paratha", p: 90 },
      { name: "Sattu Ka Paratha", p: 80 },
      { name: "Chole Bhature", p: 69 },
      { name: "Pav Bhaji", p: 69 },
      { name: "Curd (Dahi)", p: 40 }
    ]
  },
  {
    group: "breakfast",
    title: "Crispy Starters",
    icon: "🥔",
    meta: "Medium / Large",
    note: "Crunchy favourites for sharing",
    items: [
      { name: "Crispy Chilli Potato", m: 60, l: 120 },
      { name: "Crispy Corn", m: 110, l: 180 },
      { name: "Honey Chilli Potato", m: 89, l: 150 },
      { name: "French Fries", m: null, l: 80 }
    ]
  },
  {
    group: "breakfast",
    title: "Dosa",
    icon: "🥞",
    meta: "Single price",
    note: "South Indian comfort food",
    items: [
      { name: "Idli", p: 60 },
      { name: "Plain Dosa", p: 80 },
      { name: "Masala Dosa", p: 99 },
      { name: "Onion Dosa", p: 99 },
      { name: "Paneer Dosa", p: 120 },
      { name: "Butter Masala Dosa", p: 150 },
      { name: "Butter Paneer Dosa", p: 160 }
    ]
  },
  {
    group: "breakfast",
    title: "Chaat",
    icon: "🥣",
    meta: "Single price",
    note: "Tangy, spicy street-style favourites",
    items: [
      { name: "Aaloo Tikki Chaat", p: 60 },
      { name: "Samosa Chaat", p: 50 },
      { name: "Matar Tikki Chaat", p: 60 },
      { name: "Papdi Chaat", p: 80 },
      { name: "Pani Puri", detail: "6 pcs", p: 20 },
      { name: "Golgappe Chaat", detail: "6 pcs", p: 60 },
      { name: "Basket Chaat", p: 120 },
      { name: "Raj Kachori", p: 200 },
      { name: "Dahi Bhalla Chaat", p: 150 }
    ]
  },
  {
    group: "chinese",
    title: "China Town",
    icon: "🥢",
    meta: "Medium / Large",
    note: "Available in gravy or dry",
    items: [
      { name: "Chilli Paneer", detail: "Gravy / Dry", m: 90, l: 180 },
      { name: "Veg Manchurian", detail: "Gravy / Dry", m: 80, l: 150 },
      { name: "Paneer Manchurian", detail: "Gravy / Dry", m: 90, l: 170 },
      { name: "Mushroom Chilli", detail: "Gravy / Dry", m: 99, l: 180 },
      { name: "Paneer 65", detail: "Dry", m: 99, l: 180 }
    ]
  },
  {
    group: "chinese",
    title: "Veg Fried Rice",
    icon: "🍚",
    meta: "Medium / Large",
    note: "Wok-tossed rice classics",
    items: [
      { name: "Paneer Fried Rice", m: 99, l: 180 },
      { name: "Veg Fried Rice", m: 80, l: 150 },
      { name: "Chilli Garlic Fried Rice", m: 89, l: 150 },
      { name: "Shezhwan Fried Rice", m: 99, l: 180 }
    ]
  },
  {
    group: "chinese",
    title: "Noodles",
    icon: "🍜",
    meta: "Medium / Large",
    note: "Hot, saucy and full of flavour",
    items: [
      { name: "Veg Chowmein", m: 49, l: 89 },
      { name: "Paneer Chowmein", m: 80, l: 120 },
      { name: "Singapuri Chowmein", m: 80, l: 150 },
      { name: "Veg Hakka Noodles", m: 99, l: 160 },
      { name: "Shezhwan Noodles", m: 70, l: 140 }
    ]
  },
  {
    group: "tandoor",
    title: "Dim Sum Momo",
    icon: "🥟",
    meta: "8 pieces",
    note: "Steamed, fried and tandoori",
    items: [
      { name: "Veg Steam Momo", p: 60 },
      { name: "Veg Fried Momo", p: 80 },
      { name: "Crispy Momo", p: 90 },
      { name: "Malai Momos", p: 110 },
      { name: "Kurkure Momo", p: 99 },
      { name: "Tandoori Momos", detail: "Achari, Haryali or Afghani", p: 99 }
    ]
  },
  {
    group: "tandoor",
    title: "Tandoori Snack",
    icon: "🔥",
    meta: "Medium / Large",
    note: "Smoky vegetarian tandoor favourites",
    items: [
      { name: "Paneer Tikka", m: 130, l: 220 },
      { name: "Malai Paneer Tikka", m: 150, l: 250 },
      { name: "Hariyali Paneer Tikka", m: 130, l: 220 },
      { name: "Afghani Paneer Tikka", m: 130, l: 220 },
      { name: "Mushroom Paneer Tikka", m: 150, l: 280 },
      { name: "Tandoori Mushroom", m: 150, l: 250 },
      { name: "Masala Soya Chaap", m: 90, l: 180 },
      { name: "Malai Soya Chaap", m: 99, l: 200 },
      { name: "Afghani Soya Chaap", m: 90, l: 180 },
      { name: "Garlic Soya Chaap", m: 99, l: 180 },
      { name: "Achari Soya Chaap", m: 90, l: 180 },
      { name: "Soya Chaap Gravy", m: 150, l: 250 },
      { name: "Punjabi Butter Chaap Gravy", m: 170, l: 280 },
      { name: "Tandoori Momo Masala", p: 99 },
      { name: "Tandoori Momo Malai", p: 110 }
    ]
  },
  {
    group: "mains",
    title: "Veggies",
    icon: "🥬",
    meta: "Medium / Large",
    note: "Fresh, flavourful and veggiefull",
    items: [
      { name: "Aloo Matar", m: 80, l: 140 },
      { name: "Aloo Jeera", m: 80, l: 120 },
      { name: "Mix Veg", m: 90, l: 150 },
      { name: "Mushroom Matar", m: 150, l: 250 },
      { name: "Mushroom Masala", m: 160, l: 250 },
      { name: "Mushroom Do Payaja", m: 160, l: 250 },
      { name: "Kashmiri Dum Aloo", m: 150, l: 220 }
    ]
  },
  {
    group: "mains",
    title: "Paneer Curry",
    icon: "🍛",
    meta: "Medium / Large",
    note: "Rich, spicy and paneerlicious",
    items: [
      { name: "Matar Paneer", m: 100, l: 180 },
      { name: "Kadhai Paneer", m: 120, l: 200 },
      { name: "Handi Paneer", m: 140, l: 240 },
      { name: "Paneer Home Style", m: 120, l: 200 },
      { name: "Shahi Paneer", detail: "Yellow gravy", m: 150, l: 240 },
      { name: "Shahi Paneer", detail: "White gravy", m: 180, l: 280 },
      { name: "Paneer Butter Masala", m: 150, l: 280 },
      { name: "Paneer Do Pyaza", m: 150, l: 250 },
      { name: "Paneer Mushroom Masala", m: 180, l: 280 },
      { name: "Paneer Bhujia", m: 180, l: 299 },
      { name: "Paneer Tikka Masala", m: 180, l: 280 },
      { name: "Paneer Malai Kofta", m: 180, l: 299 }
    ]
  },
  {
    group: "mains",
    title: "Dal",
    icon: "🥘",
    meta: "Medium / Large",
    note: "Simple, comforting and soulful",
    items: [
      { name: "Dal Fry", m: 80, l: 120 },
      { name: "Dal Tadka", m: 90, l: 130 },
      { name: "Dal Makhani", m: 100, l: 180 },
      { name: "Choley", m: 60, l: 100 },
      { name: "Dal Fry Butter", m: 90, l: 140 },
      { name: "Special Dal Handi", m: 120, l: 200 }
    ]
  },
  {
    group: "breads",
    title: "Rice Ke Rang",
    icon: "🍲",
    meta: "Medium / Large",
    note: "Biryani, pulao and rice",
    items: [
      { name: "Paneer Tikka Biryani", m: 140, l: 220 },
      { name: "Tandoori Soya Chaap Biryani", m: 120, l: 200 },
      { name: "Veg Dum Biryani", m: 99, l: 180 },
      { name: "Mushroom Biryani", m: 130, l: 240 },
      { name: "Veg Paneer Pulao", m: 110, l: 180 },
      { name: "Plain Rice", m: 60, l: 100 },
      { name: "Jeera Rice", m: 70, l: 120 },
      { name: "Kaju Matar Pulao", m: 90, l: 180 }
    ]
  },
  {
    group: "breads",
    title: "Bread",
    icon: "🫓",
    meta: "Single price",
    note: "Fresh from the tawa and tandoor",
    items: [
      { name: "Tawa Roti", p: 12 },
      { name: "Butter Tawa Roti", p: 15 },
      { name: "Tandoori Roti", p: 12 },
      { name: "Butter Tandoori Roti", p: 15 },
      { name: "Missi Roti", p: 30 },
      { name: "Lachha Paratha", p: 30 },
      { name: "Plain Naan", p: 35 },
      { name: "Butter Naan", p: 45 },
      { name: "Paneer Stuffed Naan", p: 99 },
      { name: "Aaloo Kulcha", p: 70 },
      { name: "Garlic Naan", p: 80 },
      { name: "Paneer Naan", p: 80 },
      { name: "Chur Chur Naan", p: 100 }
    ]
  },
  {
    group: "breads",
    title: "Indian Thali",
    icon: "🍽️",
    meta: "Complete meal",
    note: "Made with love, served with pride",
    items: [
      { name: "Regular Thali", detail: "Dal Fry, Rice, Mix Veg, 4 Butter Roti, Salad, Raita, Achar, Sweet", p: 120 },
      { name: "Premium Thali", detail: "Dal Tadka, Jeera Rice, Mix Veg, 4 Butter Roti, Kadhai Paneer, Salad, Raita, Achar, Sweet", p: 180 },
      { name: "Royal Thali", detail: "Dal Makhani, Pulao, Spl Mix Veg, 4 Butter Roti, Paneer Butter Masala, Salad, Raita, Achar, Papad, Sweet", p: 240 }
    ]
  },
  {
    group: "drinks",
    title: "Mocktail",
    icon: "🍹",
    meta: "Chilled",
    note: "Bright, refreshing sips",
    items: [
      { name: "Ice Cream Soda", p: 60 },
      { name: "Masala Cold Drink", p: 60 },
      { name: "Mint Mojito", p: 90 },
      { name: "Blue Lagoon", p: 100 },
      { name: "Aam Panna", p: 50 },
      { name: "Rose Alpha", p: 60 },
      { name: "Virjin Mojito", p: 80 }
    ]
  },
  {
    group: "drinks",
    title: "Ice Cream",
    icon: "🍨",
    meta: "1 scoop",
    note: "A sweet finish",
    items: [
      { name: "Vanilla", p: 30 },
      { name: "Strawberry", p: 30 },
      { name: "Butterscotch", p: 40 },
      { name: "Chocolate", p: 40 }
    ]
  },
  {
    group: "drinks",
    title: "Shake & Lassi",
    icon: "🥤",
    meta: "Extra topping ₹20",
    note: "Thanda bhi, tasty bhi",
    items: [
      { name: "Vanilla Shake", p: 110 },
      { name: "Strawberry Shake", p: 110 },
      { name: "Butterscotch Shake", p: 129 },
      { name: "Banana Shake", p: 129 },
      { name: "Mango Shake", p: 129 },
      { name: "Kitkat Shake", p: 129 },
      { name: "Chocolate Cold Cofee", p: 139 },
      { name: "Chocolate Shake", p: 129 },
      { name: "Cold Coffee", p: 90 },
      { name: "Oreo Shake", p: 139 },
      { name: "Sweet Lassi", p: 60 },
      { name: "Buttermilk Chaas", p: 50 }
    ]
  },
  {
    group: "combos",
    title: "Special Combos",
    icon: "⭐",
    meta: "Value meals",
    note: "Quick picks for one or two",
    items: [
      { name: "Burger Blast", detail: "Aloo Tikki Burger + Fries + Coke", p: 99 },
      { name: "Burger-Coke Jodi", detail: "2 Aloo Tikki Burger + 2 Coke", p: 120 },
      { name: "Manchu Feast", detail: "Manchurian + Veg Fried Rice + Coke", p: 129 },
      { name: "Burger Momo Mania", detail: "4 pcs Momos + Burger + Coke", p: 129 }
    ]
  },
  {
    group: "combos",
    title: "Desi Swag Combo",
    icon: "✨",
    meta: "Paneer meal",
    note: "Paneer, breads and salad",
    items: [
      { name: "Kadhai Paneer Combo", detail: "Kadhai Paneer + 2 Butter Roti + Salad", p: 120 },
      { name: "Paneer Butter Masala Combo", detail: "Paneer Butter Masala + 2 Lachha Pratha + Salad", p: 160 },
      { name: "Handi Paneer Combo", detail: "Handi Paneer + 2 Baby Naan + Salad", p: 150 }
    ]
  },
  {
    group: "combos",
    title: "Yumster Chinese Combo",
    icon: "🥡",
    meta: "Value meal",
    note: "Chinese favourites together",
    items: [
      { name: "Noodles + Chilly Paneer", detail: "Veg Noodles + Chilly Paneer + Cold Drink", p: 150 },
      { name: "Fry Rice + Manchurian", detail: "Veg Fry Rice + Manchurian + Schezwan Chutney", p: 130 },
      { name: "Fry Rice + Chilly Paneer", detail: "Veg Fry Rice + Chilly Paneer + Cold Drink", p: 150 },
      { name: "Noodles + Manchurian", detail: "Veg Noodles + Manchurian + Schezwan Chutney", p: 130 }
    ]
  },
  {
    group: "combos",
    title: "Teens Treat Combo",
    icon: "🎉",
    meta: "Value meal",
    note: "Fun, filling favourites",
    items: [
      { name: "Value Meal", detail: "Burger + French Fry + Cold Drink", p: 99 },
      { name: "Pizza Treat Combo", detail: "Margherita Pizza + Chilly Paneer + Cold Drink", p: 160 },
      { name: "Burger Treat Combo", detail: "Burger + Honey Chilly Potato + Cold Drink", p: 130 }
    ]
  }
];

const menuArt = Object.freeze({
  "Pizza": "pizza.jpg",
  "Burger & Sandwich": "burger.jpg",
  "Breakfast": "breakfast.jpg",
  "Crispy Starters": "crispy.jpg",
  "Dosa": "dosa.jpg",
  "Chaat": "chaat.jpg",
  "China Town": "chinese.jpg",
  "Veg Fried Rice": "fried-rice.jpg",
  "Noodles": "noodles.jpg",
  "Dim Sum Momo": "momo.jpg",
  "Tandoori Snack": "tandoor.jpg",
  "Veggies": "veggies.jpg",
  "Paneer Curry": "hero-paneer.jpg",
  "Dal": "dal.jpg",
  "Rice Ke Rang": "rice.jpg",
  "Bread": "bread.jpg",
  "Indian Thali": "thali.jpg",
  "Mocktail": "drinks.jpg",
  "Ice Cream": "icecream.jpg",
  "Shake & Lassi": "shakes.jpg",
  "Special Combos": "combos.jpg",
  "Desi Swag Combo": "thali.jpg",
  "Yumster Chinese Combo": "combos.jpg",
  "Teens Treat Combo": "burger.jpg"
});

const menuContent = document.querySelector("#menuContent");
const searchInput = document.querySelector("#menuSearch");
const resultCount = document.querySelector("#resultCount");
const menuProgress = document.querySelector("#menuProgress");
const menuProgressText = document.querySelector("#menuProgressText");
const menuLoadMore = document.querySelector("#menuLoadMore");
const filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-chip"));
const compactMenuQuery = window.matchMedia("(max-width: 1024px)");
let activeFilter = "all";
let visibleSectionLimit = 4;
let searchTimer = 0;

const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const slowConnection = Boolean(connection && (connection.saveData || /(^|-)2g$/.test(connection.effectiveType || "")));
const lowMemoryDevice = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;
const lowCoreDevice = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
const liteMode = slowConnection || lowMemoryDevice || lowCoreDevice;
document.documentElement.classList.toggle("lite-mode", liteMode);

/* Navigation is initialized before the menu so it survives any menu rendering error. */
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function setNavigation(open) {
  if (!menuToggle || !siteNav) return;
  const shouldOpen = Boolean(open) && compactMenuQuery.matches;
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  menuToggle.setAttribute("aria-label", shouldOpen ? "Close navigation" : "Open navigation");
  siteNav.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("nav-open", shouldOpen);

  if (compactMenuQuery.matches) {
    siteNav.setAttribute("aria-hidden", String(!shouldOpen));
  } else {
    siteNav.removeAttribute("aria-hidden");
  }
}

if (menuToggle && siteNav) {
  setNavigation(false);
  menuToggle.addEventListener("click", function () {
    setNavigation(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  siteNav.addEventListener("click", function (event) {
    if (event.target === siteNav || event.target.closest("a")) setNavigation(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setNavigation(false);
  });
  window.addEventListener("pageshow", function () { setNavigation(false); });
}

const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
    return htmlEntities[character];
  });
}

function hasOwn(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function priceMarkup(item) {
  const hasDualPrice = hasOwn(item, "m") || hasOwn(item, "l");
  if (hasDualPrice) {
    const medium = item.m === null ? "—" : `₹${item.m}`;
    const large = item.l === null ? "—" : `₹${item.l}`;
    return `<div class="menu-price dual"><span><small>Medium</small>${medium}</span><span><small>Large</small>${large}</span></div>`;
  }
  return `<div class="menu-price">₹${item.p}</div>`;
}

function itemMarkup(item) {
  return `
    <div class="menu-item">
      <div class="menu-item-name">
        <strong>${escapeHTML(item.name)}</strong>
        ${item.detail ? `<small>${escapeHTML(item.detail)}</small>` : ""}
      </div>
      ${priceMarkup(item)}
    </div>`;
}

function tuneMenuArt() {
  if (compactMenuQuery.matches) return;
  document.querySelectorAll(".menu-card-art").forEach((art) => {
    art.classList.toggle("is-compact", art.getBoundingClientRect().height < 120);
  });
}

function pageSize() {
  if (!compactMenuQuery.matches) return Number.POSITIVE_INFINITY;
  if (liteMode) return 2;
  return window.innerWidth <= 560 ? 3 : 4;
}

function sectionMarkup(section, items, includeArt) {
  const art = includeArt ? `
        <div class="menu-card-art" aria-hidden="true">
          <img src="assets/${menuArt[section.title] || "hero-paneer.jpg"}" alt="" loading="lazy" decoding="async" width="900" height="560">
          <span class="menu-art-stamp">${section.icon}</span>
        </div>` : "";

  return `
      <article class="menu-category">
        <div class="menu-category-head">
          <div>
            <span class="category-icon" aria-hidden="true">${section.icon}</span>
            <div><h3>${escapeHTML(section.title)}</h3><p>${escapeHTML(section.note)}</p></div>
          </div>
          <span>${escapeHTML(section.meta)}</span>
        </div>
        <div class="menu-items">${items.map(itemMarkup).join("")}</div>
        ${art}
      </article>`;
}

function renderMenu() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const matchedSections = [];
  let matchedItemCount = 0;

  menuSections.forEach(function (section) {
    if (activeFilter !== "all" && section.group !== activeFilter) return;

    const sectionMatches = `${section.title} ${section.note}`.toLocaleLowerCase().includes(query);
    const items = section.items.filter((item) => {
      if (!query || sectionMatches) return true;
      return `${item.name} ${item.detail || ""}`.toLocaleLowerCase().includes(query);
    });

    if (!items.length) return;
    matchedItemCount += items.length;
    matchedSections.push({ section: section, items: items });
  });

  const compact = compactMenuQuery.matches;
  const sectionCount = compact ? Math.min(visibleSectionLimit, matchedSections.length) : matchedSections.length;
  const sectionsToRender = matchedSections.slice(0, sectionCount);
  const renderedSections = sectionsToRender.map(function (entry) {
    return sectionMarkup(entry.section, entry.items, !compact);
  });

  if (!renderedSections.length) {
    menuContent.innerHTML = `<div class="empty-menu"><b>No dish found</b>Try a shorter search or select another category.</div>`;
  } else {
    menuContent.innerHTML = renderedSections.join("");
  }

  resultCount.textContent = `${matchedItemCount} ${matchedItemCount === 1 ? "item" : "items"}`;
  menuContent.setAttribute("aria-busy", "false");

  const remainingSections = matchedSections.length - sectionCount;
  menuProgress.hidden = !compact || remainingSections <= 0;
  if (!menuProgress.hidden) {
    menuProgressText.textContent = `Showing ${sectionCount} of ${matchedSections.length} categories`;
    menuLoadMore.textContent = `Show more (${remainingSections} left)`;
  }

  if (!compact) requestAnimationFrame(tuneMenuArt);
}

function safeRenderMenu() {
  try {
    renderMenu();
  } catch (error) {
    console.error("Menu rendering failed", error);
    menuContent.setAttribute("aria-busy", "false");
    menuContent.innerHTML = `<div class="empty-menu"><b>Menu could not load</b><a href="info%20pdf.pdf" target="_blank" rel="noopener">Open the original menu PDF</a></div>`;
    resultCount.textContent = "Menu PDF available";
    menuProgress.hidden = true;
  }
}

function resetMenuWindow() {
  visibleSectionLimit = pageSize();
  safeRenderMenu();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    resetMenuWindow();
  });
});

Array.prototype.slice.call(document.querySelectorAll("[data-menu-shortcut]")).forEach(function (shortcut) {
  shortcut.addEventListener("click", function () {
    const filterButton = filterButtons.find(function (button) {
      return button.dataset.filter === shortcut.dataset.menuShortcut;
    });
    if (filterButton) filterButton.click();
    document.querySelector("#menu").scrollIntoView({ behavior: liteMode ? "auto" : "smooth" });
  });
});

searchInput.addEventListener("input", function () {
  window.clearTimeout(searchTimer);
  menuContent.setAttribute("aria-busy", "true");
  searchTimer = window.setTimeout(resetMenuWindow, 160);
});

menuLoadMore.addEventListener("click", function () {
  visibleSectionLimit += pageSize();
  safeRenderMenu();
});

visibleSectionLimit = pageSize();
safeRenderMenu();

const comboFilterLink = document.querySelector("[data-combo-filter]");
if (comboFilterLink) {
  comboFilterLink.addEventListener("click", function (event) {
    event.preventDefault();
    const comboButton = filterButtons.find((button) => button.dataset.filter === "combos");
    if (comboButton) comboButton.click();
    document.querySelector("#menu").scrollIntoView({ behavior: liteMode ? "auto" : "smooth" });
  });
}

const header = document.querySelector(".site-header");
if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

let resizeFrame;
let wasCompact = compactMenuQuery.matches;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(function () {
    const isCompact = compactMenuQuery.matches;
    if (!isCompact) setNavigation(false);
    if (isCompact !== wasCompact) {
      wasCompact = isCompact;
      resetMenuWindow();
    } else if (!isCompact) {
      tuneMenuArt();
    }
  });
}, { passive: true });

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
