import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
      <div className="h-[80vh] flex justify-center items-center flex-col gap-3.5">
        <h1 className="text-4xl font-bold  text-purple-500">
          This page is Not Found
        </h1>
        <Link href="/">
          <button className="btn bg-amber-700 text-white">Back to home</button>
        </Link>
      </div>
    );
};

export default NotFound;