export default function GridImages() {
  return (
    <div className="relative grid grid-cols-12 gap-4 w-full h-[512px]">
      <div className="col-span-4 flex flex-col justify-between gap-3 h-full">
        <div className="grid grid-rows-11 gap-[15px] h-full">
          <div className="row-span-7 relative bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735947891/y8ldgfkeffat55xz0cc9.png')] bg-no-repeat bg-center bg-cover rounded-xl">
            <div className="absolute right-0 top-[99px] w-10 h-10 bg-transparent rounded-br-xl shadow-[1px_10px_black]"></div>
            <div className="absolute -right-[56px] top-[99px] w-10 h-10 bg-transparent rounded-bl-xl shadow-[-5px_5px_black] z-[1]"></div>
          </div>
          <div className="row-span-4 grid grid-cols-2 gap-[15px]">
            <div className="col-span-1 bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735947971/je2fj1s67a4o3t8uyymd.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
      <div className="col-span-5 relative bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735947942/xl0dupobs6dirwidds83.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
      <div className="col-span-3 flex flex-col justify-between gap-3 h-full">
        <div className="h-[57.23%] bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948038/m009edmgraycfbugpxbn.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
        <div className="h-[40.04%] bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948066/ts8pgjon1ek3myct44j4.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-4 grid grid-rows-10">
          <div className="row-span-3"></div>
          <div className="row-span-7 relative bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735947917/tyhraoszpgzblvttwbyi.png')] bg-no-repeat bg-center bg-cover rounded-xl shadow-[15px_-15px_0px_0px_black,-15px_0px_black,-15px_-15px_black,15px_0px_black]">
            <div className="absolute right-0 top-[125px] w-10 h-10 bg-transparent rounded-br-xl shadow-[1px_10px_black]"></div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-transparent rounded-xl shadow-[-15px_-15px_black_,_15px_0_black_,_15px_-15px_black_,_-15px_0_black]">
              <div className="absolute bottom-0 -left-[55px] h-10 w-10 bg-transparent rounded-br-[15px] shadow-[10px_10px_black]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
