import React from "react";
import Book from "./Book";
import Books from "../BooksData";

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BookData: Books
    };
  }
  render() {
    return (
      <section className="booklist">
        {this.state.BookData.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
