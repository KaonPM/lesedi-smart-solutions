import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="site">
      <header className="nav">
        <a href="#" className="navLogo">
          <Image
            src="/lesedi-logo.png"
            alt="Lesedi Smart Solutions"
            width={260}
            height={95}
            priority
          />
        </a>

        <nav className="navLinks">
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="navBtn">
          💬 Get in Touch
        </a>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="badge">Simple Solutions for Real Problems</p>

          <h1>
            Smart solutions <br />
            for <span>real problems.</span>
          </h1>

          <p>
            Lesedi Smart Solutions builds practical digital solutions that help
            schools, small businesses and growing organisations work with better
            structure, cleaner records and less admin pressure.
          </p>

          <div className="heroActions">
            <a href="#solutions" className="primaryBtn">
              Explore Solutions →
            </a>

            <a href="#about" className="secondaryBtn">
              About Us
            </a>
          </div>
        </div>

        <div className="heroLogoCard">
          <Image
            src="/lesedi-logo.png"
            alt=""
            width={620}
            height={250}
            priority
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="trustStrip">
        <div>
          <span>⚙️</span>
          <strong>Practical Solutions</strong>
          <p>Built for everyday use</p>
        </div>

        <div>
          <span>🎯</span>
          <strong>Real Impact</strong>
          <p>Solve what matters</p>
        </div>

        <div>
          <span>🇿🇦</span>
          <strong>Local Focus</strong>
          <p>South African solutions</p>
        </div>

        <div>
          <span>🚀</span>
          <strong>Future Driven</strong>
          <p>More coming soon</p>
        </div>
      </section>

      <section id="solutions" className="solutions">
        <div className="sectionIntro">
          <p className="dotLabel">Our Solutions</p>

          <h2>
            Solutions built to make everyday work
            <span> easier.</span>
          </h2>
        </div>

        <div className="cards">
          {/* GOQ FIRST */}

          <article className="card goq">
            <div className="cardTop">
              <Image
                src="/goq-logo.png"
                alt="GoQ"
                width={230}
                height={80}
                className="productLogo goqLogo"
              />

              <small>Live Solution</small>
            </div>

            <p>
              GoQ helps service businesses manage appointments, availability,
              services and customer bookings from one simple platform.
            </p>

            <div className="referenceChips">
              <span>Free Marketplace Listing</span>
              <span>No Transaction Charges</span>
              <span>Online Booking</span>
            </div>

            <a
              href="https://www.goq.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GoQ →
            </a>
          </article>

          {/* DAILYBLOOM SECOND */}

          <article className="card daily">
            <div className="cardTop">
              <Image
                src="/dailybloom-logo.png"
                alt="DailyBloom"
                width={230}
                height={80}
                className="productLogo"
              />

              <small>Live Solution</small>
            </div>

            <p>
              DailyBloom helps preschools manage learners, attendance, events,
              daily summaries, communication and school operations from one
              clean platform.
            </p>

            <div className="referenceChips">
              <span>Learner Management</span>
              <span>Attendance Tracking</span>
              <span>Parent Communication</span>
            </div>

            <a
              href="https://www.dailybloom.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View DailyBloom →
            </a>
          </article>

          {/* WAGEFLOW THIRD */}

          <article className="card wage">
            <div className="cardTop">
              <Image
                src="/wageflow-logo.png"
                alt="WageFlow"
                width={230}
                height={80}
                className="productLogo wageLogo"
              />

              <small>Live Solution</small>
            </div>

            <p>
              WageFlow helps small businesses calculate pay, generate payslips,
              manage staff records and keep workforce information organised.
            </p>

            <div className="referenceChips">
              <span>Payroll Calculations</span>
              <span>Payslip Generation</span>
              <span>Staff Records</span>
            </div>

            <a
              href="https://wageflow.lesedismartsolutions.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View WageFlow →
            </a>
          </article>
        </div>
      </section>

      <section className="bottomGrid">
        <details id="about" className="panel collapsiblePanel">
          <summary>About Us</summary>

          <div className="collapsibleContent">
            <p>
              Lesedi Smart Solutions is a South African digital solutions company
              focused on building simple, useful and affordable technology.
            </p>

            <p>
              Our solutions are designed for real people and real organisations
              that need better ways to manage daily work.
            </p>
          </div>
        </details>

        <details id="contact" className="panel collapsiblePanel">
          <summary>Get in Touch</summary>

          <div className="collapsibleContent">
            <div className="contactItem">
              <span>✉️</span>

              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@lesedismartsolutions.co.za">info@lesedismartsolutions.co.za</a></p>
              </div>
            </div>

            <div className="contactItem">
              <span>📞</span>

              <div>
                <strong>Phone</strong>
                <p><a href="tel:+27763616044">076 361 6044</a></p>
              </div>
            </div>

            <div className="contactItem">
              <span>💬</span>

              <div>
                <strong>WhatsApp</strong>
                <p><a href="https://wa.me/27763616044" target="_blank" rel="noopener noreferrer">076 361 6044</a></p>
              </div>
            </div>
          </div>
        </details>

        <details className="panel collapsiblePanel">
          <summary>Send us a Message</summary>

          <div className="collapsibleContent">
            <ContactForm />
          </div>
        </details>
      </section>

      <Footer />
    </main>
  );
}
