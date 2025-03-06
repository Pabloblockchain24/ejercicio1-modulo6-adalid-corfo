import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      setIsFormValid(
        Object.values(formData).every((value) => value.trim() !== "")
      );
    };
    validateForm();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: DOMPurify.sanitize(value),
    }));
  };

  return { formData, isFormValid, handleInputChange, setFormData };
};

export default useFormValidation;