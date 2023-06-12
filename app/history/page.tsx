"use client";
import HistoryNote from "@/components/HistoryNote";
import HistoryNotes from "@/components/HistoryNotes";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getHistory(elements = 30) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/history/records?page=1&perPage=${elements}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function HistoryPage() {
  const [postsPerPage, setPostsPerPage] = useState<number>(30);
  let data = await getHistory(postsPerPage);

  return (
    <div>
      <HistoryNotes items={data.items} />
      {/* @ts-expect-error Server Component */}
      <Pagination
        totalPosts={data.totalItems}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
      />
    </div>
  );
}
