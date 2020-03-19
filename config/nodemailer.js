const nodeMailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const env = require("./environment");

let transporter = nodeMailer.createTransport(env.smtp);
let renderTemplate = (data, relativePath) => {
  let mailHTML;
  ejs.renderFile(
    path.join(__dirname, "../views/mailers", relativePath),
    data,
    function(err, template) {
      if (err) {
        console.log("error in rendering template");
        return;
      }
      mailHTML = template;
    }
  );
  return mailHTML;
};
module.exports = {
  transporter: transporter,
  renderTemplate: renderTemplate
};
