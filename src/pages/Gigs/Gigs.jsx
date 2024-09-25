import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("cat");
  console.log(search);

  let categoryName = "";

  switch (category) {
    case "gDesign":
      categoryName = "Graphics & Design";
      break;
    case "wDevelopment":
      categoryName = "Web Development";
      break;
    case "sDevelopment":
      categoryName = "Software Development";
      break;
    case "vAnimation":
      categoryName = "Video & Animation";
      break;
    case "dMarketing":
      categoryName = "Digital Marketing";
      break;
    default:
      categoryName = "AI Artists";
      break;
  }
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });


  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [search,sort]);

  const apply = () => {

    refetch();
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr {">"}{categoryName} {">"}</span>
        <h1>{categoryName}</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>

          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">

          {isLoading ? "loading" : error ? "Something went wroong"
            : data.map((gig) => (
              <GigCard key={gig._id} item={gig} />
            ))}
        </div>
      </div>
    </div>
  );
}


export default Gigs;