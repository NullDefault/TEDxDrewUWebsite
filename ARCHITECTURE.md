# TEDxDrewUniversity Website Architecture
- By David Nesterov-Rappoport ([NullDefault](https://github.com/NullDefault)), Creative Team
## Technology overview
Understanding and being aware of the following technologies is necessary for this project:
1) [React.js](https://reactjs.org/) - The entire website is built with the React framework.
 Understanding it is necessary for reading the project code and making contributions to it.
2) [Firebase](https://firebase.google.com/) - Serves as the backend of the project, used for
  (1) deployment and hosting, (2) database functions and (3) admin authentication.
3) [Chakra UI](https://chakra-ui.com/) - Component library that is used for actually building the frontend. Unless you
have a really good reason not to, most of your UI elements should be directly taken from the Chakra library.
## Deployment
As mentioned above, the project is deployed and hosted on the firebase app engine. There is no automatic deployment, 
meaning that the only way the updates to the code can go live is by you running the following commands:
```
npm run build
firebase deploy
```
Note: the firebase command will likely prompt you to log into the necessary account: contact the lead developer for
instructions or credentials. You can also ping me in an issue and I can help ya out.
## Internal Structure
**public** - public facing assets, index.html is the only thing of functional relevance.  
**src** - everything important is here  
- **assets** - static assets grouped by file type
- **components** - dynamic components that are used to build the website pages
    - adminInterfaces - components used in the admin page to interact with the database and render its contents in a simple form.
    - cards - containers specialized to render a particular type of asset / data.
    - collectionDisplays - used when you need to render a json collection into a list of components. Contain a way to map
    a data array into a component list, and a placeholder animation while that process is taking place.
    - topNavigation - components used to build the top navigation bar.
- **pages** - each website page is one of these files. 
- tests - supposed to have tests in them, but I have been lazy, so it's mostly here for aesthetic purposes.
- utils - various functions and constants used in multiple spots in the codebase. Placed here, so they can be imported,
thus reducing code repetition.
- App.js - essentially the main file in the context of a React application. You're gonna need to edit this if you want
to add any additional pages.
- firebase.js - firebase configuration and data needed to communicate with the backend.
- index.js - React entry point that starts the app.

.firebaserc - firebase stuff, nothing important  
.gitignore - files and directories that shouldn't be pushed to GitHub  
README.md - general info about the project  
firebase.json - firebase settings  
package-lock.json - package history   
package.json - package manager, you will need to edit this to add / remove libraries from the application.  

## General Notes
I think there are a few potentially confusing parts of the project, so I want to take a bit to make them explicit.
1) adminInterfaces and collectionDisplays have a lot of redundant code. The issue behind this is that most of these are
the same in the essential ways, however have enough small details that I felt that it would be more straightforward
to just have separate files for each variation instead of an object oriented solution. Consequently, if you ever need to
add another admin interface or collection display - just take one of the existing ones, copy and paste it into a new
file and customize it to fit the new requirements.
2) The styling in the project is overwhelmingly done by Chakra in-built styles. This means that you **absolutely**
have to be aware of how Chakra styling works to edit the project. **Please do not add styling libraries besides Chakra**,
it has all the functionality this project needs.
3) Basically all of the components in the project are *functional components*. If your previous experience with React was
only with class-based components, this might throw you off a bit, but the learning curve is small. The difference is 
mostly stylistic (in the context of this project at least), so try to stick to it unless the problem you are facing
necessitates a class based approach.