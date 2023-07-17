<h1 style="color:#397ce7">React-Simple-Restaurant-Management-Chaka-UI</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

<h2 style="color:red">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the json-server

<p style="color:red">
   Note:-
</p>

1. Make sure that the Json-Server is running at port 8080
2. Use Json-Server URL
   <p style="color:red">
   http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}
   </p>

<h2 style="color:#397ce7">
Maximum Marks - 22
</h2>

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Should have the basic structure on page load - 1 mark
 ✅ addRestaurantReducer should handle invalid action type by throwing an error with the message and also able to handle RESET_VALUES action - 1 mark.
 ✅ editRestaurantReducer should handle invalid action types by throwing an error with the message along with other action types - 2 mark
 ✅ homeReducer should handle invalid action type by throwing an error with a message - 2 marks
 ✅ Check whether, in the home page, select tags are having default values as 3, rating, and asc, and showing the data in order - 1 mark
 ✅ Select the option to set the number of restaurants per page should be working - 2 marks
 ✅ Able to see restaurants details on different pages - 1 mark
 ✅ Able to sort the data in descending order - 1 marks
 ✅ Able to sort the data in ascending order - 1 marks
 ✅ Able to populate the restaurant details on the edit page(EditRestaurant.jsx) - 1 mark
 ✅ Able to edit the restaurant details and redirect to home page(/) after editing and data got updated on the DOM - 2 marks
 ✅ Able to delete the restaurant - 1 mark
 ✅ Able to add new restaurant - 1 mark
 ✅ On the home page loading in h1 tag should exist between req and res from json server - 1 mark
 ✅ Displays 'Something went wrong...' in h1 on getting an error - 1 mark


