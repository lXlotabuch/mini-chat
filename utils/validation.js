exports.validation = values => {
  console.log(values);
  let error = {};

  validRules.forEach(rule => {
    if (rule.isRequired && !values[rule.name]) {
      error = {
        name: rule.name,
        message: rule.message,
      };
      return;
    }
    if (rule.pattern && !values[rule.name].match(rule.pattern)) {
      error = {
        name: rule.name,
        message: rule.message,
      };
      return;
    }
  });

  return { isValid: !Object.keys(error), error };
};

const validRules = [
  { name: 'name', isRequired: true, message: 'Name is required' },
  { name: 'name', pattern: /^[a-zа-яіїё0-9_]+$/i, message: 'Uncorrect name' },
  { name: 'message', isRequired: true, message: 'Message is required' },
];
