document.addEventListener("DOMContentLoaded", () => {
  const articleFilters = document.querySelectorAll(".category-filter");
  const articleCards = document.querySelectorAll(".article-card");

  if (!articleFilters.length || !articleCards.length) {
    return;
  }

  articleFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selectedCategory = filter.dataset.filter;

      articleFilters.forEach((button) => {
        button.classList.remove("active");
      });

      filter.classList.add("active");

      articleCards.forEach((card) => {
        const cardCategory = card.dataset.category;

        if (selectedCategory === "toate" || cardCategory === selectedCategory) {
          card.classList.remove("is-hidden");
          card.classList.add("is-visible");
        } else {
          card.classList.remove("is-visible");
          card.classList.add("is-hidden");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const workshopButtons = document.querySelectorAll("[data-workshop-filter]");

  const workshopGroups = document.querySelectorAll("[data-workshop-group]");

  const title = document.querySelector("#workshop-list-title");
  const description = document.querySelector("#workshop-list-description");

  if (!workshopButtons.length || !workshopGroups.length) {
    return;
  }

  const workshopContent = {
    parinti: {
      title: "Pentru părinți",
      description:
        "Întâlniri în jurul unor teme care apar frecvent în relația dintre părinte și copil.",
    },

    adolescenti: {
      title: "Pentru copii și adolescenți · 10–18 ani",
      description:
        "Ateliere adaptate vârstei, în jurul emoțiilor, relațiilor, imaginii de sine și comunicării.",
    },
  };

  workshopButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.workshopFilter;

      workshopButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      workshopGroups.forEach((group) => {
        group.hidden = group.dataset.workshopGroup !== filter;
      });

      if (workshopContent[filter]) {
        title.textContent = workshopContent[filter].title;
        description.textContent = workshopContent[filter].description;
      }
    });
  });
});

/* =========================================
   MOBILE MENU
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector("#site-navigation");

  if (!menuToggle || !siteNavigation) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNavigation.classList.toggle("is-open");

    menuToggle.classList.toggle("is-open", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Închide meniul" : "Deschide meniul",
    );
  });

  /* Închide meniul după alegerea unei pagini */

  const navigationLinks = siteNavigation.querySelectorAll("a");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNavigation.classList.remove("is-open");
      menuToggle.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Deschide meniul");
    });
  });
});

// Validare suplimentară în browser; serverul trebuie să valideze separat.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#secure-contact-form");
  if (!form) return;
  const error = document.querySelector("#form-error");
  form.addEventListener("submit", (event) => {
    error.hidden = true;
    error.textContent = "";
    const name = form.querySelector("#nume").value;
    const message = form.querySelector("#mesaj").value;
    const phone = form.querySelector("#telefon").value;
    const invalid = [name, message, phone].some(value => /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value));
    if (invalid || name.trim().length < 2 || !form.checkValidity()) {
      event.preventDefault();
      error.textContent = "Verifică datele introduse și limitele câmpurilor.";
      error.hidden = false;
      form.reportValidity();
    }
  });
});
