# install packages
npm i

# database
create one database in mongodb with name 'appiness_test'
create two collections in that db with names -- 1=> 'userRoles'
                                                2=> 'users'
# run the application 
node index.js

# use app
app is currently running on port 6214, you could also change the port at .env file

# consume api
url : http://localhost:6214/api/users/register ; method : POST ; content-type:Application/json;

eg bodydata=>  {
	"name":"jagan",
	"address":"hyd"
}

# angular in node
i kept angular dist file in node-api/public folder
http://localhost:6214 with this url in browser navigates to angular app

# final statement
node application is entirely developed with singleton objects and classes