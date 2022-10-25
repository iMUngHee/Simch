---
id: 95
title: Patterns-for-Flask-—-Flask-Documentation-(2.2.x)
date: 'Oct 25 2022'
tags: ["python","flask"]
metaTags: ["python","flask"]
cover_image: https://velog.velcdn.com/images/poiuyy0420/post/91f6a5e0-8aae-43f5-b2f0-d683d877ff69/flask.png
description: ''
---


            
  
Patterns for Flask¶
Certain features and interactions are common enough that you will find
them in most web applications. For example, many applications use a
relational database and user authentication. They will open a database
connection at the beginning of the request and get the information for
the logged in user. At the end of the request, the database connection
is closed.
These types of patterns may be a bit outside the scope of Flask itself,
but Flask makes it easy to implement them. Some common patterns are
collected in the following pages.


Large Applications as Packages
Simple Packages
Working with Blueprints


Application Factories
Basic Factories
Factories & Extensions
Using Applications
Factory Improvements


Application Dispatching
Working with this Document
Combining Applications
Dispatch by Subdomain
Dispatch by Path


Using URL Processors
Internationalized Application URLs
Internationalized Blueprint URLs


Using SQLite 3 with Flask
Connect on Demand
Easy Querying
Initial Schemas


SQLAlchemy in Flask
Flask-SQLAlchemy Extension
Declarative
Manual Object Relational Mapping
SQL Abstraction Layer


Uploading Files
A Gentle Introduction
Improving Uploads
Upload Progress Bars
An Easier Solution


Caching
View Decorators
Login Required Decorator
Caching Decorator
Templating Decorator
Endpoint Decorator


Form Validation with WTForms
The Forms
In the View
Forms in Templates


Template Inheritance
Base Template
Child Template


Message Flashing
Simple Flashing
Flashing With Categories
Filtering Flash Messages


JavaScript, fetch, and JSON
Rendering Templates
Generating URLs
Making a Request with fetch
Following Redirects
Replacing Content
Return JSON from Views
Receiving JSON in Views


Lazily Loading Views
Converting to Centralized URL Map
Loading Late


MongoDB with MongoEngine
Configuration
Mapping Documents
Creating Data
Queries
Documentation


Adding a favicon
See also


Streaming Contents
Basic Usage
Streaming from Templates
Streaming with Context


Deferred Request Callbacks
Adding HTTP Method Overrides
Request Content Checksums
Celery Background Tasks
Install
Configure
An example task
Run a worker


Subclassing Flask
Single-Page Applications





            
          
