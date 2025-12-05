const db = require("../config/db");

exports.submitForm = (req, res) => {
  const {
    business_name,
    instagram_account,
    full_name,
    mobile_code,
    mobile_number,
    email
  } = req.body;

  const sql = `
    INSERT INTO waitlist 
    (business_name, instagram_account, full_name, mobile_code, mobile_number, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    business_name,
    instagram_account,
    full_name,
    mobile_code,
    mobile_number,
    email
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({
      success: true,
      id: result.insertId,
      message: "Form submitted successfully"
    });
  });
};
