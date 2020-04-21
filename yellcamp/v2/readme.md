# show page

============================================= \
1 review the restful routes seen so far  \
2 add description to our campground model \ 
2 show db.collection.drop()  // use to remove all the collections at a time   \
4 and show route/template \
======================================== \

name    url         verb       description 
==========================================  

Index   /dogs        Get        display a list of all dog   \
new    /dogs/new    get        displays form to make a new dogs   \
create /dogs        post       and new dogs to db   \
show   /dogs/:id    Get        shows information about one dog   \
// it gives the dogs value based on the id value    

===========================================


       routes
index /campgrounds
new   /campgrounds/new 
create /camprounds 
show   / campgrounds/:id


# nested routes 

coming to comment section

New        campgrounds/:id/comments/new 
Create     campgrounds/:id/comments