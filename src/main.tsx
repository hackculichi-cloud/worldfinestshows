import { RideSafety } from "./components/RideSafety";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Info,
  Menu,
  Play,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-600.css";
import "@fontsource/roboto/latin-700.css";
import "@fontsource/merriweather/latin-400.css";
import "./styles.css";
import { Footer } from "./components/Footer";

const official = "https://www.worldsfinestshows.com";
const asset = (name: string) => `${import.meta.env.BASE_URL}reference/${name}`;
const categories = [
  {
    name: "Kids Rides",
    image: "kids-slide.jpeg",
    alt: "The colourful Sky Slide and Fun Slide",
    description: "Slides and smaller rides for our younger adventurers.",
    path: "/kids-rides/",
  },
  {
    name: "Family Rides",
    image: "carousel.jpg",
    alt: "The traditional World’s Finest Shows carousel",
    description: "Carousels and classic midway rides to enjoy together.",
    path: "/family-rides/",
  },
  {
    name: "Thrill Rides",
    image: "pharaohs-fury.jpg",
    alt: "Guests enjoying a colourful midway thrill ride",
    description: "Higher-energy rides for guests looking for a bigger thrill.",
    path: "/thrill-rides/",
  },
  {
    name: "Games",
    image: "duck-pond.jpg",
    alt: "The colourful Duck Pond midway game",
    description:
      "Midway games, colourful prizes and a little friendly competition.",
    path: "/games/",
  },
  {
    name: "Concessions",
    image: "candy-factory.jpg",
    alt: "The Candy Factory concession stand",
    description: "Cotton candy, sweet treats and favourite fair-day snacks.",
    path: "/concessions/",
  },
  {
    name: "Guest Amenities",
    image: "rest-area.jpg",
    alt: "A shaded guest rest area at the fair",
    description: "Shaded tables and places to rest between rides.",
    path: "/guest-amenities/",
  },
];
type Category = (typeof categories)[number];
const quickLinks = [
  { title: "Passes", icon: "icon-passes.png", href: "#passes" },
  { title: "Events", icon: "icon-events.png", href: "#events" },
  { title: "Attractions", icon: "icon-attractions.png", href: "#attractions" },
  { title: "Newsletter", icon: "icon-newsletter.png", href: "#newsletter" },
];

function SectionTitle({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="section-title">
      <h2
        id={
          title === "Mega Passes"
            ? "passes-title"
            : `${title.toLowerCase()}-title`
        }
      >
        {title}
      </h2>
      <img src={asset(icon)} alt="" width="80" height="80" />
    </div>
  );
}

