fetch('./data/sample-data.json')
  .then((response) => response.json())
  .then((data) => {
    // Populate subsections for each unique syptom type.

    // Start with searching data for "type" key and if the value is unique,
    // create a subsection of <section>.

    // create a variable for the array of symptoms
    const { symptoms } = data.user.entries[0];

    const symptomTypes = [];

    symptoms.forEach((element) => {
      if (element.type) {
        if (!symptomTypes.includes(element.type)) {
          symptomTypes.push(element.type);
        }
      }
    });

    // Making <fieldset> for <form>

    // The "None" button
    const noneLabel = document.createElement('label');
    noneLabel.setAttribute('for', 'none');
    const noneInput = document.createElement('input');
    noneInput.setAttribute('type', 'radio');
    noneInput.setAttribute('name', 'severity');
    noneInput.setAttribute('value', 0);
    noneInput.id = 'none';
  });
