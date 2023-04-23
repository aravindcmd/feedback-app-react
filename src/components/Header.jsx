import PropTypes from "prop-types";
function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">{text}</div>
    </header>
  );
}

Header.defaultProps = {
  text: "FEDDBACKUI",
  bgColor: "black",
  textColor: "pink",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
