import { useGetPostsQuery } from "@/core/redux/slices/posts/queries";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { isLoading, data, isError } = useGetPostsQuery();
  return (
    <div className="text-xl max-w-xl mx-auto">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data &&
        data
          .filter((i, idx) => idx < 20)
          .map((post) => (
            <div
              key={post.id}
              className="py-3 px-5 shadow-lg shadow-gray-500/20 rounded-md cursor-pointer hover:bg-gray-50 mt-4"
            >
              {post.title}
            </div>
          ))}
    </div>
  );
};

export default Home;
