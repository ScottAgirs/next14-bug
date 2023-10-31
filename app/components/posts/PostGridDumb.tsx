export const PostGridDumb = async ({ posts }: { posts: any[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <div key={post.code} className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{post.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{post.code}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
