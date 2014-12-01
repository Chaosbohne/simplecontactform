Meteor.methods({
  'sendEmail': function (contactFields) {
    check(contactFields, Schemas.ContactSchema);

    this.unblock();

    Email.send({
      to: EmailConfig.settings.receiver, //Receiver
      from: contactFields.contactEmail, //Sender
      subject: 'Email from ' + contactFields.contactEmail + ' created by simple contact form', //Subject
      text: contactFields.contactMessage //Message
    });          
  }
});