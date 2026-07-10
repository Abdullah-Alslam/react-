import { useState } from "react";

function NewPost() {
  //State........
  const [name, setName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setName(e.target.value);
  }
  //JSX........
  return (
    <div className="flex  items-center justify-center bg-gray-900">
      <form className="w-full max-w-sm rounded-lg bg-yellow-300 p-5 shadow-xl text-black" onSubmit={}>
        <h2 className="mb-4 text-center text-xl font-bold text-gray-900">
          New Post
        </h2>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            Text
          </label>

          <textarea
            id="body"
            rows={3}
            className="w-full rounded-md border border-gray-900 bg-yellow-100 p-2 outline-none focus:ring-2 focus:ring-gray-900"
            onChange={handleChange}
          />
        </div>
        <p>{name}</p>
        {/* ROW-2 */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            Your Name
          </label>

          <input
            type="text"
            id="name"
            className="w-full rounded-md border border-gray-900 bg-yellow-100 p-2 outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
      </form>
    </div>
  );
}

export default NewPost;
