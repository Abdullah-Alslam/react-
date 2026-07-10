import NewPost from "./NewPost";
import Post from "./post";

function ListPost() {
  return (
    <main>
      <NewPost />
      <article className="flex ">
        <Post name="abdullah" body="abdullah is the best" />
        <Post name="majd" body="majs is the best" />
      </article>
    </main>
  );
}

export default ListPost;
