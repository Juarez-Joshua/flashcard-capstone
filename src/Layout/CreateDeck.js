import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";
function CreateDeck() {
  const history = useHistory();
  const initialForm = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    createDeck(formData).then((data) => history.push(`/decks/${data.id}`));
    setFormData({ ...initialForm });
  };
  const cancelHandler = () => {
    history.push("/");
  };
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <DeckForm
      formData={formData}
      handleSubmit={handleSubmit}
      changeHandler ={changeHandler}
      cancelHandler={cancelHandler}
      createDeck={true}
    />
  );
}

export default CreateDeck;
