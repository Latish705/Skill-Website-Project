import React from "react";

import { Img, Input, Text } from "components";

const File = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
          <Text
            className="text-gray-900 text-xs tracking-[1.00px] uppercase"
            size="txtInterBold12"
          >
            Email
          </Text>
          <Input
            name="email"
            placeholder="anne.carry@mail.com"
            className="font-inter font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
            wrapClassName="flex w-full"
            type="email"
            suffix={
              <Img
                className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                src="images/img_television.svg"
                alt="television"
              />
            }
            shape="round"
            color="gray_500_6c"
            variant="outline"
          ></Input>
        </div>
        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
          <Text
            className="text-gray-900 text-xs tracking-[1.00px] uppercase"
            size="txtInterBold12"
          >
            Password
          </Text>
          <Input
            name="Group4523"
            placeholder="Password@123"
            className="font-inter font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
            wrapClassName="flex w-full"
            type="password"
            suffix={
              <Img
                className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                src="images/img_overflowmenu.svg"
                alt="overflow_menu"
              />
            }
            shape="round"
            color="gray_500_6c"
            variant="outline"
          ></Input>
        </div>
      </div>
    </>
  );
};

File.defaultProps = {};

export default File;
