import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
     {/* left */}
     <div className="w-full xl:w-2/3">
     {/* top */}
     <div className="flex flex-col lg:flex-row gap-4">
    {/* user info card */}
      <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 gap-4">
       <div className="w-1/3">
       <Image 
       src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" 
       alt="user-image" 
       width={144} 
       height={144} 
       className="w-36 h-36 rounded-full object-cover"
       />

       </div>
       <div className="w-2/3 flex flex-col justify-between gap-4">
       <div className="flex items-center gap-4">
       <h1 className="text-xl font-semibold">Kim Parker</h1>
       <FormModal 
       table="teacher" 
       type="update" 
       data={
        {
          id: 1,
          username: "deanParker",
          email: "deanparker@gmail.com",
          password: "password",
          firstName: "Kim",
          lastName: "Parker",
          phone: "+1 234 567 89",
          address: "1234 Main St, Anytown, USA",
          bloodType: "A+",
          dateOfBirth: "2000-01-01",
          sex: "female",
          img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
        }
       }/>
       </div>
       
       <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, reiciendis.</p>
       <div className="flex items-center justify-between gap-2 flex-wrap text-sm font-medium">
        {/* single item */}
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
         <Image src="/blood.png" alt="" width={14} height={14}/>
         <span>A</span>
        </div>
        {/* end of single item */}

        {/* single item */}
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
         <Image src="/date.png" alt="" width={14} height={14}/>
         <span>June 2025</span>
        </div>
        {/* end of single item */}

        {/* single item */}
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
         <Image src="/mail.png" alt="" width={14} height={14}/>
         <span>user@gmail.com</span>
        </div>
        {/* end of single item */}

        {/* single item */}
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
         <Image src="/phone.png" alt="" width={14} height={14}/>
         <span>+1 234 567</span>
        </div>
        {/* end of single item */}
       </div>
       </div>
      </div>

       {/* small cards */}
       <div className="flex-1 flex gap-4 justify-between flex-wrap">
        {/* card */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
         <Image 
         src="/singleAttendance.png" 
         alt="user-image" 
         width={24} 
         height={24}
         className="w-6 h-6"
         />
         <div>
          <h1 className="text-xl font-semibold">90%</h1>
          <span className="text-sm text-gray-400">Attendemnce</span>
         </div>
        </div>
        {/* end of card */}

        {/* card */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
         <Image 
         src="/singleBranch.png" 
         alt="user-image" 
         width={24} 
         height={24}
         className="w-6 h-6"
         />
         <div>
          <h1 className="text-xl font-semibold">2</h1>
          <span className="text-sm text-gray-400">Branches</span>
         </div>
        </div>
        {/* end of card */}

        {/* card */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
         <Image 
         src="/singleLesson.png" 
         alt="user-image" 
         width={24} 
         height={24}
         className="w-6 h-6"
         />
         <div>
          <h1 className="text-xl font-semibold">6</h1>
          <span className="text-sm text-gray-400">Lessons</span>
         </div>
        </div>
        {/* end of card */}

        {/* card */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
         <Image 
         src="/singleClass.png" 
         alt="user-image" 
         width={24} 
         height={24}
         className="w-6 h-6"
         />
         <div>
          <h1 className="text-xl font-semibold">90%</h1>
          <span className="text-sm text-gray-400">Classes</span>
         </div>
        </div>
        {/* end of card */}

       </div>

      </div>

      {/* bottom */}
      <div className="mt-4 p-4 bg-white rounded-md h-[800px]">
       <h1>Teachers Schedule</h1>
       <BigCalendar/>
      </div>
     </div>
     {/* right */}
     <div className="w-full xl:w-1/3 flex flex-col gap-4">
     <div className="bg-white p-4 rounded-md">
      <h1 className="text-xl font-semibold">Shortcuts</h1>
      <div className="mt-4 flex gap-4 flex-wrap text-sx text-gray-500">
       <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
       Teacher's Classes
       </Link>

       <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">
       Teacher's Students
       </Link>

       <Link href="/" className="p-3 rounded-md bg-lamaTellowLight">
       Teacher's Lessons
       </Link>

       <Link href="/" className="p-3 rounded-md bg-pink-50">
       Teacher's Exams
       </Link>

       <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
       Teacher's Assignments
       </Link>
      </div>
     </div>
     <Performance/>
     <Announcements/>
     </div>
    </div>
  )
}

export default SingleTeacherPage