class ContactMailer < ActionMailer::Base
    default to: 'seb@sebastiankulig.com'
   
   def contact_email(name, email, body)
      @name = name
      @email = email
      @body = body
      
      mail(from: email, subject: 'Devmatch Contact Form Message')
   end
end