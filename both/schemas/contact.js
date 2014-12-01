Schemas = {};

Schemas.ContactSchema = new SimpleSchema({
  contactName: {
    type: String,
    max: 50,
    min: 3
  }, 
  contactEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  contactMessage: {
    type: String,    
    max: 1000,
    min: 10
  }
});
