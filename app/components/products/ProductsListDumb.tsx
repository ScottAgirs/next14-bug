export const ProductsListDumb = async ({ products }: { products: any[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((post: any) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{post.code}</h3>
              <p className="mt-2 text-sm text-gray-500">{post.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
