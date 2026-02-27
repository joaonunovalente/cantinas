import { cloneElement, isValidElement, useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import ArticleSidebar from "../article/ArticleSidebar";

function Article({ hero, children }) {
  const [searchValue, setSearchValue] = useState("");

  const heroWithSearch = isValidElement(hero)
    ? cloneElement(hero, {
        searchValue,
        onSearchValueChange: setSearchValue,
      })
    : hero;

  return (
    <PageLayout hero={heroWithSearch}>
      <div className="m-3"></div>
      <main className="container my-5">
        <div className="help-content-wrapper container mb-3 mb-lg-5">
          <div className="row gy-5">
            <div className="col-12 col-lg-2 order-2 order-lg-1">
              <ArticleSidebar searchValue={searchValue} />
            </div>

            <div className="col-12 col-lg-8 order-1 order-lg-2">
              <section>{children}</section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

export default Article;