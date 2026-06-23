cd into the db_package folder first
( cd /Users/carterwilliams/Coding/GCL/hq_Rockies/db_package )

make a change to schema.prisma
then run migrate dev -- applies that change to the database you are working on
( npm run migrate:dev )

add and commit the changes
( git add prisma/ && git commit -m "your message" )

bump the version -- updates package.json and creates a git tag in one step
( npm version patch )
# or `minor` / `major` depending on the change size

push the commit and the tag
( git push && git push --tags )

deploy new migration files to prod db
( npm run migrate:deploy )

publish the new package version to github packages
( npm publish )
