import * as React from "react"
import { Nav, NavWrapper, NavItem, Link, Icon } from "../elements"
import PropTypes from "prop-types"
import linkedIn from '../images/linkedin.svg'
import github from '../images/github.svg'


export const Header = () => {
  return (
    <Nav>
        <NavWrapper>
          <NavItem>
            <Link>
              sean@nordquists.com
            </Link>
          </NavItem>
          <NavItem>
            <Link>
              <Icon src={linkedIn} />
              linkedin
            </Link>
          </NavItem>
          <NavItem>
            <Link>
              <Icon src={github} />
              github
            </Link>
          </NavItem>
        </NavWrapper>
    </Nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
