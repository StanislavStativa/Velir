import { useEffect } from "react";
import { node } from "prop-types";

const propTypes = {
  children: node,
};

const EditingModeTemplate = (props) => {
  const { children } = props;

  useEffect(() => {
    document.body.classList.add("editing-mode");

    return () => {
      document.body.classList.remove("editing-mode");
    };
  }, []);

  return children;
};

EditingModeTemplate.propTypes = propTypes;
export default EditingModeTemplate;
