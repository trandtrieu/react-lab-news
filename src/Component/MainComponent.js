import React, { Component } from "react";

import Menu from "./MenuComponent";
import NewsDetail from "./NewsDetailComponent";
import { NEWS } from "../shared/news";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Route, Routes, Navigate, useParams } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: NEWS,
    };
  }

  onNewsSelect(newsId) {
    this.setState({ selectedNews: newsId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home newsId={this.state.news.filter((news) => news.featured)[0]} />
      );
    };
    const NewsWithId = () => {
      const { newsId } = useParams();
      return (
        <NewsDetail
          news={
            this.state.news.filter(
              (news) => news.id === parseInt(newsId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route
            exact
            path="/menu"
            Component={() => <Menu news={this.state.news} />}
          />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/menu/:newsId" Component={NewsWithId} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
