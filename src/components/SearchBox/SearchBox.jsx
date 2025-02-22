import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Find contacts by name"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.searchInput}
        />
    );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
