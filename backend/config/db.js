const mongoose = require("mongoose");


// MongoDB 연결
// mongoose.connect("mongodb://localhost:27017/blogDB", {
//           useNewUrlParser: true,   
//           useUnifiedTopology: true 
// }).then(() => console.log("✅ MongoDB 연결 성공!"))
// .catch(err => console.error("❌ MongoDB 연결 실패:", err));

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB 연결 성공!");
    } catch (err) {
        console.error("❌ MongoDB 연결 실패:", err);
    }
};

module.exports = connectToDatabase;