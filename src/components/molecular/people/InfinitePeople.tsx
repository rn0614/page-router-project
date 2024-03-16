import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Person as PersonType } from "@/types/types";
import { Person } from "@/components/molecular/card/PersonCard";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url:string) => {
  const response = await fetch(url);
  return response.json();
};



export function InfinitePeople() {
  const {
    data={pages:[]},
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "sw-people",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  return (
    <>
      <InfiniteScroll loadMore={()=>fetchNextPage()} hasMore={hasNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map((person: PersonType) => (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
            ></Person>
          ))
        )}
      </InfiniteScroll>
    </>
  );
}
