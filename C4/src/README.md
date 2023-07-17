<h1 style="color:#397ce7">React-Chakra-UI-Books-Library-useReducer</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

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
Maximum Marks - 16
</h2>

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check for the initial state and reducer is returning state for invalid action type - 1 mark
 ✅ On page load reducer is updating state for loading and books data - 2 marks
 ✅ Check if the loading skeleton is visible while data is being fetched - 1 marks
 ✅ Check if correct books information is visible in the dom - 2 marks
 ✅ Check if Filter is working as expected - 1 - 1 mark
 ✅ Check if Filter is working as expected - 2 - 1 mark
 ✅ Check if Sorting is working as expected for ascending  - 1 mark
 ✅ Check if Sorting is working as expected for descending - 1 mark
 ✅ Check if Filtering and Sorting both are working together - 4 marks
 ✅ On clicking the Reset All button filter and sorting is removed - 1 mark
```

<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
src
├── App.jsx
├── components
|  └── books
|     ├── Books.jsx
|     ├── BooksCard.jsx
|     └── Loading.jsx
├── index.js
├── reducers
|  └── books
|     └── reducer.js             ? manages initial state and reducer function
├── styles.css
└── utils
   └── api.js                    ? handle api requests
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>

- You need to create a React books library dashboard using `Chakra UI`. Users can view book details as cards and filter the books by category. The `useReducer` hook will handle the initial state of books data ( loading,error,data ).
- Once the API request is complete, the retrieved books data should be displayed as cards using `BooksCard.jsx`.
- Users can `filter` books by category, allowing them to select a specific category and view only the relevant books.
- Users can `sort` the books by `publication date` or `category`. The sorting functionality updates the book display accordingly.
- Filtering and sorting should work together

#### <span style="color:red">Note: - </span> Use of <span style="color:red">Chakra -UI, useReducer Hook and axios</span> is compulsory otherwise test cases will fail

<h3 style="color:#397ce7">
useReducer:
</h3>

- The initial state (to maintain the books data that is fetched via API) will be as

```json
{
  "loading": false,
  "data": [],
  "error": false
}
```

also in reducer if none of the action types matches; the default case should `throw` an `error` with the message `invalid action type`.

- The following action types will be triggered.

```json
"FETCH_DATA_LOADING" ? triggered while fetching data
"FETCH_DATA_SUCCESS" ? triggered when fetching data is successful
"FETCH_DATA_FAILURE" ? triggered when fetching data is unsuccessful
```

<h2 style="color:#397ce7">
Components:
</h2>

<h3 style="color:#397ce7">
1. App.jsx
</h3>

- It will contain `Books.jsx` component.

<h3 style="color:#397ce7">
2. Books.jsx
</h3>

- On loading this page make an api request to `/books` to get the books. To maintain the current state of api request, we use `useReducer` hook as mentioned above. The state maintained using `useReducer` hook will have keys `{loading, error,data}`. the data will be books data.
- While books data is being fetched show `Loading.jsx` component. ( hint : when the loading is true )

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/WnW6hN3.png" width="100%">
<figcaption align = "center"><b>Fig.1 - Initial Landing Page</b></figcaption>
</figure>

- Import the `SimpleGrid` component from chakra ui and give it the attribute `data-cy="books_container"`.
- If data is retrieved from the API, then use the SimpleGrid component to map the book's data into the `BooksCard.jsx` component.
- The SimpleGrid component should not be visible if the loading indicator is being shown.

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/ggW8Yl3.png" width="100%">
<figcaption align = "center"><b>Fig.2 -  After books data retrieved</b></figcaption>
</figure>

#### Filter & Sorting

- You need to import three `Select` component from chakra UI to maintain category filter, sort criteria and sort order.
- To manage the state and perform sorting and filtering, you can use the useState hook. The sorting and filtering operations will be done exclusively using the `json-server`.
- Import the `Select` component from Chakra UI to create a filter. Assign it the attribute `data-cy="books_filter"` and populate it with the following option values:

```text
classic,
dystopian,
coming_of_age,
fantasy,
political_satire,
mystery,
epic_poem,
```

- This Select component will allow users to filter books based on different category.

- Create second `Select` component to implement the sorting criteria. Give it the attribute `data-cy="books_sort"` and populate it with the following option values:

```
publication_date
category
```

- This Select component will allow users to choose the criteria by which they want to sort the books.
- Create a third Select component to define the sorting order. Assign it the attribute `data-cy="books_sort_order"` and populate it with the following option values:

```
asc
desc
```

- Import a `Button` component and assign it the attribute `data-cy="reset_all"`. Set the button's text to `RESET ALL`. This button will be used to reset all filters and sorting options to their default values.
- Users will have the ability to [filter](https://github.com/typicode/json-server#filter) books by selecting a specific category.
- Users will also be able to [sort](https://github.com/typicode/json-server#sort) books by selecting the sorting criteria and order.
- It is essential to ensure that the sorting and filtering functionalities seamlessly work together.

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/oZdRkjo.png" width="100%">
<figcaption align = "center"><b>Fig.3 -  Filter by category</b></figcaption>
</figure>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/fjAlvsi.png" width="100%">
  <figcaption align = "center"><b>Fig.4 - Sorting and filtering together</b></figcaption>
</figure>

<h3 style="color:#397ce7">
3. Loading.jsx
</h3>

- Import the `Stack` component from Chakra UI and give it the attribute `data-cy="loading_indicator"`.
- Inside the Stack component, render four instances of the `Skeleton` component from Chakra UI. The Skeleton component is typically used to display a loading state for content that is being fetched or processed.

<h3 style="color:#397ce7">
4. BookCard.jsx
</h3>

- The `BookCard` component will receive book details as a prop and render it as a card.
- Each book will be enclosed within a Chakra UI `VStack` component, which will have the attribute `data-cy="book_card"`.
- Inside the `VStack` component, the book details will be displayed using the following components

```text
  title - Heading (as = h2)
  author - Heading (as = h3)
  category - Heading (as = h5)
  publication date - Heading (as = h6)
  isbn - Text
```

<h2 style="color:#397ce7">
Tested on cp.masaischool.com:
</h2>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/qWRY0Lw.png" width="100%">
</figure>

<h2 style="color:red">
Important Instructions:
</h2>

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

<h2 style="color:red">
General Instructions:
</h2>

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
