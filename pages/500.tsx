import error500 from "@/images/error500.jpg";
import Image from "next/image";
import Link from "next/link";

const Custom500 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex items-center flex-col">
        <Image
          src={error500}
          alt="500 Internal Server Error"
          width={500}
          className={"mb-2"}
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          500 - Internal Server Error
        </h1>
        <p className="text-lg text-gray-900 mb-4">
          Oops! Something went wrong on our server. We are working to fix the
          issue.
        </p>
        <Link
          href="/"
          className="text-lg text-gray-900 underline hover:text-gray-600"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Custom500;
