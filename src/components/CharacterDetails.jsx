import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CharacterDetails = ({ character, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="details-wrapper"
    >
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <div className="details-body">
        <div className="title-group">
          <h3 className="details-title">Character Details</h3>
          <span className="text-2xl cursor-pointer" onClick={onClose}>
            X
          </span>
        </div>
        <p>
          <strong>Name:</strong> {character.name}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
      </div>
    </motion.div>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CharacterDetails;
