import React, { Component } from "react";
import Navbar from "./common/navbar";
import "../styles/blogs.css";

class Blogs extends Component {
  state = {};
  render() {
    return (
      <div className="blogs">
        <Navbar />
        <div className="blog-heading-1">
          <h1>Benefits of early crossfit training</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            aliquam deserunt dolores veniam numquam cum at officiis et atque.
            Similique harum omnis a accusantium pariatur. Possimus nobis
            cupiditate voluptatem ducimus?
          </p>
          <h4>By Hozefa Jaorawala</h4>
        </div>
        <div className="blog-heading-2">
          <h1>How todays hardwork will build future's olympians</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            repellendus culpa enim, qui, eum quisquam mollitia, commodi possimus
            voluptate laborum pariatur architecto! Accusantium qui officiis
            iusto aliquam sit ducimus sapiente!
          </p>
          <h4>By Hozefa Jaorawala</h4>
        </div>
      </div>
    );
  }
}

export default Blogs;
