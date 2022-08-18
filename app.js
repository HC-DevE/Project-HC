//jshint esversion : 6


const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const  https = require('https');
// const { response } = require('express');
// const { url } = require('inspector');
// const { get } = require('request');

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/sign-up.html');
});


app.post('/', (req, res) => {
    
    
const client = require("mailchimp-marketing");
client.setConfig({
  apiKey: "286bbbe58459291fabe36b048d149632-us18",
  server: "us18",
});


const runSub = async () => {
    const response = await client.lists.batchListMembers("98be18db27", {
      members: [{
        email_address:  req.body.email,
        status: "subscribed",
        merge_fields: {
            FNAME: req.body.firstName,
            LNAME: req.body.lastName
        }  // end merge_fields
    }] // end members
    }); // end batchListMembers
}; // end runSub

runSub();
// end add audience list
    const data = {
        members: [{
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.firstName,
                LNAME: req.body.lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us18.api.mailchimp.com/3.0/lists/98be18db27";
    const options = {
        method: 'POST',
        apiKey: "286bbbe58459291fabe36b048d149632-us18",
        server: "us18",
        auth: "xdarkhcx:286bbbe58459291fabe36b048d149632-us18"
    };

    const request = https.request(url, options, (response) => {
        if(response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        } else {    
            res.sendFile(__dirname + '/failure.html');
        }
        response.on('data', (data) => {
            console.log(JSON.parse(data));
        });
    });
        request.write(jsonData);
        request.end();
});

app.listen(process.env.PORT || 3000,function() {
    console.log('listening on port 3000');
});  //listening on port 3000


// api key 
//  31a72481072e3a6554e4479a4b1d9b5e-us18

// list ID 
// 98be18db27