```

<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
├── src
|  ├── App.css
|  ├── App.jsx
|  ├── Components
|  |  ├── AllRoutes.jsx
|  |  ├── Navbar.jsx
|  |  ├── Pagination.jsx
|  |  └── RestaurantCard.jsx
|  ├── index.css
|  ├── index.js
|  ├── pages
|  |  ├── AddRestaurant.jsx
|  |  ├── EditRestaurant.jsx
|  |  └── Home.jsx
|  ├── reducers
|  |  ├── addRestaurantReducer.js
|  |  ├── editRestaurantReducer.js
|  |  └── homeReducer.js
|  ├── styles.css
|  └── utils
|     └── api.js
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>
You need to develop a simple restaurant management app where users can view a list of restaurants, add a new restaurant, and edit existing ones. The application is structured into components, with reducers handling state management and utilities for API calls. Additionally, it utilizes Chakra UI for styling and React Router for navigation. And use axios for making `API` requests.

[video explaining functionality](https://vimeo.com/834973795/4f3eb3d01c?share=copy)

<div>
<img src="https://i.imgur.com/XgOCYBm.png" width="100%">
</div>

<div style="color:red">
1. Use axios.
<br/>
2. Use onSubmit to submit the forms.
</div>

## index.js

This is the entry point of your application. It uses the createRoot method from the React DOM to create a root element and renders the App component inside a ChakraProvider (which provides the Chakra UI component styles) and a BrowserRouter (which enables routing in the application).

You need to import the `ChakraProvider` and `BrowserRouter` here as it is not provided in the boilerplate.

## App.jsx:

This is the main application component.

It renders a `Navbar` component (which should contain navigation links) and an `AllRoutes` component (which should contain the app's routes and is likely defined in components/AllRoutes.jsx).

## AddRestaurant.jsx

This component allows the user to add a new restaurant.

1. A `form` tag is created for you along with chakra UI components. You need to import the components that we used. And add functionality.
2. You need to import the required components/elements. Which are used in the boilerplate, along with the required elements.
3. Whenever you are entering the details in the form, the state of the reducer should get updated. so dispatch appropriate action type(`"CHANGE_INPUT"`) with payload.
   - Every `Input`, `Select` component are having a `name` attribute based on which you need to update values of the `state` in the reducer.
   - for example input tag with the name `"number_of_votes"` should update the reducer state with the key name `number_of_votes`.
4. On submitting the form it should make a `POST` request to `/restaurants` and update the db.json.(You can use `postRestaurant` function in `api.js`. But need to complete the function in order to use it)
5. After a successful `POST` request you should get navigated to `/` Home page.

Note:- 1. Use `onSubmit` to submit the form.

### reducers/addRestaurantReducer.js

This file contains the reducer function for the AddRestaurant component. It helps in managing the form state and resetting the form after submission.

It uses the useReducer hook to manage its state through the `addRestaurantReducer` function(`reducer function`).

- `addRestaurantReducer` function is present under `reducers/addRestaurantReducer.js` folder.
- The initial state of the reducer is

```json
{
  "name": "", //string
  "type": "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
  "rating": "", // number --> 1-5
  "number_of_votes": "", // number
  "price_starts_from": "", // number
  "image": "" // string imageUrl
}
```

- The action types that should be used in the reducer are
  - `"CHANGE_INPUT"` which updates the values of the state.
    - Every time the input value changes in the input tag, the `"CHANGE_INPUT"` action type should get dispatched with the appropriate payload to update the state in the reducer.
    - Hint:- Manage the logic in payload like `{type:"CHANGE_INPUT",payload:{name:type,value:ethnic}}`
    - In a similar way if I want to change/add the value of the rating I should dispatch `{type:"CHANGE_INPUT", payload:{name: rating,value:5}}`. (similarly based on which key value you want to update in the reducer state, the payload object should have one of the key values as name:`keyname of the reducer state`)
  - `RESET_VALUES` which should be used for resetting the state to the initial state.
  - for invalid action type it should throw an error with the message `invalid action type, {type}`. where type is the name of the invalid action type.
    - for example, if I use action type `wrong_action_type`, then it should throw an error `invalid action type, wrong_action_type`.

When the form is submitted, it makes a `POST` request using the `postRestaurant` function from `api.js` to save the restaurant data.

<div>
<img src="https://i.imgur.com/Pv4ctS8.png" width="100%">
</div>

## EditRestaurant.jsx:

Similar to AddRestaurant, this component allows users to edit an existing restaurant. It fetches the data of the restaurant to be edited using its ID from the URL and then makes a `PUT` request using the `putRestaurant function` from `api.js` to update the restaurant data.

1. A `form` tag is created for you along with chakra UI components. You need to import the components that we used. And add functionality.
2. You need to import the required components/elements. Which are used in the boilerplate, along with the required elements.
3. On page load make get the id of the restaurant from the URL and fetch the details of the Single restaurant by using `getSingleRestaurant` from api.js.(you need to complete the function.)
4. After getting the details of the restaurant dispatch an action with type `UPDATE_STATE` and payload.
5. Based on the state of the reducer, update the form values in a way such that all the details of the restaurant should get updated in the form.
6. Whenever you are entering the details in the form, the state of the reducer should get updated. so dispatch appropriate action type(`"CHANGE_INPUT"`) with payload.
   - Every `Input`, and `Select` component are having a `name` attribute based on which you need to update values of the `state` in the reducer.
   - for example, input tag with the name `"number_of_votes"` should update the reducer state with the key name `number_of_votes`.
   - Hint:- Manage the logic in payload like `{type:"CHANGE_INPUT",payload:{name:type,value:ethnic}}`
    - If I want to change/add the value of the rating I should dispatch `{type:"CHANGE_INPUT", payload:{name: rating,value:5}}`. (similarly based on which key value you want to update in the reducer state, the payload object should have one of the key values as name:`keyname of the reducer state`)
7. On submitting the form it should make a `PUT` request to `/restaurants` and update the db.json.(You can use `putRestaurant` function in `api.js`. But need to complete the function in order to use it)
8. After a successful `PUT` request you should get navigated to `/` Home page.

### reducers/editRestaurantReducer.js

This file contains the reducer function for the EditRestaurant component. It helps in managing the state of the form for editing a restaurant.

It uses the useReducer hook to manage its state through the `editRestaurantReducer` function(`reducer function`).

The initial state of the reducer is

```json
{
  "name": "", //string
  "type": "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
  "rating": "", // number --> 1-5
  "number_of_votes": "", // number
  "price_starts_from": "", // number
  "image": "" // string imageUrl
}
```

- The action types that should be used in the reducer are
  - `"CHANGE_INPUT"` which updates the values of the state.
    - Every time the input value changes in the input tag, the `"CHANGE_INPUT"` action type should get dispatched with the appropriate payload to update the state of the reducer.
  - `"UPDATE_STATE"` which updated the entire state of the reducer.
    - we will dispatch an updated state when we want to update the entire state. Like on page load, we will fetch the data of a single restaurant and dispatch an action with type `"UPDATE_STATE"` and payload, in a way that it will update the details of the restaurant so that we can see the pre-existing values of the restaurant in the form.
  - for invalid action type it should throw an error with the message `invalid action type, type`. where type is the name of the invalid action type.
    - for example, if i use action type `wrong_action_type`, then it should throw an error `invalid action type, wrong_action_type`

## Home.jsx:

This is the homepage component which displays a list of restaurants.

It uses useReducer to manage its state through the `homeReducer`. It fetches the list of restaurants using the `getRestaurants` function from `api.js`. The user can also `sort` and `paginate` the restaurant list. The component renders `RestaurantCard` for each `restaurant` and a `Pagination` component to handle `pagination`.

We have created some of the required elements or components from Chakra UI, you need to import them and create the required elements by importing from Chakra UI.

There should be 3 Select components from chakra UI(`Select`)

1. `Select` component(This componet will define how many restaurants should be on a single page.)

- This should have 3 options with textContent and values as 3, 6, 9.(default option should be `3`)

2. `Select` component(This component will define on what basis the restaurants should be sorted)

- This should have 2 options with textContent `Rating`(value as `rating`) and `Price Starts From`(value as `price_starts_from`).(default option should be `Rating`)

3. `Select` component(This component will define in which order the restaurant should be sorted)

- This should have 2 options with textContent `Ascending`(and value `asc`) and `Descending`(and value as `desc`).(default option should be `Ascending`)

**Note** Based on the values of the Select components above you need to fetch the data by using query params.

- By default, there should be `3` restaurants per `page` and data should be sorted based on `Rating` and `order` should be `Ascending` order
- Based on the number of restaurants on a single page, the buttons in the `pagination` component should change accordingly.

- Create a `SimpleGrid` with columns={{ base: 1, md: 2, lg: 3 }} which helps in the responsiveness of the website.
- Append all the restaurants to the above `SimpleGrid` using the `RestaurantCard` component.
- Also add the `Pagination` component.

<hr/>

Between `req` and `res` to/from the json server there should only be `h1` tag with textContent `Loading...` should exist on the DOM.

If there is any error that occurred while fetching the data then there should only be `h1` tag with textContent `Something went wrong...`  should exist on the DOM.

#### Functionality

On page load make a `GET` request to `/restaurants` by adding query params to it. The default condition is only 3 restaurants details should be on the page and data should be sorted based on `rating` in `ascending order`. This is all you can manage in `getRestaurants` function in api.js

- All the data should be sorted by making an API request to the json-server.
- Whenever we change the `Select` options appropriate actions should be dispatched to the reducer. To know which action types should be dispatched go through homeReducer.js.

### homeReducer.js:

This file contains the reducer function for the Home component. It helps in managing the state of the restaurant list.

The initial state of the reducer is

```json
{
  "loading": false,
  "data": [],
  "err": false,
  "totalPages": 1
}
```

It should contain the following action types.

- `FETCH_LOADING`: which will update the `loading` value in the reducer state to `true`.
- `FETCH_SUCCESS`: which will update the `loading` value to `false`, `err` to `false`, and data with `restaurants data` that should be displayed on the `DOM`, `totalPages` to `total number of pages are available`.
  - for example, the action will be like
  ```
  {
         type: "FETCH_SUCCESS",
         payload: { data: [array of objects], totalPages: 9 },
  };
  ```
- `FETCH_FAILURE`: which should update the `loading` value to `false`, `err` value to `true`, `data` value to [], and `totalPages` to `1`
- for invalid action type it should throw an error with the message `invalid action type, type`. where `type` is the name of the invalid action type.

## api.js:

This file contains functions that make HTTP requests to the server to fetch, add, update, and delete restaurants.

## AllRoutes.jsx:

This component sets up the different routes of the application using React Router. It defines three routes:

- `/` the Home component(`Home.jsx`), which is the main page displaying a list of restaurants.
- `/add-restaurant` renders the AddRestaurant component(`AddRestaurant.jsx`), allowing users to add a new restaurant.
- `/edit-restaurant/:id` renders the EditRestaurant component(`EditRestaurant.jsx`), which is used for editing a restaurant's information by its `id`.

## Navbar.jsx:

- This component renders the navigation bar of the application. It contains two navigation `Links` with the following test content:
- `Link` 1 with textContent `Home`, which navigates the user to the main page (`/`) displaying the list of restaurants.
- `Link` 2 with textContent `Add Restaurant`, which navigates the user to the page(`/add-restaurant`) where they can add a new restaurant.
- Use the ChakraUI Link component only.

## RestaurantCard.jsx

- This component should receive the details of the restaurant as props and is used for displaying the details of the restaurant along with `EDIT` chakra UI Link and `DELETE` chakra UI Button component.
- On clicking on `EDIT` Link the user should be navigated to `/edit-restaurant/id` where `id` is the `id` of the restaurant.(`EditRestaurant page`)
- On clicking on `DELETE` Button, it should make a `DELETE` request to `/restaurants/id`. And the data should get updated on the DOM also. (After deleting the restaurant again you need to make an appropriate `GET` request to get the DATA)
- Some of the components or elements we added in the boilerplate, you need to import them from the chakra UI along with the required elements.
- The following chakra UI elements should exist on the DOM.
  - Image with for displaying the image of the restaurant.
  - Create a `Stack` inside which should contain the following components(already provided in the boiler plate)
  - `Heading` size="md" and textCotnent `Name : {name}` where name is the name of the restaurant
  - 3 `Text` components which should contain the following textContent
    - 1st one should have textContent `Type : {type}` where `type` is the `type` of the restaurant
    - 2nd one should have textContent `Rating : {rating}` where rating is the `rating` of the restaurant.
    - 3rd one should have textContent `Number of votes : {number_of_votes}` where `number_of_votes` is the `number_of_votes` of the restaurant.
    - 4th one should have textContent `Price Starts From : ${price_starts_from}` where is `price_starts_from` os the `price_starts_from` of the restaurant.
  - created `HStack` for wrapping EDIT `Link` and `DELETE` Button. You just need to import them and add functionality.

## Pagination.jsx

- This component should be used for displaying the button using chakra UI Button component clicking on which the appropriate page data should get updated on the DOM.
- The Buttons in this application should get updated based on the total number of restaurants that should be displayed on a single page and the total pages left.
- The page number should start from 1 and the default page is 1 and the total number of Buttons should change according to the number of restaurants that should be shown.
- You can get the total number of lectures from the headers of the response in the below-mentioned way.
```
response.headers.get(`X-Total-Count`) OR response?.headers["x-total-count"]
```


 <div>
<img src="https://i.imgur.com/jL7cmBu.png" width="100%">
</div>

#### <span style="color:red">Note: - </span> Use of <span style="color:red">Chakra -UI</span> is compulsory otherwise test cases will fail

<h3 style="color:#397ce7">

### Note: The submissions are invalid if <span style="color:red">useReducer</span> hook is not used.

<h2 style="color:#397ce7">
Tested on cp.masaischool.com:
</h2>

<figure style="border: 1px solid gray; border-radius: 3px;">
<img src="https://i.imgur.com/AKC5Dtd.png" width="100%">
<figcaption align = "center"><b>Fig.5 - cp.masaischool.com</b></figcaption>
</figure>

<h2 style="color:red">
Important Instructions:
</h2>

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

<h2 style="color:red">
General Instructions:
</h2>

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
