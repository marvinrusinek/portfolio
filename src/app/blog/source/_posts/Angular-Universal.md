---
title: Benefits of using Angular Universal in your Angular project
date: 2019-01-26 14:00:00
tags:
---

Angular Universal is a way of making your front-end code render faster by putting a runnable version of your code on a server. The benefit is to make your code run faster in the browser and it is basically a cached version that the server understands and passes back to the client before the page gets load. This is known as Server-Side Rendering (SSR). In addition to the SSR aspect, Angular Universal makes your index.html file indexable by a search engine which has great benefit for the website's searcability known as Search Engine Optimization (SEO). 
I was intrigued by this dual benefit when I started learning about Angular Universal by taking a course on Udemy ("Angular 5 - The Complete Guide"). In the course, Maximilian Schwarzmuller gives a thorough setup of the NodeJS code needed to communicate with the backend along with various configurations. In the end, a server.js file gets created which contains the runnable client-side code on the backend. This file can then be deployed to a server that has NodeJS enabled. There are several commands necessary to get this to work. They are as follows:

ng build --prod --aot --build-optimizer=true		// this builds the browser version of the code
ng run PROJECTNAME:server				                // this creates a runnable version of the project on the server
npm run webpack:server					                // webpack creates a minified version of the project that can be run on the server				
node dist/server.js					                    // runs the server.js file on localhost:4000

I ran these commands on the command line for my project after doing the necessary configurations, but I have encountered a Deprecation Warning as follows:
(node:9724) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

I suppose I could deploy it as follows, but the code delivered to the front-end is not pretty and I would like to resolve this warning so that the code in the browser displays correctly. After some Googling, it seems that it might have to do something with yarn. The warning might be because I had yarn installed and maybe that's why it's complaining, I'm not entirely sure. Maybe I need to build the project with yarn??? If anyone reads this blog post, any help with this would be greatly appreciated. Please contact me directly through my website. Thanks.
