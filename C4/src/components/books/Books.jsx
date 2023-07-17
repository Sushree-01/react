import { Stack, HStack, SimpleGrid } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,Select,
  FormErrorMessage,Button,
  FormHelperText,
} from '@chakra-ui/react'
import { useReducer, useState, useEffect } from "react"
import Loading from "./Loading";
import { initState, reducer } from "../../reducers/books/reducer";
import { getBooks } from "../../utils/api";
import BooksCard from "./BooksCard";

function Books() {
  // import the chakra UI components from the chakra UI library , and remove the following.
  const [state, dispatch] = useReducer(reducer, initState);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [sortOrder, setSortOrder] = useState('');
console.log(state);

  const fetchAndUpadateDate = (categoryFilter, sortCriteria, sortOrder) => {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    getBooks(categoryFilter, sortCriteria, sortOrder).then(response => {
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    }).catch(() => {
      dispatch({ type: 'FETCH_DATA_FAILURE' });
    });
  }

  const resetAll = () => {
    setCategoryFilter("")
    setSortCriteria("")
     setSortOrder("")
  }

  useEffect(() => {

    fetchAndUpadateDate(categoryFilter, sortCriteria, sortOrder)


  }, [categoryFilter, sortCriteria, sortOrder]);
  console.log(categoryFilter, sortCriteria, sortOrder);

  return (
    <Stack>
      <HStack>
        {/* Import required chakra ui components for filter, sorting and reset functionality  */}
        <FormControl>
          <FormLabel>
            Select a category
          </FormLabel>
          <Select
          value={categoryFilter}
          onChange={(e)=>setCategoryFilter(e.target.value)}
          data-cy="books_filter"
        >
          <option value="">All</option>
          <option value="classic">Classic</option>
          <option value="dystopian">Dystopian</option>
          <option value="coming_of_age">Coming of Age</option>
          <option value="fantasy">Fantasy</option>
          <option value="political_satire">Political Satire</option>
          <option value="mystery">Mystery</option>
          <option value="epic_poem">Epic Poem</option>
        </Select>
        </FormControl>
     
<FormControl>
  <FormLabel>Select a sort cateria</FormLabel>
  <Select
          value={sortCriteria}
          onChange={(e)=>setSortCriteria(e.target.value)}
          data-cy="books_sort"
        >
            <option value="">--</option>
          <option value="publication_date">Publication Date</option>
          <option value="category">Category</option>
        </Select>
</FormControl>
      
<FormControl>
  <FormLabel>Select a sort order</FormLabel>
  <Select
          value={sortOrder}
          onChange={(e)=>setSortOrder(e.target.value)}
          data-cy="books_sort_order"
        >
            <option value="">--</option>
          <option value="asc">INC</option>
          <option value="desc">DEC</option>
        </Select>
</FormControl>
        

        <Button px={10} variant='outline' colorScheme='teal'alignSelf="flex-end" onClick={resetAll} data-cy="reset_all">
          RESET ALL
        </Button>
      </HStack>
      {/* Show Loading.jsx if loading state is true else SimpleGrid component */}
      {!state.loading ? (
     <SimpleGrid columns={{base:1,sm:1,md:2,lg:3}} gap={4} data-cy="books_container">
    {state?.data.map((ele)=>(
      <BooksCard key={ele.id} {...ele}/>
    ))}
   </SimpleGrid>
      ) : (
        <Loading/>
      )}
      
    </Stack>
  );
}

export default Books;
