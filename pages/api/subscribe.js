const client = require("@mailchimp/mailchimp_marketing");

const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER_PREFIX = "us14";

client.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
});

export default async function handler(req, res) {
  const { name, email } = req.body;

  try {
    await client.lists.addListMember("e9fb0760df", {
      email_address: email,
      tags: ["WebDeb"],
      merge_fields: {
        FNAME: name,
      },
      status: "subscribed",
    });
    res.status(200).json({ status: "OK" });
  } catch (e) {
    res.status(401).json({ err: e.errorMsg | "Something went wrong" });
  }
}
