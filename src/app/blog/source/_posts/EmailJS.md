---
title: How to use EmailJS in your Angular reactive form
date: 2019-01-26 14:00:00
tags: Angular, JavaScript, EmailJS, reactive form
---

How to use EmailJS in your Angular reactive form

             
This blog post is actually a combination of Angular with some JavaScript. I was really interested in setting up the form submission in Angular and utilized the EmailJS library to make this possible (after an unsuccessful try with NodeJS).  I recently added EmailJS to my portfolio website to configure and set up the form using Angular 7.
EmailJS is a JavaScript solution for quickly getting a form set up on the client-side with minimal effort. Although it took me quite a while to figure it out (and the customer support was very patient with me and really pulled through in the end), understanding the basics of core Javascript is crucial. Here's how you can pass the form data from the form to the TypeScript backend code using an event handler: (ngsubmit)="onSubmit($event)" inside the form tag. When the form is submitted, it triggers the event handler to be called inside the onSubmit function from which we can retrieve the form values and then store them inside a data object.
In the contact.component.ts file is where the actual plumbing goes down:
               

With this solution in place, there is no need to include a reference to EmailJS – all the magic happens with the let data assignment statement and passing the data to the EmailJS API subscription as shown above (many thanks to the awesome customer service support of the EmailJS library for helping me out with this aspect of the code!).
I then added a services checkbox formcontrol for the form’s services checkboxes and found this really cool blog post that assisted with this (https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular)https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular).
I then decided to include a recaptcha in the form to check whether or not the user is really a human. I added this using the “ng-recaptcha” package using the standard npm install command (npm i ng-recaptcha –save). The integration into the HTML is as follows:
The Google recaptcha sitekey should go in the app.module.ts file (the documentation that describes how to do this is here: https://www.npmjs.com/package/ng-recaptcha).
The template_params MUST be set up on the EmailJS dashboard; without this the form contents will not submit to their backend and thus the e-mail will not be able to be sent. In addition on the dashboard you can customize how your e-mail that goes out looks like.
Using the EmailJS RESTful API, there is no need for any installation. The alternative approach uses the EmailJS SDK (either with emailjs.send or emailjs.sendForm) to send the form submission by using jQuery or pure JavaScript. I used the RESTful API approach because I could not figure it out any other way to make it work within my Angular application.  I hope that you find this helpful with creating an Angular reactive form with form submission using the EmailJS library!
