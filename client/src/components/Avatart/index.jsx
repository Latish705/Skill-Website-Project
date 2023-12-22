import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const Avatart = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[76px] mt-[52px] w-[65%] md:w-full">
          <Img
            className="h-[41px] w-[41px]"
            src="images/img_question.svg"
            alt="question"
          />
          <div className="flex flex-col gap-[18px] items-start justify-start mt-[53px]">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtInterBold22"
            >
              Create an account
            </Text>
            <Text
              className="text-gray-500 text-sm"
              size="txtInterMedium14Gray500"
            >
              Sign up to continue{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start mt-[60px] pt-[3px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                size="txtInterBold12"
              >
                name
              </Text>
              <Input
                name="Group4527"
                placeholder="Anne Carry"
                className="font-inter font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="gray_500_6c"
                size="3xl"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                size="txtInterBold12"
              >
                email
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
                name="Group4525"
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
          <Button
            className="common-pointer cursor-pointer font-bold font-inter min-w-[350px] mt-10 rounded-[29px] text-center text-sm"
            onClick={() => navigate("/home1")}
            color="indigo_A200"
            variant="fill"
          >
            Create an account
          </Button>
          <div className="flex flex-col gap-[34px] justify-start mt-[33px] w-full">
            <Text
              className="md:ml-[0] ml-[117px] text-gray-500 text-xs"
              size="txtInterRegular12"
            >
              Or connect with socials
            </Text>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[350px] rounded-[29px]"
                leftIcon={
                  <Img
                    className="h-[18px] ml-[35px] mr-[3px] my-5"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                }
                color="indigo_600"
                variant="fill"
              >
                <div className="font-bold font-inter text-left text-sm">
                  Connect with Facebook
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[350px] rounded-[29px]"
                leftIcon={
                  <Img
                    className="h-[18px] ml-[35px] mr-[5px] my-5"
                    src="images/img_icon_apple_18X18.svg"
                    alt="Icon/Apple"
                  />
                }
                color="gray_900"
                variant="fill"
              >
                <div className="font-bold font-inter text-left text-sm">
                  Connect with Apple
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[350px] rounded-[29px]"
                leftIcon={
                  <Img
                    className="h-[18px] ml-[35px] mr-1 my-5"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
                color="gray_500_66"
                variant="outline"
              >
                <div className="font-bold font-inter text-left text-sm">
                  Connect with Google+
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Avatart.defaultProps = {};

export default Avatart;
