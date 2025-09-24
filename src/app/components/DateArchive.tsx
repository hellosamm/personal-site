import { Archive } from "@/lib/archive";
import Link from "next/link";

interface DateArchiveProps {
  archive: Archive;
}

export default function DateArchive({ archive }: DateArchiveProps) {
  return (
    <div>
      <h2>Archive</h2>
      {Object.keys(archive)
        .sort((a, b) => Number(b) - Number(a)) // newest year first
        .map((year) => (
          <div key={year} className="mb-4">
            <h3 className="font-semibold">{year}</h3>
            <ul className="ml-4 list-disc">
              {Object.keys(archive[year]).map((month) => (
                <li key={month}>
                  <Link href={`/archive/${year}/${month.toLowerCase()}`}>
                    {month} ({archive[year][month].length})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
