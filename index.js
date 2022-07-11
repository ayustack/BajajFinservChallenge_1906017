const express = require("express");
const app = express();

app.use(express.json());
app.use(express.text());

function isChar(e) {
    return /[a-zA-Z]/.test(e);
}
function isNum(e) {
    return !isNaN(e);
}

app.post("/challenge", (req, res) => {
    try {
        const body = req.body;
        //const data = body.data;
        const data = body.data;
        console.log(data);
        const nums = [];
        const letters = [];
        let count  = 0;
        data.forEach(e => {
            if(isNum(e) || isChar(e)) {
                count++;
            }   

          if (isNum(e)) {
                nums.push(e);
            }
            else if (isChar(e)) {
                letters.push(e);

            }
        });
        const ans = {
            isSucess: true,
            user_id: "ayush_jaiswal_16072000",
            email: "1906017@kiit.ac.in",
            roll_number: "1906017",
            alphabets: letters,
            numbers: nums,
            count: (count.toString())
        }
        res.send(ans);
    }
    catch (err) {
        console.log(err);
        const ans = {
            isSucess: false,
            user_id: "ayush_jaiswal_16072000",
            email: "1906017@kiit.ac.in",
            roll_number: "1906017",
            alphabets: [],
            numbers: [],
            count: "0"
        }
        res.send(ans);


    }
})

app.listen(process.env.PORT || 5000)
