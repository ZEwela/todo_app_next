export default async function Pagination({
  totalPosts,
  postsPerPage,
  setPostsPerPage,
}: any) {
  const handleLoadMore = async () => {
    setPostsPerPage(postsPerPage + 30);
  };

  return (
    <div className="flex justify-center">
      {postsPerPage < totalPosts && (
        <button
          onClick={() => handleLoadMore()}
          type="button"
          className="rounded-lg border border-blue-400 bg-blue-300 p-5 focus:ring  hover:border-blue-600 hover:bg-blue-500 cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
}
