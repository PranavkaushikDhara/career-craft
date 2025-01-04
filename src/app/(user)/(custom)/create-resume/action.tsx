const prepareFields = (formData: FormData) => {
  // Prevent default form submission behavior
  console.log(formData.get("resume")); // Logs the textarea value or file input data
};

export default prepareFields;
