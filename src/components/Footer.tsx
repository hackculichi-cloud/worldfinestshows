import {
  Mail,
  Link,
  Music2,
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import "./Footer.css";

interface FooterProps {
  logoSrc: string;
  onExploreAttractions: () => void;
  onPlayVideo: () => void;
}

export function Footer({
  logoSrc,
  onExploreAttractions,
  onPlayVideo,
}: FooterProps) {
  return (
    <footer
      id="contact"
      className="site-footer"
      aria-label="Contact and useful links"
    >
      <div className="footer-bunting" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="container">
        <a
          className="footer-brand"
          href="#home"
          aria-label="World’s Finest Shows home"
        >
          <img
            src={logoSrc}
            alt="World’s Finest Shows"
            width="260"
            height="40"
            loading="lazy"
          />
        </a>

        <div className="footer-grid">
          <section
            className="footer-links"
            aria-labelledby="footer-links-title"
          >
            <h2 id="footer-links-title">
              <Link size={18} aria-hidden="true" /> Quick links
            </h2>
            <nav aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#events">Events</a>
              <a href="#attractions" onClick={onExploreAttractions}>
                Attractions
              </a>
              <a href="#passes">Mega Passes</a>
              <a
                href="https://www.worldsfinestshows.com/ride-safety/"
                target="_blank"
                rel="noreferrer"
              >
                Ride safety <ArrowUpRight size={12} />
              </a>
            </nav>
          </section>

          <section
            className="footer-contact"
            aria-labelledby="footer-contact-title"
          >
            <h2 id="footer-contact-title">
              <Mail size={18} aria-hidden="true" /> Contact
            </h2>
            <address>
              PO Box 680, Simcoe, Ontario
              <br />
              N3Y 4T2, Canada
            </address>
            <a
              className="footer-email"
              href="mailto:info@worldsfinestshows.com"
            >
              info@worldsfinestshows.com
            </a>
            <div className="footer-sales">
              <span>Online ticket sales</span>
              <a
                className="footer-email"
                href="mailto:websales@worldsfinestshows.com"
              >
                websales@worldsfinestshows.com
              </a>
            </div>
          </section>

          <section
            className="footer-social"
            aria-labelledby="footer-social-title"
          >
            <h2 id="footer-social-title">Follow us</h2>
            <div className="footer-social-links">
              <a
                className="footer-social-icon social-facebook"
                href="https://www.facebook.com/worldsfinestshows/"
                target="_blank"
                rel="noreferrer"
                aria-label="World’s Finest Shows on Facebook"
                title="Facebook"
              >
                <Facebook size={27} fill="currentColor" strokeWidth={1.5} />
              </a>
              <a
                className="footer-social-icon social-instagram"
                href="https://www.instagram.com/wfshows"
                target="_blank"
                rel="noreferrer"
                aria-label="World’s Finest Shows on Instagram"
                title="Instagram"
              >
                <Instagram size={28} stroke="url(#footer-instagram-gradient)">
                  <defs>
                    <linearGradient
                      id="footer-instagram-gradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ffd36b" />
                      <stop offset="45%" stopColor="#ff719f" />
                      <stop offset="100%" stopColor="#bb8cff" />
                    </linearGradient>
                  </defs>
                </Instagram>
              </a>
              <button
                className="footer-social-icon social-youtube"
                aria-label="Watch World’s Finest Shows original midway video"
                title="YouTube"
                onClick={onPlayVideo}
              >
                <Youtube size={30} />
              </button>
              <a
                className="footer-social-icon social-tiktok"
                href="https://www.tiktok.com/search?q=worlds%20finest%20shows"
                target="_blank"
                rel="noreferrer"
                aria-label="Search World’s Finest Shows on TikTok"
                title="Search on TikTok"
              >
                <Music2 size={27} />
              </a>
              <a
                className="footer-social-icon social-google"
                href="https://www.google.com/search?q=World%27s+Finest+Shows+Ontario"
                target="_blank"
                rel="noreferrer"
                aria-label="Find World’s Finest Shows on Google"
                title="Find us on Google"
              >
                <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3A12 12 0 1 1 32 14l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 32 14l5.7-5.7A20 20 0 0 0 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.2-5.2a12 12 0 0 1-18.3-5.1l-6.6 5.1A20 20 0 0 0 24 44Z"/><path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.2 5.6l6.2 5.2A20 20 0 0 0 44 24c0-1.2-.1-2.4-.4-3.5Z"/></svg>
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <div>
            <span>© {new Date().getFullYear()} World’s Finest Shows</span>
          </div>
          <a className="footer-back-top" href="#home">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
