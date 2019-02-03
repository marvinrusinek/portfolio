---
title: JSON and Two-Way Data-Binding
date: 2019-01-29 14:00:00
tags:
---

One of the interesting aspects of Angular is the ability to bind data from a model to the view. This is known as 2-way data-binding. You will typically see these   syntax/symbols in your Angular app. This is the way of displaying the data from the model.
Typically a situation where you would use 2-way data binding is to extract data from a JSON file. The JSON file will typically store the metadata that you are trying to retrieve.

For my project, the interface of the model looks like this:


The usual way of retrieving this data is by using an observable (from RxJS) to get the data (in this case project data) from the url using an http (HttpClient) request. This is shown in the project.service.ts file below:


And in your project template (project-list.component.html), the code could look something like this:


As you can see in the snippet above, I am extracting imagePath, imageTitle, projectUrl and title from the JSON file bound to the project interface object. This is in a nutshell how the two-way data-binding works. I hope you find this helpful and should be posting more Angular posts soon.
