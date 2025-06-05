import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearchPage from "@/components/TableSearch"
import {eventsData, role,} from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

type Event = {
  id:number;
  title:string;
  class:string;
  date:string;
  startTime:string;
  endTime:string;
};

const columns: {header:string; accessor:string; className?:string;} [] = [
  {
    header: "Title", accessor: "title",
  },
  {
    header: "Class", accessor: "class",
  },
 {
  header: "Date", accessor: "date",
  className:"hidden md:table-cell"
},
{
 header: "Start Time", accessor: "startTime",
 className:"hidden md:table-cell"
},
 {
  header: "End Time", accessor:"endTime", 
  className:"hidden md:table-cell"
},
  {
    header: "Actions", accessor:"actions"
  },
];

const EventListPage = () => {

  const renderRow = (item:Event)=> (
    <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
            <Image 
            src="/edit.png" 
            alt="view-icon" 
            width={15} 
            height={15}
            />
          </button>
          </Link>
          {role === "admin" &&    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image 
            src="/delete.png" 
            alt="view-icon" 
            width={15} 
            height={15}
            />
          </button>}
        </div>
      </td>
    </tr>
  );


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearchPage/>
          <div className="flex items-center gap-4 self-end">
            {/* button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image 
              src="/filter.png" 
              alt="filter-icon"
              width={14}
              height={14}
              />
            </button>
            {/* end of button */}

            {/* button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image 
              src="/sort.png" 
              alt="sort-icon"
              width={14}
              height={14}
              />
            </button>
            {/* end of button */}

            {/* button */}
            {role === "admin" &&
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image 
              src="/plus.png" 
              alt="plus-icon"
              width={14}
              height={14}
              />
            </button>}
            {/* end of button */}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} 
      renderRow={ renderRow}
      data={eventsData}
      />
      {/* paginated */}
        <Pagination/>
    </div>
  )
}

export default EventListPage