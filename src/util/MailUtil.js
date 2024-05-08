const nodemailer = require("nodemailer");

const sendingMail = async (to, mailsubject, mailtext) => {
  const mailOptions = {
    from: "pythonforsamir@gmail.com",
    to: to,
    subject: mailsubject,
    // text: mailtext,
    html:`<h1>${mailtext}</h1>`
  };

  const transorter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pythonforsamir@gmail.com",
      pass: "uuslvgwmmlehawys",
    },
  });

  const res = await transorter.sendMail(mailOptions);
  console.log("res", res);
};

// sendingMail("samir.vithlani83955@gmail.com","welcome mail","welcome to the world of nodejs")

module.exports = {
    sendingMail,
}