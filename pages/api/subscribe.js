const client = require("mailchimp-marketing");

const API_KEY = process.env.MAILCHIMP_API_KEY
const SERVER_PREFIX = 'us1'

client.setConfig({
    apiKey: API_KEY,
    server: SERVER_PREFIX,
  });

export default async function handler(req, res) {

    const {name, email} = req.body
    
    try{
        await client.lists.addListMember("a147964788", {
            email_address: email,
            tags: ['WebDeb'],
            merge_fields:{
              FNAME: name
            },
            status: "subscribed",
          });
        res.status(200).json({ status: 'OK' })
    }
    catch(e){
        console.log(e)
        res.status(401).json({ err: e.errorMsg | 'Something went wrong' })
    }
}

    
  