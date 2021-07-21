const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = new express();

function getNLUInstance() {
    let api_key = process.env.api_key;
    let api_url = process.env.api_url;


const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2020-00-01',
  authenticator: new IamAuthenticator({
    apikey: api_key,
  }),
  serviceUrl: api_url,
});
return naturalLanguageUnderstanding;
}


app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {

const analyzeParams = { 'url': req.query.url, 'features': { 'entities': { 'emotion': true, 'limit': 1 } } }

const naturalLanguageUnderstanding = getNLUInstance();

naturalLanguageUnderstanding.analyze(analyzeParams) .then(analysisResults => { console.log(analysisResults); console.log(JSON.stringify(analysisResults.result.entities[0].emotion,null,2)); return res.send(analysisResults.result.entities[0].emotion,null,2); //return res.send(analysisResults); }) .catch(err => { return res.send("Could not do desired operation "+err); });

}); 

app.get("/url/sentiment", (req,res) => {

    
const analyzeParams = { 'url': req.query.url, 'features': { 'entities': { 'emotion': true, 'limit': 1 } } }

const naturalLanguageUnderstanding = getNLUInstance();

naturalLanguageUnderstanding.analyze(analyzeParams) .then(analysisResults => { console.log(analysisResults); console.log(JSON.stringify(analysisResults.result.entities[0].emotion,null,2)); return res.send(analysisResults.result.entities[0].emotion,null,2); //return res.send(analysisResults); }) .catch(err => { return res.send("Could not do desired operation "+err); });

});

app.get("/text/emotion", (req,res) => {

    
const analyzeParams = { 'url': req.query.url, 'features': { 'entities': { 'emotion': true, 'limit': 1 } } }

const naturalLanguageUnderstanding = getNLUInstance();

naturalLanguageUnderstanding.analyze(analyzeParams) .then(analysisResults => { console.log(analysisResults); console.log(JSON.stringify(analysisResults.result.entities[0].emotion,null,2)); return res.send(analysisResults.result.entities[0].emotion,null,2); //return res.send(analysisResults); }) .catch(err => { return res.send("Could not do desired operation "+err); });

});

app.get("/text/sentiment", (req,res) => {

    
const analyzeParams = { 'url': req.query.url, 'features': { 'entities': { 'emotion': true, 'limit': 1 } } }

const naturalLanguageUnderstanding = getNLUInstance();

naturalLanguageUnderstanding.analyze(analyzeParams) .then(analysisResults => { console.log(analysisResults); console.log(JSON.stringify(analysisResults.result.entities[0].emotion,null,2)); return res.send(analysisResults.result.entities[0].emotion,null,2); //return res.send(analysisResults); }) .catch(err => { return res.send("Could not do desired operation "+err); });

});


let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})