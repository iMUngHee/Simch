---
id: 261
title: Spring-Batch-5.0-RC1-is-out!close
date: 'Oct 25 2022'
tags: ["spring","blog"]
metaTags: ["spring","blog"]
cover_image: https://velog.velcdn.com/images/gouz7514/post/e25007b2-d67e-47be-a296-b22718239ffa/OG-Spring.png
description: ''
---


It is finally here! The first release candidate of Spring Batch 5 is now available from our milestone repository. In this release, we worked on the following items:

Execution context Meta-data improvement
GemFire support removal

This blog post walks through these two changes in details. For the complete list of changes, please check the release notes.Execution context Meta-data improvement
In addition to what Spring Batch already persists in the execution context with regard to runtime information (like the step type, the restart flag, etc), this release adds an important detail in the execution context which is the Spring Batch version that was used to serialize the context.
While this seems a detail, it has a huge added value when debugging upgrade issues with regard to execution context serialization and deserialization.GemFire support removal
Based on the decision to discontinue the support of Spring Data for Apache Geode, the support for Apache Geode in Spring Batch was removed.
The code was moved to the spring-batch-extensions repository as a community-driven effort.What’s next?
We are planning to roll out a second release candidate early November and release 5.0.0 GA by the end of November, in time for Spring Boot 3.0.0. We would appreciate your help to try this release candidate out and share your feedback with us on Github, Twitter and StackOverflow. You can find a migration guide here.
I would like to thank all contributors who had a role in this first release candidate!

Spring Batch Home|Source on Github|Reference documentation