const isSafetyPage = window.location.pathname.endsWith("/ride-safety.html");
const pageLink = (hash: string) => (isSafetyPage ? `./${hash}` : hash);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"about" | "attractions" | null>(
    null,
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Attractions");
  const [selected, setSelected] = useState<Category | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dialogOpen = !!selected || cartOpen || videoOpen;
  const filteredCategories =
    activeCategory === "All Attractions"
      ? categories
      : categories.filter((c) => c.name === activeCategory);
  const searchResults = query.trim()
    ? categories.filter((c) =>
        `${c.name} ${c.alt} ${c.description}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
      )
    : [];

  useEffect(() => {
    if (dialogOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [dialogOpen]);
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(null);
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setDropdown(null);
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, []);

  const closeDialog = () => {
    setSelected(null);
    setCartOpen(false);
    setVideoOpen(false);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdown(null);
  };
  const filterAttractions = (name: string) => {
    setActiveCategory(name);
    closeMenu();
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" ref={headerRef}>
        <div className="header-inner container">
          <a
            href={pageLink("#home")}
            className="brand"
            aria-label="World’s Finest Shows home"
            onClick={closeMenu}
          >
            <img
              src={asset("logo.png")}
              alt="World’s Finest Shows"
              width="250"
              height="39"
            />
          </a>
          <nav
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a
              className="home-link"
              href={pageLink("#home")}
              onClick={closeMenu}
            >
              Home
            </a>
            <div className="nav-dropdown">
              <button
                onClick={() =>
                  setDropdown(dropdown === "about" ? null : "about")
                }
                aria-expanded={dropdown === "about"}
                aria-controls="about-menu"
              >
                About <ChevronDown size={14} />
              </button>
              {dropdown === "about" && (
                <div id="about-menu" className="dropdown-menu">
                  {[
                    ["Pricing", "/?page_id=579"],
                    ["Advance Sales", "/advance-sales/"],
                    ["Ride Safety", "/ride-safety/"],
                    ["Employment", "/employment/"],
                    ["Your Next Event", "/your-next-event/"],
                  ].map(([title, path]) => (
                    <a
                      key={path}
                      href={
                        path === "/ride-safety/"
                          ? "./ride-safety.html"
                          : official + path
                      }
                      target={path === "/ride-safety/" ? undefined : "_blank"}
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      {title} <ArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={pageLink("#events")} onClick={closeMenu}>
              Events
            </a>
            <div className="nav-dropdown">
              <button
                onClick={() =>
                  setDropdown(dropdown === "attractions" ? null : "attractions")
                }
                aria-expanded={dropdown === "attractions"}
                aria-controls="attractions-menu"
              >
                Attractions <ChevronDown size={14} />
              </button>
              {dropdown === "attractions" && (
                <div id="attractions-menu" className="dropdown-menu">
                  {["All Attractions", ...categories.map((c) => c.name)].map(
                    (name) => (
                      <a
                        key={name}
                        href={pageLink("#attractions")}
                        onClick={() => filterAttractions(name)}
                      >
                        {name}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
            <a href={pageLink("#contact")} onClick={closeMenu}>
              Contact
            </a>
          </nav>
          <div className="header-actions">
            <button
              aria-label="View shopping cart"
              onClick={() => {
                setCartOpen(true);
                closeMenu();
              }}
            >
              <ShoppingCart size={18} fill="currentColor" />
            </button>
            <button
              aria-label={searchOpen ? "Close search" : "Search attractions"}
              aria-expanded={searchOpen}
              aria-controls="site-search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <X size={21} /> : <Search size={21} />}
            </button>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setDropdown(null);
              }}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div id="site-search" className="search-panel">
            <div className="container">
              <label htmlFor="search-input">Find your kind of fun</label>
              <div className="search-field">
                <Search size={21} />
                <input
                  id="search-input"
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search rides, games, food…"
                  type="search"
                />
              </div>
              <div className="search-results" aria-live="polite">
                {query.trim() ? (
                  searchResults.length ? (
                    searchResults.map((result) => (
                      <button
                        key={result.name}
                        onClick={() => {
                          setSelected(result);
                          setSearchOpen(false);
                        }}
                      >
                        {result.name}
                        <ArrowRight size={16} />
                      </button>
                    ))
                  ) : (
                    <p>
                      No attractions match “{query}”. Try “carousel”, “games”,
                      or “rides”.
                    </p>
                  )
                ) : (
                  <p>Try “carousel”, “games”, or “rides”.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {isSafetyPage ? (
        <RideSafety />
      ) : (
        <main id="main">
          <section
            id="home"
            className="hero colour-rule"
            aria-labelledby="hero-title"
          >
            <div
              className="hero-photo"
              role="img"
              aria-label="The World’s Finest Shows Ferris wheel under a bright blue sky"
            />
            <div className="hero-inner container">
              <button
                className="watch-video"
                onClick={() => setVideoOpen(true)}
              >
                <span>
                  <Play size={17} fill="currentColor" />
                </span>
                Watch the midway
              </button>
              <div className="hero-panel">
                <h1 id="hero-title">World’s Finest Shows</h1>
                <p>
                  Ontario’s premiere midway provider. We provide world-class fun
                  to over 50 fairs, festivals, and events each year.{" "}
                  <a
                    href={pageLink("#attractions")}
                    onClick={() => setActiveCategory("Games")}
                  >
                    Exciting games
                  </a>
                  ,{" "}
                  <a
                    href={pageLink("#attractions")}
                    onClick={() => setActiveCategory("Concessions")}
                  >
                    delicious food
                  </a>
                  , and{" "}
                  <a
                    href={pageLink("#attractions")}
                    onClick={() => setActiveCategory("Thrill Rides")}
                  >
                    thrill rides
                  </a>
                  , and{" "}
                  <a
                    href={pageLink("#attractions")}
                    onClick={() => setActiveCategory("Kids Rides")}
                  >
                    kids rides
                  </a>
                  .
                </p>
                <div className="quick-links">
                  {quickLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.title}
                      aria-label={link.title}
                      onClick={() => {
                        if (link.title === "Attractions")
                          setActiveCategory("All Attractions");
                      }}
                    >
                      <img
                        src={asset(link.icon)}
                        alt={link.title}
                        width="76"
                        height="76"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="passes"
            className="skyline-section passes-section colour-rule"
            aria-labelledby="passes-title"
          >
            <div className="container">
              <SectionTitle title="Mega Passes" icon="icon-passes.png" />
              <p className="section-intro">Your next great day starts here.</p>
              <div className="pass-grid">
                <article className="pass-card">
                  <a
                    href={`${official}/event/norfolk-county-fair-horse-show/`}
                    target="_blank"
                    rel="noreferrer"
                    className="pass-image"
                    aria-label="Official Norfolk County Fair and Horse Show details"
                  >
                    <img
                      src={asset("norfolk-fair.jpg")}
                      alt="Norfolk County Fair Ferris wheel"
                      width="750"
                      height="750"
                      loading="lazy"
                    />
                  </a>
                  <div className="pass-content">
                    <h3>
                      <a
                        href={`${official}/event/norfolk-county-fair-horse-show/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Norfolk County Fair &amp; Horse Show
                      </a>
                    </h3>
                    <p>
                      Online sales are handled by Norfolk County Fair &amp;
                      Horse Show.
                    </p>
                    <p>
                      Visit the official event page for ticket information and
                      current availability.
                    </p>
                    <a
                      href={`${official}/event/norfolk-county-fair-horse-show/`}
                      target="_blank"
                      rel="noreferrer"
                      className="read-more"
                    >
                      Read More »
                      <span className="sr-only">
                        {" "}
                        about Norfolk County Fair &amp; Horse Show
                      </span>
                    </a>
                  </div>
                </article>
                <article className="pass-card">
                  <a
                    href={`${official}/event/brigden-fair/`}
                    target="_blank"
                    rel="noreferrer"
                    className="pass-image"
                    aria-label="Official Brigden Fair details"
                  >
                    <img
                      src={asset("brigden-fair.jpg")}
                      alt="Brigden Fair Ferris wheel"
                      width="750"
                      height="750"
                      loading="lazy"
                    />
                  </a>
                  <div className="pass-content">
                    <h3>
                      <a
                        href={`${official}/event/brigden-fair/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Brigden Fair
                      </a>
                    </h3>
                    <p>More midway memories, more reasons to smile.</p>
                    <p>
                      See the official event page for ticket details,
                      availability, and updates.
                    </p>
                    <a
                      href={`${official}/event/brigden-fair/`}
                      target="_blank"
                      rel="noreferrer"
                      className="read-more"
                    >
                      Read More »
                      <span className="sr-only"> about Brigden Fair</span>
                    </a>
                  </div>
                </article>
              </div>
              <p className="ticket-note">
                <Info size={14} /> Reference events from the official site. This
                preview does not sell tickets.
              </p>
            </div>
          </section>

          <section
            id="events"
            className="photo-section events-section colour-rule"
            aria-labelledby="events-title"
          >
            <div className="container photo-section-inner">
              <SectionTitle title="Events" icon="icon-events.png" />
              <div className="pink-panel event-panel">
                <h3>Upcoming Events</h3>
                <p className="empty-events">
                  <CalendarDays size={22} />
                  <span>There are no upcoming events.</span>
                </p>
                <p className="calendar-note">
                  Official calendar snapshot · October 26, 2026
                </p>
                <a
                  href={`${official}/events/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the official calendar <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </section>

          <section
            id="attractions"
            className="skyline-section attractions-section colour-rule"
            aria-labelledby="attractions-title"
          >
            <div className="container">
              <SectionTitle title="Attractions" icon="icon-attractions.png" />
              <p className="attractions-intro">
                Rides, games and fair-day favourites. Choose a category to take
                a closer look.
              </p>
              <div
                className="attraction-filters"
                role="group"
                aria-label="Filter attractions"
              >
                {[
                  "All Attractions",
                  "Kids Rides",
                  "Family Rides",
                  "Thrill Rides",
                  "Games",
                  "Concessions",
                  "Guest Amenities",
                ].map((name) => (
                  <button
                    key={name}
                    aria-pressed={name === activeCategory}
                    className={name === activeCategory ? "active" : ""}
                    onClick={() => setActiveCategory(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div
                className="attraction-results"
                role="status"
                aria-live="polite"
              >
                <span>{activeCategory}</span>
                <span>
                  {filteredCategories.length}{" "}
                  {filteredCategories.length === 1 ? "category" : "categories"}
                </span>
              </div>
              <div className="attraction-grid">
                {filteredCategories.map((category) => (
                  <article key={category.name} className="attraction-card">
                    <button
                      className="attraction-image"
                      aria-label={`Preview ${category.name}`}
                      onClick={() => setSelected(category)}
                    >
                      <img
                        src={asset(category.image)}
                        alt={category.alt}
                        loading="lazy"
                        width="460"
                        height="306"
                      />
                    </button>
                    <div className="attraction-copy">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                      <button
                        className="show-category"
                        onClick={() => setSelected(category)}
                      >
                        View details{" "}
                        <span className="sr-only">about {category.name}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="button show-all"
                onClick={() => {
                  setActiveCategory("All Attractions");
                  document.getElementById("attractions")?.scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches
                      ? "instant"
                      : "smooth",
                  });
                }}
              >
                SHOW ALL
              </button>
            </div>
          </section>

          <section
            id="newsletter"
            className="photo-section newsletter-section colour-rule"
            aria-labelledby="newsletter-title"
          >
            <div
              className="footer-bunting newsletter-bunting"
              aria-hidden="true"
            >
              {Array.from({ length: 14 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className="container photo-section-inner">
              <SectionTitle title="Newsletter" icon="icon-newsletter.png" />
              <div className="pink-panel newsletter-panel">
                {signedUp ? (
                  <div className="signup-success" role="status">
                    <Check size={28} />
                    <h3>Subscriptions coming soon</h3>
                    <p>
                      Email subscriptions are not available yet. Please check
                      back soon.
                    </p>
                    <button
                      onClick={() => {
                        setSignedUp(false);
                        setEmail("");
                      }}
                    >
                      Try another email <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSignedUp(true);
                    }}
                  >
                    <h3>A little more midway magic.</h3>
                    <p>Good times, straight to your inbox.</p>
                    <label htmlFor="newsletter-email">Email address</label>
                    <div className="newsletter-input">
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe to newsletter"
                      >
                        <ArrowRight size={22} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer
        onExploreAttractions={() => setActiveCategory("All Attractions")}
        onPlayVideo={() => setVideoOpen(true)}
      />

      <dialog
        className={videoOpen ? "detail-dialog video-dialog" : "detail-dialog"}
        ref={dialogRef}
        aria-labelledby={
          selected
            ? "attraction-dialog-title"
            : videoOpen
              ? "video-dialog-title"
              : "cart-dialog-title"
        }
        onCancel={closeDialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close dialog"
          onClick={closeDialog}
        >
          <X size={22} />
        </button>
        {selected ? (
          <>
            <img
              className="dialog-image"
              src={asset(selected.image)}
              alt={selected.alt}
            />
            <div className="dialog-body">
              <span className="dialog-eyebrow">
                WORLD’S FINEST SHOWS · ATTRACTIONS
              </span>
              <h2 id="attraction-dialog-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <p className="ride-note">
                Ride availability and height restrictions vary by event. Check
                the posted requirements and follow the operator’s instructions.
              </p>
              <a
                className="button"
                href={official + selected.path}
                target="_blank"
                rel="noreferrer"
              >
                Explore on the official site <ArrowUpRight size={17} />
              </a>
            </div>
          </>
        ) : videoOpen ? (
          <div className="dialog-body">
            <h2 id="video-dialog-title">A day on the midway</h2>
            <p>
              The original video featured on the World’s Finest Shows website.
            </p>
            <iframe
              src="https://www.youtube-nocookie.com/embed/S1U24VN8z-U?autoplay=1&rel=0"
              title="World’s Finest Shows official midway video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              className="video-fallback"
              href="https://youtu.be/S1U24VN8z-U"
              target="_blank"
              rel="noreferrer"
            >
              Watch directly on YouTube <ArrowUpRight size={15} />
            </a>
          </div>
        ) : (
          <div className="dialog-body cart-body">
            <ShoppingCart size={38} />
            <h2 id="cart-dialog-title">Your next fair day awaits.</h2>
            <p>
              Your preview cart is empty. Ticket purchases are handled on the
              official website; this mockup does not accept payments.
            </p>
            <a
              className="button"
              href={pageLink("#passes")}
              onClick={closeDialog}
            >
              Explore Mega Passes <ArrowRight size={17} />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
