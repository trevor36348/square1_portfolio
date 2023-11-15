// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure database connection
const config = {
  user: 'sa',
  password: '12345',
  server: 'DESKTOP-LQTL2RD\SALES',
  database: 'square1_data',
};

app.post('/contact', async (req, res) => {
  try {
    await sql.connect(config);

    const result = await sql.query`
      INSERT INTO MailingData (Email, FirstName, LastName, Occupation, SendEmail)
      VALUES (${req.body.email}, ${req.body.firstName}, ${req.body.lastName}, ${req.body.occupation}, ${req.body.sendEmail});
    `;

    // Close the connection
    await sql.close();

    console.log('Data inserted into SQL Server:', result);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error inserting data into SQL Server:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});