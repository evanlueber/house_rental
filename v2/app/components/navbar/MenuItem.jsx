'use client'

const MenuItem = ({
    onClick,
    label
}) => {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:bg-[#1F1F1F] transition ">
        {label}
    </div>
  )
}

export default MenuItem