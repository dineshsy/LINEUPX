const formidable = require('formidable');

const parseMultipartData = (req) => {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);

      resolve({ fields, files });
    });
  });
};

module.exports = parseMultipartData;
