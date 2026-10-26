import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Facebook,
  FerrisWheel,
  Instagram,
  Mail,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Ticket,
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
        <div className="footer-welcome">
          <div className="footer-brand">
            <a href="#home" aria-label="World’s Finest Shows home">
              <img
                src={logoSrc}
                alt="World’s Finest Shows"
                width="290"
                height="45"
                loading="lazy"
              />
            </a>
            <p>
              Good rides. Great memories. <span>All together.</span>
            </p>
          </div>
          <a href="#events" className="footer-fair-link">
            <span className="footer-fair-icon">
              <Ticket size={23} />
            </span>
            <span>
              <small>YOUR NEXT GREAT DAY STARTS HERE</small>
              <strong>Find your next fair</strong>
            </span>
            <ArrowUpRight size={23} />
          </a>
        </div>

        <div className="footer-grid">
          <section
            className="footer-explore"
            aria-labelledby="footer-explore-title"
          >
            <span className="footer-eyebrow">
              <Sparkles size={14} /> STEP RIGHT UP
            </span>
            <h2 id="footer-explore-title">Explore the midway</h2>
            <nav aria-label="Footer navigation">
              <a href="#events">
                <span className="footer-link-icon icon-blue">
                  <CalendarDays size={19} />
                </span>
                <span>
                  Find a fair<small>Dates & locations</small>
                </span>
                <ArrowRight size={17} />
              </a>
              <a href="#attractions" onClick={onExploreAttractions}>
                <span className="footer-link-icon icon-pink">
                  <FerrisWheel size={19} />
                </span>
                <span>
                  Rides & attractions<small>Find your kind of fun</small>
                </span>
                <ArrowRight size={17} />
              </a>
              <a href="#passes">
                <span className="footer-link-icon icon-yellow">
                  <Ticket size={19} />
                </span>
                <span>
                  Mega Passes<small>Plan your day on the midway</small>
                </span>
                <ArrowRight size={17} />
              </a>
              <a
                href="https://www.worldsfinestshows.com/ride-safety/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-link-icon icon-mint">
                  <ShieldCheck size={19} />
                </span>
                <span>
                  Ride safety<small>A little good to know</small>
                </span>
                <ArrowUpRight size={17} />
              </a>
            </nav>
          </section>

          <section
            className="footer-contact"
            aria-labelledby="footer-contact-title"
          >
            <span className="footer-eyebrow">
              <Mail size={14} /> WE’RE ALL EARS
            </span>
            <h2 id="footer-contact-title">Get in touch</h2>
            <a
              className="footer-email footer-email-general"
              href="mailto:info@worldsfinestshows.com"
            >
              <span className="footer-contact-icon">
                <Mail size={21} />
              </span>
              <span>
                <small>General enquiries</small>
                <strong>info@worldsfinestshows.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              className="footer-email footer-email-tickets"
              href="mailto:websales@worldsfinestshows.com"
            >
              <span className="footer-contact-icon">
                <Ticket size={21} />
              </span>
              <span>
                <small>Tickets & online sales</small>
                <strong>websales@worldsfinestshows.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <div className="footer-address">
              <MapPin size={20} />
              <div>
                <span>Mailing address</span>
                <address>
                  PO Box 680, Simcoe, Ontario
                  <br />
                  N3Y 4T2, Canada
                </address>
              </div>
            </div>
          </section>

          <section
            className="footer-social"
            aria-labelledby="footer-social-title"
          >
            <span className="footer-eyebrow">
              <Sparkles size={14} /> A LITTLE MIDWAY MAGIC
            </span>
            <h2 id="footer-social-title">Follow the fun</h2>
            <div className="footer-social-links">
              <a
                className="footer-social-card social-facebook"
                href="https://www.facebook.com/worldsfinestshows/"
                target="_blank"
                rel="noreferrer"
                aria-label="World’s Finest Shows on Facebook"
              >
                <span className="social-icon">
                  <Facebook size={24} />
                </span>
                <span>
                  <strong>Facebook</strong>
                  <small>Fair days & updates</small>
                </span>
                <ArrowUpRight size={19} />
              </a>
              <a
                className="footer-social-card social-instagram"
                href="https://www.instagram.com/wfshows"
                target="_blank"
                rel="noreferrer"
                aria-label="World’s Finest Shows on Instagram"
              >
                <span className="social-icon">
                  <Instagram size={24} />
                </span>
                <span>
                  <strong>Instagram</strong>
                  <small>A little behind the magic</small>
                </span>
                <ArrowUpRight size={19} />
              </a>
              <button
                className="footer-social-card social-youtube"
                aria-label="Watch World’s Finest Shows original midway video"
                onClick={onPlayVideo}
              >
                <span className="social-icon">
                  <Youtube size={26} />
                </span>
                <span>
                  <strong>YouTube</strong>
                  <small>Watch the midway</small>
                </span>
                <Play size={17} fill="currentColor" />
              </button>
            </div>
            <p className="footer-social-note">
              The lights. The laughs. The good times.
            </p>
          </section>
        </div>

        <div className="footer-bottom">
          <div>
            <span>© {new Date().getFullYear()} World’s Finest Shows</span>
            <small>
              Independent development preview · Not the official website
            </small>
          </div>
          <span className="footer-made-for">
            <span aria-hidden="true">✦</span> MADE FOR THE MEMORIES{" "}
            <span aria-hidden="true">✦</span>
          </span>
          <a className="footer-back-top" href="#home">
            Back to top <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
