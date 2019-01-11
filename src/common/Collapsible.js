import React, { Component } from "react";
import "./Collapsible.css";
import PropTypes from "prop-types";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    });
  }

  render() {
    const { title, children } = this.props;
    const { isExpanded, height } = this.state;
    const currentHeight = isExpanded ? height : 0;
    return (
      <div
        className={`collapsible-panel ${isExpanded ? "is-expanded" : ""}`}
        onClick={e => this.handleToggle(e)}
      >
        <div className="panel-heading">
          <h5>
            {!isExpanded && (
              <span class="collapsible-icon">
                <i class="fa fa-plus" aria-hidden="true" />
              </span>
            )}
            {isExpanded && (
              <span class="collapsible-icon">
                <i class="fa fa-minus" aria-hidden="true" />
              </span>
            )}
            {title}
          </h5>
        </div>
        <div
          className="panel-collapse"
          style={{ height: currentHeight + "px" }}
        >
          <div className="panel-body" ref="inner">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  title: PropTypes.string
};

export default Collapsible;
