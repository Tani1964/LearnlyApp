import ProfilePic from "../assets/profile.jpg";

const StaffId = () => {
  return (
    <div className="border-2 w-full h-[80%] lg:h-[100%] shadow-lg shadow-black rounded-2xl p-2 bg-[#fef0da] bg-opacity-35 z-20 relative">
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-bold text-2xl">Lagos</p>
          <p className="font-extralight text-[10px]">NIGERIA</p>
        </div>
        <p className="text-md font-medium text-primary">STAFF LICENSE</p>
      </div>
      <div className="border-b-2 border-primary my-2"></div>
      <div className="flex">
        <div className="w-1/3 h-full">
          <img className="h-[80%] w-[80%]" src={ProfilePic} alt="" />
        </div>
        <div className="w-2/3">
          <div className="flex gap-2">
            <p className="text-primary font-bold">Name:</p>
            <p className="text-sm">Ibiyemi Pedro</p>
          </div>
          <div className="flex gap-2">
            <p className="text-primary font-bold">Staff Id:</p>
            <p className="text-sm">0001</p>
          </div>
          <div className="flex gap-2">
            <p className="text-primary font-bold">Level:</p>
            <p className="text-sm">A</p>
          </div>
          <div className="hidden lg:flex flex-wrap text-[10px] gap-4 py-4">
            <div className="flex gap-2">
              <p className="text-primary font-bold">SEX:</p>
              <p>M</p>
            </div>
            <div className="flex gap-2">
              <p className="text-primary font-bold">HAIR:</p>
              <p>BLACK</p>
            </div>
            <div className="flex gap-2">
              <p className="text-primary font-bold">EYES:</p>
              <p>BLACK</p>
            </div>
            <div className="flex gap-2">
              <p className="text-primary font-bold">HGT:</p>
              <p>6.1FT</p>
            </div>
            <div className="flex gap-2">
              <p className="text-primary font-bold">WGT:</p>
              <p>146IB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffId;
