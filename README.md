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
The package needs at least one parameter where you have to set a receiver email. This is usually the email where you want the emails to be send. If you already have a seetings.json you can extend it. Else you have to create one.

    {
      "private": {
        "email": {
          "receiver" : "contact@trash-mail.com"
        }  
      }
    }

If just the receiver is set than meteor plots the emails as text in your console. If you have an environment variable to _MAIL\_URL_ set, than Meteor will use this one. Else you can define the credentials in settings.json too. The package will do the rest.

    {
      "private": {
        "email": {
          "username": "postmaster@trash-mail.com",
          "password": "asldjo19230129njassdlouajjd92j81",
          "server" : "smtp.mailgun.org",
          "port" : "587",
          "receiver" : "contact@trash-mail.com"
        }  
      }
    }
 
Take care you start the app now as with:

    $ meteor --settings settings.json
 
###Custom CSS
If you want to add some custom CSSS to the form element you can use the class property.

    {{> ContactForm class="col-sm-6 col-md-offset-1 col-md-6 waypoint fade-right"}}
    
This will generate a form with the following syntax:

    <form class="col-sm-6 col-md-offset-1 col-md-6 waypoint fade-right" ...>
    ...
    </form>
    
For further custom CSS you can use the normal css selectors. As you can see the basic template uses bootstrap selectors. If you need a template without bootstrap create a request. The generated html looks like so:

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


##Requests

If you need any further information or classes or another layout or further configurations. Feel free to create a request.

