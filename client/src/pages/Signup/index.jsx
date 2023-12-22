import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Avatart from "components/Avatart";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex font-inter mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-center my-auto p-[305px] md:px-5 w-[58%]"
          style={{ backgroundImage: "url('images/img_left.png')" }}
        >
          <div className="flex flex-col items-center justify-start my-[130px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterBold30"
            >
              Hello!
            </Text>
            <Text
              className="mt-3.5 text-sm text-white-A700"
              size="txtInterMedium14"
            >
              Already have an account?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[220px] mt-[30px] py-[21px] rounded-[29px] text-center text-sm"
              onClick={() => navigate("/")}
              color="indigo_A200"
              variant="fill"
            >
              Login
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between ml-[-45px] my-auto md:px-5 w-[46%] z-[1]">
          <div className="bg-white-A700_7e h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
          <Avatart className="bg-white-A700 flex flex-col items-start justify-end p-12 md:px-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
