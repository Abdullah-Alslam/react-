type Props = {
  name: string;
  body: string;
};
function Post({ name, body }: Props) {
  return (
    <div className="bg-yellow-300 text-black p-4 m-4 rounded-lg">
      <h1 className="text-xl font-bold">{name}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
