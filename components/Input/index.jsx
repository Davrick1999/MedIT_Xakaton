import { useRef } from "react";

export default function Input({
  children,
  className,
  placeholder,
  label = "Label",
  hasSubLabel = true,
  password = false,
  subLabel = "Sub label",
  ...rest
}) {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current.focus();

  return (
    <div
      className={`flex flex-col ${!hasSubLabel && "space-y-2"}`}
      onClick={handleClick}
    >
      <label className="font-medium cursor-pointer">{label}</label>
      {hasSubLabel && (
        <label className="text-sm font-light cursor-pointer pb-1.5">
          {subLabel}
        </label>
      )}
      <div
        className={`border
        bg-white
        flex  py-1
        space-x-2
        items-center
        rounded
        text-sm
        relative
        w-full
        text-gray-600
        font-smaller
        focus-within:outline-none
        focus-within:ring-1
        focus-within:ring-blue-600
        transition ease-linear
        hover:border-gray-400 ${className}`}
      >
        <input
          ref={inputRef}
          className="w-full outline-none px-4"
          type={password ? `password` : `text`}
          {...rest}
          placeholder={placeholder}
        >
          {children}
        </input>
      </div>
    </div>
  );
}
