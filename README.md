#About
##Table of Contents
**[Introduction](#introduction)** <br>
**[Technologies](#technologies)** <br>
**[Minimum Viable Product](#minimum viable product)** <br>
**[Wishlist](#wishlist)** <br>
**[Outstanding Issues](#outstanding issues)** <br>


###Introduction

This single-page app attempts to address a major issue in the wildlife rehabilitation community - the lack of an easy to navigate and step-by-step care guide for concerned citizens who come upon injured animals.

The purpose of this project is actually three-fold:

1. Offer users specific, detailed and actionable advice on how to provide temporary assistance to wounded or abandoned animals based on submitted data about species and maturity.

2. Reduce burden on wildlife rehab centers and the endangerment of animals by clearly outlining situations and circumstances that call for the removal of animals from their habitats for professional care, while trying to answer common questions and dispel popular myths about the handling of wildlife.

3. Provide directions and contact information for nearest wildlife rehabiliation center in the event that such care is actually necessary.

###Technologies

The app is built with Rails and uses Angular.js to render dynamic content in response to client side events. The database is maintained with PostgreSQL.

Mapping is done by comparing geodata inferred from the user's IP address (through use of the GLL API) to values returned from an API that compiles contact and location data about wildlife rehabilitators in every state.

###Minimum Viable Product

My MVP was pretty sraightforward. A user would be prompted to choose from 3 categories of animals (land mammals, birds, and marine animals), the selection of which would trigger an animation that shoves aside the prompt and replaces it with one that asks them to narrow down the query, first by species, and then by maturity. This would transition into a new element that gets populated with the appropriate instructions. Finally, the user would be given an option to see information about their nearest rehabiliator - first as plain text, and in later versions of the app, a map view.

###Wishlist

Users will be able to create personal accounts that allow them to sign up for automatic alerts whenever a query is made regarding specific species in specific areas. This feature will mainly be directed at rehabbers and researchers who have an interest in collecting data about often-unreported minor encounters with large predators or rare species, and will offer the user a choice between email or automated text messages via Twillio.

###Outstanding Issues

I was grabbed by the angular material we went over in class and was really excited to jump deeper into it. For the most part, since the mission of the app is so straightforward, this meant using animations and hidden objects to prsent a really intuitive and clean flow from landing to final result. As it turned out, the vision I had turned out to be harder to implement than I expected. 

Because the data set I'm working with is totally static and the actual mechanics of a pared-down, multi-page version of the app would be trivially simple, I felt comfortable spending the majority of the last week researching and trying to enact a very polished presentation of it. I didn't pivot away from my original vision as quickly as I should have to meet my MVP because it felt like I was always around the corner from a solution.

The outstanding issue at this point is that, as of right now, I've scrapped nearly everything besides my database. My json is rendering, but nothing flowed the way I had hoped and it's going to take at least a few more days of intense tinkering to get it close to where I want. This project addresses something hugely important to me and I'm excited to continue working on it full-time.
