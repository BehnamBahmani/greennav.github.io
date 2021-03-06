import React, { PropTypes } from 'react'
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid'
import { colors, activeColors } from 'utils/colors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import typography from 'utils/typography'

import { config } from 'config'
import Divider from 'material-ui/Divider'
import GnLogo from 'pages/images/GN_logo_green.png'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'css/font-awesome.min.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const { rhythm, adjustFontSizeTo } = typography


const Template = (props) => {
  const newsActive = includes(props.location.pathname, '/news/')
  const docsActive = includes(props.location.pathname, '/docs/')
  const devActive = includes(props.location.pathname, '/development/')

  const STYLE = {
    link: {
      textDecoration: 'none',
      paddingLeft: rhythm(1/2),
      paddingRight: rhythm(1/2),
      paddingTop: rhythm(1/2),
      marginTop: rhythm(-1),
      paddingBottom: rhythm(1/2),
      marginBottom: rhythm(-1),
      lineHeight: "50px",
    }
  }

  const links = (
    <div>
      <Link
        to={prefixLink('/news/')}
        style={{
          ...STYLE.link,
          borderBottom: newsActive ? `2px solid ${config.primaryColor}` : "",
          color: newsActive ? activeColors.fg : colors.fg,
        }}
      >
        News
      </Link>
      <Link
        to={prefixLink('/docs/')}
        style={{
          ...STYLE.link,
          borderBottom: docsActive ? `2px solid ${config.primaryColor}` : "",
          color: docsActive ? activeColors.fg : colors.fg,
        }}
      >
        Docs
      </Link>
      <Link
        to={prefixLink('/development/')}
        style={{
          ...STYLE.link,
          borderBottom: devActive ? `2px solid ${config.primaryColor}` : "",
          color: devActive ? activeColors.fg : colors.fg,
        }}
      >
        Development
      </Link>
      <a
        style={{
          color: colors.fg,
          textDecoration: 'none',
          paddingLeft: rhythm(1/2),
          paddingRight: rhythm(1/2),
        }}
        href="https://github.com/Greennav/GreenNav"
      >
        <i className="fa fa-github fa-lg" />
      </a>
    </div>
  )

  const logo = (
    <Link
      style={{
        textDecoration: 'none',
        color: colors.fg,
      }}
      to={prefixLink('/')}
    >
      <img src={GnLogo} style={{ height: 50, margin: 0 }} />
    </Link>
  )

  const header = (
    <div
      style={{
        background: colors.bg,
        color: colors.fg,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 980,
          margin: "0 auto"
        }}
      >
        <div>{logo}</div>
        <div>{links}</div>
      </div>
    </div>
  )

  const footer = (
    <div className="footer">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>
          Deployed by <a href="https://www.netlify.com/" style={{ color: "white" }}>Netlify</a>
        </div>

        <div>
          Join us:
          <a
            style={{
              color: "white",
              paddingLeft: rhythm(1/2),
            }}
            href="https://plus.google.com/u/0/communities/110704433153909631379"
          >
            <i className="fa fa-google-plus fa-lg" />
          </a>
          <a
            style={{
              color: "white",
              paddingLeft: rhythm(1/2),
            }}
            href="https://github.com/Greennav"
          >
            <i className="fa fa-github fa-lg" />
          </a>
        </div>

        <div><i className="fa fa-copyright fa-lg" /> 2017 GreenNav</div>
      </div>
    </div>
  )

  return (
    <MuiThemeProvider>
      <div>
        {header}
        {props.children}
        {footer}
      </div>
    </MuiThemeProvider>
  )
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default Template
