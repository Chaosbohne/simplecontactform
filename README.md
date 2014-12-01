# simplecontactform

Simplecontactform is a Meteor package that adds a simple contact form to you app. Just add it to your app as described. This package should give you a basic markup for a simple contact form. Despite it is a good basis for every contact form so feel free to use this as fundament.

##Installation
In a Meteor application directory add the package with:
    
    $ meteor add chaosbohne:simplecontactform
    
##Example
Have a look at [rico-ruszewski.com/#contact](http://rico-ruszewski.com/#contact) for a working example.
    
##How to use
###Add the template
This package provides a helper function you have to call inside your code.
Add the helper with:

    {{> ContactForm}}
    
###Add setting.json
The package needs at least one parameter where you have to set a receiver email. This is usually the email where you want the emails to be send. If you already use a settings.json extend it. Else create a new one.

```JSON
{
  "private": {
    "email": {
      "receiver" : "contact@trash-mail.com"
    }  
  }
}
```

If just the receiver is set, than meteor plots the email as text in console. If you have an environment variable to _MAIL\_URL_ set, than Meteor will use this one. Else use additional credentials in settings.json to setup the _MAIL\_URL_ variable with the package.

```JSON
{
  "private": {
    "email": {
      "username": "master@trash-mail.com",
      "password": "asldjo19230129njassdlouajjd92j81",
      "server" : "smtp.mailgun.org",
      "port" : "587",
      "receiver" : "contact@trash-mail.com"
    }  
  }
}
```

Take care you start the app now with:

    $ meteor --settings settings.json
 
###Custom CSS
If you want to add some custom CSS you can use the class property.

```HTML
{{> ContactForm class="col-sm-6 col-md-offset-1 col-md-6 waypoint fade-right"}}
```    
   
This will generate a form with the following syntax:

```HTML
<form class="col-sm-6 col-md-offset-1 col-md-6 waypoint fade-right" ...>
...
</form>
```

For further custom CSS you can use the normal CSS selectors. As you can see the basic template uses bootstrap classes. If you need a template without bootstrap create a request. Since everyone uses another package of bootstrap I didn't add such a package to simplecontactform. You must add it on your own. Have a look at [nemo64](https://github.com/Nemo64/meteor-bootstrap)  if you don't know which you should use but every other package does the job too. The generated html looks like so:

```HTML
<form id="contactForm"  novalidate="novalidate">
  <fieldset>
    <div class="form-group">
      <label class="control-label" for="contact-name">Name</label>
      <div class="input-group input-group-lg">
        <span class="input-group-addon"><span class="glyphicon glyphicon-user glyph-color"></span></span>
        <input type="text" name="contactName" class="form-control" placeholder="Your name" required="" data-schema-key="contactName" maxlength="50">
      </div>        
    </div>
    <div class="form-group">
      <label class="control-label" for="contact-email">Your E-Mail</label>
      <div class="input-group input-group-lg">
        <span class="input-group-addon"><span class="glyphicon glyphicon-envelope glyph-color"></span></span>
        <input type="text" name="contactEmail" class="form-control" placeholder="Your email" required="" data-schema-key="contactEmail">    
      </div> 
    </div>   
    <div class="form-group">
      <label class="control-label" for="contact-message">Your Message</label>
      <div class="input-group input-group-lg">
        <span class="input-group-addon"><span class="glyphicon glyphicon-comment glyph-color"></span></span>
        <textarea name="contactMessage" rows="6" class="form-control custom-control" placeholder="Your message" required="" data-schema-key="contactMessage" maxlength="1000"></textarea>    
      </div>  
    </div> 
    <div>
      <button type="submit" class="btn btn-block btn-primary btn-lg">Send Message</button>
    </div>
  </fieldset>
</form>
```

Take care that the template uses a textarea inside a input-group. This is actually not supported by bootstrap. That's why I set the height to a fixed value. If anyone has a workaround for me I would be very happy.

##Requests

If you need:

 - any further information
 - more classes
 - another layout
 - more configurations
 - found a bug

than feel free to create a request.

