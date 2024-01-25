import React from "react";

const sizeClasses = {
  txtPoppinsRegular44: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsBold80: "font-bold font-poppins",
  txtPoppinsExtraBold128: "font-extrabold font-poppins",
  txtPoppinsExtraBold32: "font-extrabold font-poppins",
  txtPoppinsExtraBold20Black900: "font-extrabold font-poppins",
  txtPoppinsExtraBold20: "font-extrabold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsExtraBold80: "font-extrabold font-poppins",
  txtPoppinsExtraBold128Black900: "font-extrabold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
