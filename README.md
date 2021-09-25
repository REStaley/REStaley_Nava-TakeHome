### Running the app

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. While inside the project directory, run the app using `npm`

````
npm start
````
The application is now running at [localhost:3000](localhost:3000)

### The Process

  This application was created using the ReactJS framework. ReactJS is a component-based framework that naturally lends itself to web development due to the reusability and readability of created components. Additionally, the 1-way data flow from parent components to their children ensures that adjustments made to the children will not negatively impact larger components, or other children of the same parent. The wireframe provided drove the decision to use ReactJS, as the light and dynamic adding and rendering of listed components is a use case that works well with React's component and state-driven design. Additionally, the CSS design decisions were made with recreating the wireframe as closely as possible in mind. Due to this being a small application, as well as time considerations, only the base react libraries were used for this.

  Further questions for the design team would include the following: Are there additional datapoints for the household members that need to exist which aren't being displayed on the wireframe? Should the "Add new member" form be formatted in any specific way? Should the form item for "Favorite Fruit" be an input field or a selectable drop-down, and, if the latter, what would be the valid fruits, and is that culinary fruit or botanical fruit? Would there be any additional functional logic that may need to be included so that this application can interface correctly with other components that may be added later (i.e. creating a server to write data persistently, or importing data from a file, etc)?

### Additional Improvements

  Both the Delete and Edit functionalities would be simple to include with this application. Because of React's tractability, creating new functions to remove the matching "member" entry from the state and updating the information for the matching "member" entry, respectively, would be the approach to take. Each function would have to be passed down from the "Dashboard" component to the "MemberEntry" component, which would need buttons added for each of the functions to tie to. The functions would use a specific data field to identify which entry in the Dashboard's state.members to adjust. Delete would then filter out the entry with the matching field, while Edit would need to map out the entries and edit only the one with the matching field.

  For the Edit function, it would also be necessary to open a form like the "Add new member" form to make adjustments to the data. In this case, MemberEntry would also call the NewMemberForm, just as the "Add new member" button does, and the NewMemberForm would need to be altered to account for which component is calling it, so that it can pre-populate with the pre-existing member's data and use a less confusing naming convention now that it's not only for new members. Since props can be re-named as they are passed down, both locations which would call the NewMemberForm should pass their respective functions through with the same name, so that it can be used in the submit button without extra considerations.

  If only the data fields present on the wireframe are taken into consideration, however, there exists a case where the incorrect entry would be deleted or edited. It is therefore necessary to allow each member entry to contain a unique "id" to work off of. This ID must not be user-editable to avoid any instances of 2 entries with the same ID field. Any method which guarantees uniqueness can be used for generating the ID.

### Feedback
  This exercise was a lot of fun! It did take me longer than the 2 hours, but that was primarily due to some issues setting up my environment and me needing to brush up on my CSS after having some issues with the flex displays causing my cards to look very strange. I did learn a lot from that, though!
