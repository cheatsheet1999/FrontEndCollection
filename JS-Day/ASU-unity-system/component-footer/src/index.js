import "./index.css";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes, { shape } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import endorsedLogo from "./endorsedLogo.png";
import innovationLogo from "./innovationLogo.png";

const Base = () => {
  return (
    <>
      <Innovation />
      <Legal />
    </>
  );
};

const Innovation = () => {
  return (
    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <a className="img-link" href="https://www.asu.edu/rankings">
                <img
                  src={innovationLogo}
                  alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020"
                />
              </a>
              <nav className="nav" aria-label="University Services">
                <a className="nav-link" href="https://www.asu.edu/map/">
                  Maps and Locations
                </a>
                <a className="nav-link" href="https://www.asu.edu/asujobs">
                  Jobs
                </a>
                <a className="nav-link" href="https://isearch.asu.edu/">
                  Directory
                </a>
                <a className="nav-link" href="https://www.asu.edu/contactasu/">
                  Contact ASU
                </a>
                <a className="nav-link" href="https://my.asu.edu/">
                  My ASU
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Legal = () => {
  return (
    <div className="wrapper" id="wrapper-footer-colophon">
      <div className="container" id="footer-colophon">
        <div className="row">
          <div className="col">
            <nav
              className="nav colophon"
              aria-label="University Legal and Compliance"
            >
              <a className="nav-link" href="https://www.asu.edu/copyright/">
                Copyright and Trademark
              </a>
              <a className="nav-link" href="https://www.asu.edu/accessibility/">
                Accessibility
              </a>
              <a className="nav-link" href="https://www.asu.edu/privacy/">
                Privacy
              </a>
              <a className="nav-link" href="https://www.asu.edu/tou/">
                Terms of Use
              </a>
              <a className="nav-link" href="https://www.asu.edu/emergency/">
                Emergency
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const Social = ({ social: { unitLogo, mediaLinks } }) => {
  return (
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <img
              src={unitLogo}
              alt="ASU University Technology Office Arizona State University."
            />
          </div>

          {mediaLinks && (
            <div className="col-md" id="social-media">
              <nav className="nav" aria-label="Social Media">
                {mediaLinks.facebook && (
                  <a className="nav-link" href={mediaLinks.facebook}>
                    <FontAwesomeIcon
                      title="Facebook Social Media Icon"
                      icon={faFacebookSquare}
                    />
                  </a>
                )}
                {mediaLinks.twitter && (
                  <a className="nav-link" href={mediaLinks.twitter}>
                    <FontAwesomeIcon
                      title="Twitter Social Media Icon"
                      icon={faTwitterSquare}
                    />
                  </a>
                )}
                {mediaLinks.linkedIn && (
                  <a className="nav-link" href={mediaLinks.linkedIn}>
                    <FontAwesomeIcon
                      title="LinkedIn Social Media Icon"
                      icon={faLinkedin}
                    />
                  </a>
                )}
                {mediaLinks.instagram && (
                  <a className="nav-link" href={mediaLinks.instagram}>
                    <FontAwesomeIcon
                      title="Instagram Social Media Icon"
                      icon={faInstagramSquare}
                    />
                  </a>
                )}
                {mediaLinks.youtube && (
                  <a className="nav-link" href={mediaLinks.youtube}>
                    <FontAwesomeIcon
                      title="YouTube Social Media Icon"
                      icon={faYoutubeSquare}
                    />
                  </a>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Social.propTypes = {
  social: shape({
    unitLogo: PropTypes.string.isRequired,
    mediaLinks: shape({
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      linkedIn: PropTypes.string,
      instagram: PropTypes.string,
      youtube: PropTypes.string,
    }),
  }),
};

Social.defaultProps = {
  social: {
    unitLogo: endorsedLogo,
    mediaLinks: {
      facebook: "",
      twitter: "",
      linkedIn: "",
      instagram: "",
      youtube: "",
    },
  },
};

const Contact = ({
  contact: { title, contactLink, contributionLink, columns },
}) => {
  return (
    <div className="wrapper" id="wrapper-footer-columns">
      <div className="container" id="footer-columns">
        <div className="row">
          <div className="col-xl-3" id="info-column">
            <h5>{title}</h5>
            <p className="contact-link">
              <a href={contactLink}>Contact Us</a>
            </p>
            {contributionLink && (
              <p className="contribute-button">
                <a href={contributionLink} className="btn btn-small btn-gold">
                  Contribute
                </a>
              </p>
            )}
          </div>

          {columns && columns.length > 0 && (
            <>
              {columns.map((column, columnIndex) => (
                <ColumnSection
                  key={`footlink-${column.title}`}
                  columnIndex={columnIndex}
                  column={column}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: shape({
    title: PropTypes.string.isRequired,
    contactLink: PropTypes.string.isRequired,
    contributionLink: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string,
            text: PropTypes.string.isRequired,
          })
        ),
      })
    ),
  }),
};

Contact.defaultProps = {
  contact: {
    title: "",
    contactLink: "",
    contributionLink: "",
  },
};

const ColumnSection = ({ columnIndex, column: { title, links } }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="col-xl flex-footer">
      <div className="card card-foldable desktop-disable-xl">
        <div
          className="card-header"
          role="button"
          onClick={() => setShow(!show)}
          onKeyDown={() => setShow(!show)}
          tabIndex={0}
        >
          <h5>
            <a
              id={`footlink-header-${columnIndex}`}
              className="collapsed"
              href={`#footlink-${columnIndex}`}
              role="button"
            >
              {title}
              <FontAwesomeIcon icon={faChevronUp} />
            </a>
          </h5>
        </div>
        <div
          id={`footlink-${columnIndex}`}
          className={`collapse card-body ${show ? "show" : ""}`}
        >
          {links.map(link => (
            <a
              key={`footlink-${title}-link-${link.text}`}
              className="nav-link"
              href={link.url}
              title={link.title}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

ColumnSection.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  column: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string,
        text: PropTypes.string.isRequired,
      })
    ),
  }),
};

const ASUFooter = ({ social, contact }) => {
  const showSocial =
    social && typeof social === "object" && Object.keys(social).length > 0;
  const showContact =
    contact && typeof contact === "object" && Object.keys(contact).length > 0;

  return (
    <footer role="contentinfo">
      {showSocial && <Social social={social} />}
      {showContact && <Contact contact={contact} />}
      <Base />
    </footer>
  );
};

ASUFooter.propTypes = {
  social: PropTypes.shape(Social.propTypes),
  contact: PropTypes.shape(Contact.propTypes),
};

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

const initASUFooter = ({ targetSelector, props }) =>
  RenderReact(ASUFooter, props, document.querySelector(targetSelector));

export { ASUFooter, initASUFooter };
