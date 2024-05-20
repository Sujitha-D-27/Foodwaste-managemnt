const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
// hi baby 
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// Nodemailer setup
app.post('/mail', (req, res) => {
    const { username: name, email: usermail, message } = req.body;
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sujithadevaraj27@gmail.com",
                pass: "slzt cgzo pvom ldgj"
            }
        });
        const mailOption = {
            from: usermail,
            to: "sujithadevaraj27@gmail.com",
            subject: `Feedback from ${name}`,
            text: message
        };
        transport.sendMail(mailOption, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Mail successfully sent: " + info.response);
            }
        });
    } catch (err) {
        console.log(err, "from server");
    }
});
app.post('/deliverer/feedback', (req, res) => {
    const { username: name, email: usermail, message } = req.body;
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sujithadevaraj27@gmail.com",
                pass: "slzt cgzo pvom ldgj"
            }
        });
        const mailOption = {
            from: usermail,
            to: "sujithadevaraj27@gmail.com",
            subject: `Feedback from Delivery Person ${name}`,
            text: message
        };
        transport.sendMail(mailOption, (err, info) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Failed to send feedback." });
            } else {
                console.log("Mail successfully sent: " + info.response);
                res.status(200).json({ message: "Feedback sent successfully." });
            }
        });
    } catch (err) {
        console.log(err, "from server");
        res.status(500).json({ error: "Internal server error." });
    }
});


// Database setup
const db = mysql.createConnection({
    host: 'bvariuzekvhsqmpej8ed-mysql.services.clever-cloud.com',
    user: 'ui4jfaqxwfaixzwh',
    password: 'SfEzzqkbo3iw3E08xgwA',
    database: 'bvariuzekvhsqmpej8ed'
});


app.post("/Deliverydetail",(req,res)=>{
    const deliveyLocation=req.body.deliveryLocation; 
    const query="select distinct * from donations where address=? ";
    db.query(query,deliveyLocation,(err,data)=>{
        if(err){
            return res.status(500).send(err);
        }else{
            return res.status(200).send(data[0])
        }
    })

})
app.post('/dstatus',(req,res)=>{
    const donation_id=req.body.donation_id;
    const status=req.body.status;
    const sql = 'UPDATE donations SET status = ? WHERE donation_id = ?';
    db.query(sql,[status,donation_id],(err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Error in database operation');
        } else {
           
            res.status(200).send("status updated successfully");
        }
    })
})
app.get('/admin/donators', (req, res) => {
    const sql = `
      SELECT users.username, users.email, donations.foodname, donations.foodtype, donations.category, donations.quantity, donations.serves, donations.date, donations.address, donations.mobile_no, donations.status
      FROM users
      JOIN donations ON users.id = donations.userId
    `;
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(results);
    });
  });
  app.get('/admin/delivery-persons', (req, res) => {
    const sql = `
      SELECT 
        dp.username, dp.email, 
        d.foodname, d.foodtype, d.category, d.quantity, d.serves, d.date, d.address, d.mobile_no, d.status
      FROM 
        delivery dp
      LEFT JOIN 
        donations d ON dp.id = d.userId
      WHERE 
        d.status IN ('pick up food', 'Delivered food')
    `;
    
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      const deliveryPersons = {};
  
      results.forEach(row => {
        if (!deliveryPersons[row.username]) {
          deliveryPersons[row.username] = {
            username: row.username,
            email: row.email,
            donations: []
          };
        }
  
        if (row.foodname) {
          deliveryPersons[row.username].donations.push({
            foodname: row.foodname,
            foodtype: row.foodtype,
            category: row.category,
            quantity: row.quantity,
            serves: row.serves,
            date: row.date,
            address: row.address,
            mobile_no: row.mobile_no,
            status: row.status
          });
        }
      });
  
      res.send(Object.values(deliveryPersons));
    });
  });

// Register user
app.post('/sign', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database operation');
        } else {
            const userId = result.insertId;
            res.status(200).send({ userId });
        }
    });
});
// Register Delivey
app.post('/Dsign', (req, res) => {
    // const { username, email,location ,password } = req.body;
    const username=req.body.username;
    const email=req.body.email;
    const location=req.body.location;
    const password=req.body.password;
    console.log(location)
    const sql = 'INSERT INTO delivery (username, email,location ,password) VALUES (?, ?, ?,?)';
    db.query(sql, [username, email,location ,password], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database operation');
        } else {
            
            res.status(200).send("success");
        }
    });
});

 
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const admin = "sujithadevaraj27@gmail.com";
    const adminpwd = "Admin@57";
    // First check in users table
    
        // First check in users table
        db.query("SELECT * FROM users WHERE email=? AND password=?", [email, password], (err, userResult) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Error in database operation');
            }
            if (userResult.length > 0) {
                // User found in users table
                const userId=userResult[0].id;
                console.log(userId);
                return res.status(200).json({ role: "user" , userId:userId});
            }
            else if (email === admin && password === adminpwd ) {
                console.log("Admin is in danger");
                return res.status(200).json({ role: "admin" });
            }
            else 
            {
                // If not found in users, check in delivery table
                db.query("SELECT * FROM delivery WHERE email=? AND password=?", [email, password], (err, deliveryResult) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send('Error in database operation');
                    }
                    const deliverylocation=deliveryResult[0].location;
                    if (deliveryResult.length > 0) {
                        // User found in delivery table
                        return res.status(200).json({ role: "delivery" ,datas:deliverylocation});
                    } else {
                        // No user found
                        return res.status(401).send('Invalid email or password');
                    }
                });
            }
        });
    
});


// Submit donation
app.post('/donate', (req, res) => {
    const { fname, foodtype, category, quantity, serves, date, address, mobile_no, email } = req.body;

    console.log('Received donation data:', req.body);

    const userSql = 'SELECT id FROM users WHERE email = ?';

    db.query(userSql, [email], (err, userResult) => {
        if (err) {
            console.error('Error fetching user data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (userResult.length === 0) {
            res.status(404).send('User not found');
            return;
        }

        const userId = userResult[0].id;
        console.log(userId);

        const sql = 'INSERT INTO donations (foodname, foodtype, category, quantity, serves, date, address, mobile_no, email, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        db.query(sql, [fname, foodtype, category, quantity, serves, date, address, mobile_no, email, userId], (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).send('Internal Server Error');
                return;
            }
        });
        res.status(200).send(userResult);
    });
});

app.get('/pro/:userId', (req, res) => {
    const userId = req.params.userId;
  
    const userSql = 'SELECT  username, email FROM users WHERE id = ?';
    const donationsSql = 'SELECT * FROM donations WHERE userId = ?';
  
    db.query(userSql, [userId], (err, userResult) => {
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (userResult.length === 0) {
        res.status(404).send('User not found');
        return;
      }
  
      db.query(donationsSql, [userId], (err, donationsResult) => {
        if (err) {
          console.error('Error fetching donations data:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        res.status(200).json({
          user: userResult[0],
          donations: donationsResult
        });
      });
    });
  });
    
 
  
  
  

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
