import { useRouter } from "next/router";
import Tag from "../Tag";

function Post({ id, title, body, tags }) {
  const router = useRouter();
  return (
    <div className="flex space-x-4 w-full border-b pb-4 px-16">
      <div className="flex flex-col justify-center items-center rounded border px-4 py-1">
        <p className="text-lg">0</p>
        <p className="text-sm text-gray-500">votes</p>
      </div>
      <div className="flex flex-col justify-center items-center rounded border border-green-600 px-4 py-1">
        <p className="text-lg">1</p>
        <p className="text-sm text-gray-500">votes</p>
      </div>
      <div className="flex flex-col justify-center items-center rounded border px-4 py-1">
        <p className="text-lg">0</p>
        <p className="text-sm text-gray-500">votes</p>
      </div>

      <div className="flex flex-col px-4 space-y-1">
        <p
          className="text-blue-600 cursor-pointer"
          onClick={() => router.push(`/posts/${id}`)}
        >
          {title}
        </p>
        <div className="flex space-x-2">
          {tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
