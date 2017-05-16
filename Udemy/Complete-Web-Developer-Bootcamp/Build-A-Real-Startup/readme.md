# Build a Real Startup - Saas Ruby Project Application

Start over with the updated course on: http://upskillcourses.com

## Dev Match - Sass Ruby Application
#### A membership site where enterpreneurs can meet developers
* Heroku Production page: [Link](https://enigmatic-wildwood-68995.herokuapp.com/)
* Cloud9 source files: [Link](https://ide.c9.io/sebam2k4/devmatch_saas)

### What we are building:
* Membership-based web application where users can sign up for free or pay monthly subscription fee for access to our site (Software-as-a-Service)
* The value we're creating: Acess to an exclusive community of investors, entrepreneurs and developers.
* Users can create profile pages
  * Free users get basic, limited profiles with contact info hidden
  * Paying users get premium access to contact information for all users.
  
### Plan:
1. Get set up with version control and live production servers for the real deal
2. Add basic pages like Home, About, and add Bootstrap
3. Build a contact form system so that the application can handle messaging & email
4. Give users ability to register and login/logout of our site (authentication)
5. Integrate membership plans: Basic (free) and Pro (recurring monthly fee)
6. Use Strijpe API to handle payment processing
7. Create user profiles that can be edited, along with photo upload capability
8. Build a community by listing acrive users on the Community page.

## Important Notes:
* To push the Ruby App subfolder devmatch_app to Heroku root directory use the following terminal git command: `git subtree push --prefix (path from git root directory) heroku master`. Need to run this command from git root directory.