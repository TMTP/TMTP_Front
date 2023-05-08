// import axios from "axios";

// // Import required packages
// const express = require("express");
// const multer = require("multer");
// const mariadb = require("mariadb");

// // Create a connection pool for connecting to the database
// const pool = mariadb.createPool({
//   host: "tmtpdb.cfbk9bjvtvzs.ap-northeast-2.rds.amazonaws.com",
//   user: "TMTP",
//   password: "TMTP1234@",
//   database: "pillinfo",
// });

// // Create a storage engine for handling file uploads with multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   },
// });

// // Create an instance of the multer middleware with the storage engine
// const upload = multer({ storage: storage });

// // Create an instance of the express application
// const app = express();

// // Define a route for handling file uploads
// app.post("/upload", upload.single("pill_img"), async (req, res) => {
//   try {
//     // Get a connection from the connection pool
//     const conn = await pool.getConnection();

//     // Insert the filename into the database
//     const sql = "INSERT INTO pills (pill_img) VALUES (?)";
//     const params = [req.file.filename];
//     const result = await conn.query(sql, params);

//     // Release the connection back to the pool
//     conn.release();

//     // Send a success response to the client
//     res.json({ success: true });
//   } catch (err) {
//     // Send an error response to the client
//     res.json({ success: false, error: err.message });
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

// export default function Resist() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("pill_img", selectedFile);

//     try {
//       const response = await axios.post("/upload", formData);
//       console.log(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
