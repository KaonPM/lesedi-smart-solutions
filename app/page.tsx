import Image from "next/image";
import ContactForm from "./components/ContactForm";

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
            alt="Lesedi Smart Solutions"
            width={620}
            height={250}
            priority
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
          {/* WEBSITE FIRST */}

          <article className="card websiteReferenceCard">
            <div className="cardTop websiteCardTop">
  <h3 className="websiteEvolutionHeading">
    Website & Digital Solutions
  </h3>

  <small>Live Solution</small>
</div>

<div className="websiteReferenceGrid">
  <div className="websiteReferenceCopy">
    <p>
      We build modern websites and digital solutions designed to
      improve visibility, generate enquiries and help businesses grow.
    </p>

                <a
                  href="https://www.polokotombstones.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Latest Project →
                </a>
              </div>

              <div className="referenceDeviceScene">
                <div className="referenceLaptop">
                  <div className="referenceScreen">
                    <strong>FutureWeb</strong>

                    <h4>
                      We Build
                      <br />
                      Digital Experiences
                      <br />
                      That <span>Drive Growth</span>
                    </h4>

                    <p>
                      Next-generation websites and digital solutions built for
                      performance.
                    </p>

                    <div className="referenceButton">
                      Our Services →
                    </div>

                    <div className="referencePlanet" />
                  </div>
                </div>

                <div className="referencePhone">
                  <div>
                    <strong>FutureWeb</strong>

                    <h5>
                      Smart Solutions
                      <br />
                      For Your <span>Business</span>
                    </h5>

                    <p>
                      Websites and digital tools that help you grow.
                    </p>

                    <small>Get Started →</small>
                  </div>
                </div>
              </div>
            </div>
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
        <div id="about" className="panel aboutPanel">
          <h3>About Us</h3>

          <p>
            Lesedi Smart Solutions is a South African digital solutions company
            focused on building simple, useful and affordable technology.
          </p>

          <p>
            Our solutions are designed for real people and real organisations
            that need better ways to manage daily work.
          </p>
        </div>

        <div id="contact" className="panel contactPanel">
          <h3>Get in Touch</h3>

          <div className="contactItem">
            <span>✉️</span>

            <div>
              <strong>Email</strong>
              <p>info@lesedismartsolutions.co.za</p>
            </div>
          </div>

          <div className="contactItem">
            <span>📞</span>

            <div>
              <strong>Phone</strong>
              <p>076 361 6044</p>
            </div>
          </div>

          <div className="contactItem">
            <span>💬</span>

            <div>
              <strong>WhatsApp</strong>
              <p>076 361 6044</p>
            </div>
          </div>
        </div>

        <div className="panel formPanel">
          <h3>Send us a Message</h3>

          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="footerLogo">
          <Image
            src="/lesedi-logo.png"
            alt="Lesedi Smart Solutions"
            width={170}
            height={70}
          />
        </div>
      </footer>

      <div className="legalBar">
        <p>Business Registration Number: 2026/315790/07</p>
        <p>Information Regulator Registration Number: 2026-010141</p>
        <p>© 2026 Lesedi Smart Solutions. All rights reserved.</p>
      </div>
    </main>
  );
}