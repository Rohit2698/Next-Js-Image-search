import React, { useCallback, useEffect, useState } from "react";
import SerachBar from "./Components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { debounce } from "lodash";
import axios from "axios";
import { fetchImages } from "../Constants/ApiConstants";
import ImageView from "./Components/SearchedImageView";

const SearchPage = () => {
  const [searchedImage, setSearchedImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(fetchImages(searchedImage === "" ? "all" : searchedImage))
      .then((res) => {
        const transformedData = [];
        res.data.results.forEach((item) =>
          transformedData.push({
            description: item.alt_description,
            description: item.description,
            likes: item.likes,
            downloadLink: item.links.download,
            urls: item.urls.small,
          })
        );
        setImages(transformedData);
      });
  }, [searchedImage]);

  const setSearchText = useCallback(
    debounce((text) => setSearchedImage(text), 1000),
    []
  );

  return (
    <Container style={{ padding: 40 }}>
      <SerachBar setSearchText={(text) => setSearchText(text)} />
      <ImageView searchedImages={images} />
    </Container>
  );
};

export default SearchPage;
