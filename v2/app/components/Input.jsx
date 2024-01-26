"use client";

const Input = ({ id, label, type = "text", onChange }) => {
  return (
    <div className="w-full relative">

      <input
        onChange={onChange}
        id={id}
        placeholder=" "
        type={type}
        className=" peer w-full p-4 pt-6 font-light bg-black border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-9pl-4 border-neutral-300 focus:border-[#09CAF8] "
      />
      <label className=" absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-9 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-rose-500text-zinc-400" >
        {label}
      </label>
    </div>
  );
};

export default Input;
