import React from "react";

import { Button, Img, Input, List, Text } from "components";

const Slide169OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Img
          className="h-[126px] sm:h-auto object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <div className="md:h-[1242px] h-[7895px] md:px-5 relative w-full">
          <div className="md:h-[1242px] h-[7895px] m-auto w-full">
            <div className="h-[7895px] md:h-[811px] m-auto w-full">
              <div className="md:h-[687px] h-[7895px] m-auto w-full">
                <div className="absolute md:h-[473px] h-[7895px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div className="h-[7715px] md:h-[NaNpx] mb-auto mt-[-NaNpx] mx-auto w-full z-[1]">
                      <div className="absolute flex flex-col md:gap-10 gap-[516px] h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="md:h-[3018px] sm:h-[6413px] h-[6726px] relative w-full">
                          <div className="md:h-[3018px] sm:h-[6413px] h-[6726px] m-auto w-full">
                            <div className="md:h-[3018px] sm:h-[6413px] h-[6726px] m-auto w-full">
                              <div className="md:h-[3018px] sm:h-[6413px] h-[6726px] m-auto w-full">
                                <div className="absolute md:h-[3018px] sm:h-[6413px] h-[6726px] inset-[0] justify-center m-auto w-full">
                                  <div className="md:h-[3018px] sm:h-[6413px] h-[6726px] m-auto w-full">
                                    <div className="flex flex-col md:gap-10 gap-[1556px] h-full items-center justify-start m-auto w-full">
                                      <div className="h-[1322px] relative w-full">
                                        <Img
                                          className="absolute h-[1322px] inset-[0] justify-center m-auto object-cover w-full"
                                          src="images/img_tobiasbjerknes.png"
                                          alt="tobiasbjerknes"
                                        />
                                        <div className="absolute flex flex-col gap-3 items-start justify-start left-[9%] top-[27%]">
                                          <Text
                                            className="md:text-5xl text-9xl text-white-A700"
                                            size="txtPoppinsExtraBold128"
                                          >
                                            <span className="text-white-A700 font-poppins text-left font-extrabold">
                                              RIDE{" "}
                                            </span>
                                            <span className="md:text-5xl text-white-A700 font-poppins text-left text-8xl font-normal">
                                              THE{" "}
                                            </span>
                                            <span className="text-white-A700 font-poppins text-left font-extrabold">
                                              WILD
                                            </span>
                                          </Text>
                                          <Text
                                            className="leading-[93.00%] ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[76%] sm:w-full"
                                            size="txtPoppinsExtraBold32"
                                          >
                                            SOUTHERN CALIFORNIA’S #1 MOUNTAIN
                                            BIKING DESTINATION
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute bottom-[42%] left-[10%] text-white-A700 text-xl"
                                          size="txtPoppinsExtraBold20"
                                        >
                                          BOOK YOUR MOUNTAIN BIKING GROUP
                                        </Text>
                                        <div className="absolute border-4 border-solid border-white-A700 bottom-[41%] h-[68px] left-[9%] w-[23%]"></div>
                                      </div>
                                      <div className="md:h-[1656px] sm:h-[3535px] h-[3848px] relative w-full">
                                        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[1919px] inset-x-[0] items-center justify-start mx-auto w-full">
                                          <div className="bg-black-900 h-[1329px] w-full"></div>
                                          <div className="md:h-[287px] h-[297px] relative w-full">
                                            <Img
                                              className="absolute h-[287px] inset-y-[0] left-[0] my-auto"
                                              src="images/img_frame.svg"
                                              alt="frame"
                                            />
                                            <Img
                                              className="absolute h-[287px] inset-y-[0] my-auto object-cover right-[0]"
                                              src="images/img_frame_gray_900.png"
                                              alt="frame_One"
                                            />
                                          </div>
                                        </div>
                                        <div className="absolute h-[1587px] inset-x-[0] mx-auto top-[0] w-full">
                                          <Img
                                            className="absolute h-[1587px] inset-[0] justify-center m-auto object-cover w-full"
                                            src="images/img_rachelmartiny.png"
                                            alt="rachelmartiny"
                                          />
                                          <div className="absolute bottom-[34%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[56%]">
                                            <div className="bg-white-A700 h-[9px] w-[11%]"></div>
                                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[63px] w-full">
                                              <Text
                                                className="text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                First name*
                                              </Text>
                                              <Text
                                                className="sm:ml-[0] ml-[459px] text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                Event Date*
                                              </Text>
                                              <Text
                                                className="sm:ml-[0] ml-[149px] text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                Is This Date Flexible?*
                                              </Text>
                                            </div>
                                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-3 w-[97%] md:w-full">
                                              <Input
                                                name="rectangleFive"
                                                placeholder=""
                                                className="p-0 w-full"
                                                wrapClassName="flex h-[61px] w-[48%] md:w-full"
                                              ></Input>
                                              <Input
                                                name="groupTen"
                                                placeholder=""
                                                className="p-0 w-full"
                                                wrapClassName="flex md:ml-[0] ml-[94px] w-[21%] md:w-full"
                                                suffix={
                                                  <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-white-A700">
                                                    <Img
                                                      className="my-auto"
                                                      src="images/img_arrowdown.svg"
                                                      alt="arrow_down"
                                                    />
                                                  </div>
                                                }
                                                size="xs"
                                              ></Input>
                                              <div className="border-4 border-solid border-white-A700 h-[30px] md:ml-[0] ml-[54px] w-[30px]"></div>
                                              <Text
                                                className="ml-3.5 md:ml-[0] text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                Yes
                                              </Text>
                                              <div className="border-4 border-solid border-white-A700 h-[30px] md:ml-[0] ml-[31px] w-[30px]"></div>
                                              <Text
                                                className="ml-3 md:ml-[0] text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                No
                                              </Text>
                                            </div>
                                            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[21px] w-[84%] md:w-full">
                                              <Text
                                                className="mb-[5px] text-white-A700 text-xl"
                                                size="txtPoppinsMedium20"
                                              >
                                                Last name*
                                              </Text>
                                              <Text
                                                className="leading-[25.00px] sm:mt-0 mt-[9px] text-white-A700 text-xl tracking-[-0.30px]"
                                                size="txtPoppinsMedium20"
                                              >
                                                <>
                                                  Estimated Number
                                                  <br />
                                                  of Guests*
                                                </>
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="absolute bottom-[14%] flex flex-col items-start justify-start left-[24%] w-[26%]">
                                            <Input
                                              name="rectangleSix"
                                              placeholder=""
                                              className="p-0 w-full"
                                              wrapClassName="flex h-[61px] w-full"
                                            ></Input>
                                            <Text
                                              className="mt-[22px] text-white-A700 text-xl"
                                              size="txtPoppinsMedium20"
                                            >
                                              Email*
                                            </Text>
                                            <Input
                                              name="rectangleSeven"
                                              placeholder=""
                                              className="p-0 w-full"
                                              wrapClassName="flex h-[61px] mt-[11px] w-full"
                                            ></Input>
                                            <Text
                                              className="mt-[23px] text-white-A700 text-xl"
                                              size="txtPoppinsMedium20"
                                            >
                                              Mobile phone number*
                                            </Text>
                                            <Input
                                              name="rectangleEight"
                                              placeholder=""
                                              className="p-0 w-full"
                                              wrapClassName="flex h-[61px] mt-2.5 w-full"
                                            ></Input>
                                          </div>
                                          <div className="absolute bottom-[28%] flex flex-col gap-[7px] justify-start right-[21%] w-1/4">
                                            <Text
                                              className="md:ml-[0] ml-[237px] text-white-A700 text-xl tracking-[-0.40px]"
                                              size="txtPoppinsMedium20"
                                            >
                                              How did you hear about us?*
                                            </Text>
                                            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                                              <div className="border-4 border-solid border-white-A700 flex flex-col items-end justify-start p-[17px]">
                                                <Img
                                                  className="h-3 my-[7px]"
                                                  src="images/img_arrowdown.svg"
                                                  alt="arrowdown"
                                                />
                                              </div>
                                              <Input
                                                name="rectangleFourteen"
                                                placeholder=""
                                                className="p-0 w-full"
                                                wrapClassName="flex sm:flex-1 h-[61px] sm:w-full"
                                              ></Input>
                                            </div>
                                          </div>
                                          <Text
                                            className="absolute bottom-[23%] right-[32%] text-white-A700 text-xl"
                                            size="txtPoppinsMedium20"
                                          >
                                            Questions or Comments
                                          </Text>
                                          <div className="absolute border-4 border-solid border-white-A700 bottom-[14%] h-[186px] right-[21%] w-[26%]"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[32%] h-[241px] left-[0] object-cover"
                                      src="images/img_frame_white_a700.png"
                                      alt="frame_Two"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[32%] h-[241px] object-cover right-[0]"
                                    src="images/img_frame_white_a700.png"
                                    alt="frame_Three"
                                  />
                                  <div className="absolute bg-gray-900 h-[776px] inset-x-[0] mx-auto top-[19%] w-full"></div>
                                </div>
                                <div className="absolute bg-black-900 h-[2061px] inset-x-[0] mx-auto top-[22%] w-full"></div>
                                <div className="absolute h-[2446px] inset-x-[0] mx-auto top-[17%] w-full">
                                  <div className="h-[2446px] m-auto w-full">
                                    <div className="h-[2446px] m-auto w-full">
                                      <Img
                                        className="h-[2446px] m-auto object-cover w-full"
                                        src="images/img_clementdelhaye.png"
                                        alt="clementdelhaye"
                                      />
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[386px] inset-x-[0] items-start justify-start mx-auto p-[49px] md:px-10 sm:px-5 top-[5%] w-[64%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group21.svg')",
                                        }}
                                      >
                                        <div className="md:h-72 h-[286px] mb-0.5 md:ml-[0] ml-[87px] relative w-[48%] sm:w-full">
                                          <Img
                                            className="h-[286px] m-auto object-cover w-full"
                                            src="images/img_image2.png"
                                            alt="imageTwo"
                                          />
                                          <div className="absolute bg-white-A700_a5 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded-[44px] shadow-bs1 w-[87px]">
                                            <Img
                                              className="h-10 md:ml-[0] ml-[3px]"
                                              src="images/img_user.svg"
                                              alt="user"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat sm:h-[417px] h-[493px] md:h-[795px] p-2.5 right-[0] top-[30%] w-[83%] md:w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group19.png')",
                                      }}
                                    >
                                      <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between right-[5%] top-[6%] w-[84%]">
                                        <div className="md:h-[377px] h-[385px] relative w-[59%] md:w-full">
                                          <Text
                                            className="absolute bottom-[0] leading-[93.00%] left-[0] md:text-5xl text-[80px] text-deep_orange-200 uppercase"
                                            size="txtPoppinsBold80"
                                          >
                                            <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                              2 minute ride{" "}
                                            </span>
                                            <span className="text-deep_orange-200 font-poppins text-left font-normal">
                                              to{" "}
                                            </span>
                                            <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                              <>
                                                trails
                                                <br />
                                              </>
                                            </span>
                                          </Text>
                                          <Img
                                            className="absolute h-[377px] inset-y-[0] my-auto object-cover right-[0] w-[41%]"
                                            src="images/img_jaredweissolw.png"
                                            alt="jaredweissolw"
                                          />
                                        </div>
                                        <Img
                                          className="h-[378px] md:h-auto object-cover"
                                          src="images/img_clementdelhaye_378x308.png"
                                          alt="clementdelhaye_One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[417px] object-cover right-[24%] top-[2%] w-1/5"
                                        src="images/img_adrienvajasb0.png"
                                        alt="adrienvajasbZero"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[29%] md:h-[427px] sm:h-[486px] h-[493px] p-8 sm:px-5 right-[4%] w-[83%] md:w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group21.svg')",
                                      }}
                                    >
                                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[71%]">
                                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                          <Img
                                            className="h-[338px] md:h-auto object-cover"
                                            src="images/img_orjanwindsland.png"
                                            alt="orjanwindsland"
                                          />
                                          <Text
                                            className="leading-[93.00%] sm:mt-0 mt-[81px] md:text-5xl text-[80px] text-deep_orange-200"
                                            size="txtPoppinsBold80"
                                          >
                                            <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                              FREE{" "}
                                            </span>
                                            <span className="text-deep_orange-200 font-poppins text-left font-normal">
                                              BIKE{" "}
                                            </span>
                                            <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                              STORAGE
                                            </span>
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-[427px] inset-y-[0] left-[24%] my-auto object-cover w-1/5"
                                        src="images/img_image3.png"
                                        alt="imageThree"
                                      />
                                    </div>
                                    <Text
                                      className="absolute left-[24%] md:text-5xl text-9xl text-white-A700 top-[20%]"
                                      size="txtPoppinsExtraBold128"
                                    >
                                      <span className="md:text-5xl text-white-A700 font-poppins text-left text-[64px] font-normal">
                                        THE
                                      </span>
                                      <span className="text-white-A700 font-poppins text-left font-extrabold">
                                        {" "}
                                      </span>
                                      <span className="md:text-5xl text-white-A700 font-poppins text-left text-[80px] font-extrabold">
                                        PERFECT LOCATION
                                      </span>
                                    </Text>
                                  </div>
                                  <div className="absolute bg-deep_orange-200 h-[9px] left-[24%] top-[28%] w-[6%]"></div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-[287px] inset-y-[0] left-[0] my-auto"
                                src="images/img_frame_gray_700.svg"
                                alt="frame_Four"
                              />
                            </div>
                            <Img
                              className="absolute h-[287px] inset-y-[0] my-auto right-[0]"
                              src="images/img_frame_gray_700.svg"
                              alt="frame_Five"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat md:h-[441px] h-[493px] sm:h-[532px] inset-x-[0] mx-auto top-[43%] w-[83%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group21.svg')",
                            }}
                          >
                            <div className="absolute bottom-[0] h-[441px] sm:h-[532px] right-[4%] w-[79%] md:w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                  <Text
                                    className="leading-[93.00%] sm:mt-0 mt-[93px] md:text-5xl text-[80px] text-deep_orange-200"
                                    size="txtPoppinsBold80"
                                  >
                                    <span className="md:text-[41px] sm:text-[35px] text-deep_orange-200 font-poppins text-left text-[45px] font-normal">
                                      <>
                                        COMPLIMENTARY
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                      TROLLEY{" "}
                                    </span>
                                    <span className="text-deep_orange-200 font-poppins text-left font-normal">
                                      &
                                    </span>
                                    <span className="text-deep_orange-200 font-poppins text-left font-bold">
                                      {" "}
                                      PARKING
                                    </span>
                                  </Text>
                                  <Img
                                    className="h-[184px] md:h-auto object-cover"
                                    src="images/img_marcsendramar.png"
                                    alt="marcsendramar"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[13%] h-[210px] object-cover right-[3%] w-[26%]"
                                src="images/img_timfostercosj.png"
                                alt="timfostercosj"
                              />
                            </div>
                            <Img
                              className="absolute h-[434px] inset-y-[0] my-auto object-cover right-[21%] w-1/4"
                              src="images/img_nikowensrku4z.png"
                              alt="nikowensrku4z"
                            />
                          </div>
                        </div>
                        <div className="bg-black-900 h-[473px] w-full"></div>
                      </div>
                      <Text
                        className="absolute left-[24%] md:text-5xl text-[80px] text-white-A700 top-[46%]"
                        size="txtPoppinsExtraBold80"
                      >
                        GROUP BOOKINGS
                      </Text>
                      <Text
                        className="absolute bottom-[44%] inset-x-[0] mx-auto text-center text-white-A700 text-xl w-max"
                        size="txtPoppinsExtraBold20"
                      >
                        SUBMIT
                      </Text>
                      <div className="absolute border-4 border-solid border-white-A700 bottom-[43%] h-14 inset-x-[0] mx-auto w-[12%]"></div>
                      <div className="absolute bottom-[17%] flex flex-col md:gap-10 gap-[79px] inset-x-[0] items-start justify-start mx-auto w-[58%]">
                        <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[26px] w-[61%] md:w-full">
                          <div className="h-[336px] relative w-full">
                            <Text
                              className="m-auto md:text-5xl text-9xl text-black-900"
                              size="txtPoppinsExtraBold128Black900"
                            >
                              <span className="md:text-5xl text-black-900 font-poppins text-left text-[64px] font-normal">
                                <>
                                  BIG BEAR
                                  <br />
                                </>
                              </span>
                              <span className="md:text-5xl text-black-900 font-poppins text-left text-[80px] font-extrabold">
                                BIKING TRAILS
                              </span>
                            </Text>
                            <div className="absolute bg-deep_orange-200 bottom-[35%] h-[9px] left-[1%] w-[17%]"></div>
                            <div className="absolute border-[3px] border-gray-700_01 border-solid bottom-[8%] flex flex-col h-[22px] items-center justify-start left-[0] p-[7px] rounded-[50%] w-[22px]">
                              <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row gap-[17px] items-center justify-center left-[5%] w-[10%]">
                              <div className="border-[3px] border-gray-700_01 border-solid h-[22px] rounded-[50%] w-[22px]"></div>
                              <div className="border-[3px] border-gray-700_01 border-solid h-[22px] rounded-[50%] w-[22px]"></div>
                            </div>
                          </div>
                          <div className="h-[348px] relative w-[72%] sm:w-full">
                            <Text
                              className="absolute h-full inset-[0] justify-center leading-[93.00%] m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsRegular24"
                            >
                              <span className="md:text-[26px] sm:text-2xl text-deep_orange-200 font-poppins text-left text-[28px] font-bold">
                                <>
                                  BEGINNER-FRIENDLY TRAILS
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-poppins text-left font-normal">
                                <>
                                  <br />
                                </>
                              </span>
                              <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                                Trails such as Pine Knot Trail and the Hanna{" "}
                              </span>
                              <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                                Flats Loop are less technical and provide a more
                                relaxed riding experience, making them great for
                                those new to mountain biking or looking for a
                                leisurely ride.
                              </span>
                            </Text>
                            <Text
                              className="absolute bottom-[14%] left-[12%] text-black-900 text-center text-xl"
                              size="txtPoppinsExtraBold20Black900"
                            >
                              PLAN YOUR TRIP
                            </Text>
                            <div className="absolute border-4 border-gray-900 border-solid bottom-[11%] h-14 left-[0] w-[58%]"></div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between w-[98%] md:w-full">
                          <Img
                            className="h-[556px] md:h-auto object-cover w-[556px] sm:w-full"
                            src="images/img_chrishenrytmt.png"
                            alt="chrishenrytmt"
                          />
                          <Text
                            className="leading-[93.00%] md:mt-0 mt-[198px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsRegular24"
                          >
                            <span className="md:text-[26px] sm:text-2xl text-deep_orange-200 font-poppins text-left text-[28px] font-bold">
                              <>
                                INTERMEDIATE TRAILS
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                              Enjoy a mix of moderate climbs, fun descents,{" "}
                            </span>
                            <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                              and some technical sections. Trails like the
                              Skyline Trail and Castle Rock Trail offer a good
                              balance of challenges and rewards, with stunning
                              views and diverse terrain to keep things exciting.
                            </span>
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between md:ml-[0] ml-[26px] w-[98%] md:w-full">
                          <Text
                            className="leading-[93.00%] md:mt-0 mt-[143px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsRegular24"
                          >
                            <span className="md:text-[26px] sm:text-2xl text-deep_orange-200 font-poppins text-left text-[28px] font-bold">
                              <>
                                ADVANCED / EXPERT TRAILS
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                              For experienced riders seeking more technical{" "}
                            </span>
                            <span className="text-gray-900_01 font-poppins text-left text-xl font-normal">
                              challenges and adrenaline-pumping descents, there
                              are options like the Fall Line Trail and the
                              Radford Loop Trail. These trails feature steep
                              sections, rocky terrain, and advanced features,
                              providing a thrilling experience for those with
                              advanced skills.
                            </span>
                          </Text>
                          <Img
                            className="h-[555px] sm:h-auto object-cover w-[554px] md:w-full"
                            src="images/img_nathanaeldesme.png"
                            alt="nathanaeldesme"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mb-[1529px] ml-[511px] mt-[-NaNpx] text-black-900 text-center text-xl z-[1]"
                      size="txtPoppinsExtraBold20Black900"
                    >
                      PLAN YOUR TRIP
                    </Text>
                    <div className="border-4 border-gray-900 border-solid h-14 mb-[1516px] ml-[454px] mt-[-NaNpx] w-[15%] z-[1]"></div>
                    <div className="flex flex-row gap-[17px] items-center justify-center mb-[2444px] ml-auto mr-[793px] mt-[-NaNpx] w-[6%] z-[1]">
                      <List
                        className="sm:flex-col flex-row gap-3.5 grid grid-cols-2 w-3/5"
                        orientation="horizontal"
                      >
                        <div className="border-[3px] border-gray-700_01 border-solid flex flex-col h-[22px] items-center justify-start sm:ml-[0] p-[7px] rounded-[50%] w-full">
                          <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                        </div>
                        <div className="border-[3px] border-gray-700_01 border-solid flex flex-col h-[22px] items-center justify-start sm:ml-[0] p-[7px] rounded-[50%] w-full">
                          <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                        </div>
                      </List>
                      <div className="border-[3px] border-gray-700_01 border-solid h-[22px] rounded-[50%] w-[22px]"></div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-3.5 grid grid-cols-3 mb-[1943px] ml-[454px] mt-[-NaNpx] w-[6%] z-[1]"
                      orientation="horizontal"
                    >
                      <div className="border-[3px] border-gray-700_01 border-solid flex flex-col h-[22px] items-center justify-start p-[7px] rounded-[50%] w-full">
                        <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                      </div>
                      <div className="border-[3px] border-gray-700_01 border-solid flex flex-col h-[22px] items-center justify-start p-[7px] rounded-[50%] w-full">
                        <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                      </div>
                      <div className="border-[3px] border-gray-700_01 border-solid flex flex-col h-[22px] items-center justify-start p-[7px] rounded-[50%] w-full">
                        <div className="bg-gray-700_01 h-2 rounded-[50%] w-2"></div>
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[-NaNpx] w-1/2 z-[1]">
                      <Img
                        className="h-[180px] md:h-auto object-cover"
                        src="images/img_orjanwindsland_180x319.png"
                        alt="orjanwindsland_One"
                      />
                      <Img
                        className="h-[180px] md:h-auto object-cover"
                        src="images/img_sinasadeqi1b6.png"
                        alt="sinasadeqi1bSix"
                      />
                    </div>
                    <Img
                      className="h-[181px] ml-auto mt-[-1px] object-cover w-[17%] z-[1]"
                      src="images/img_marcsendramar_181x319.png"
                      alt="marcsendramar_One"
                    />
                    <Img
                      className="h-[181px] ml-auto mr-[319px] mt-[-1px] object-cover w-[17%] z-[1]"
                      src="images/img_claytoncardina.png"
                      alt="claytoncardina"
                    />
                    <Img
                      className="h-[181px] ml-auto mr-[640px] mt-[-1px] object-cover w-[17%] z-[1]"
                      src="images/img_nikowensrku4z_181x320.png"
                      alt="nikowensrku4z_One"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[180px] left-[17%] object-cover w-[17%]"
                    src="images/img_timfostercosj.png"
                    alt="timfostercosj_One"
                  />
                  <div className="absolute bottom-[2%] h-[473px] inset-x-[0] mx-auto w-full">
                    <Img
                      className="absolute h-[473px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_jaredweissolw_473x1920.png"
                      alt="jaredweissolw_One"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[80px] text-center text-white-A700 w-max"
                      size="txtPoppinsExtraBold80"
                    >
                      PLAN YOUR TRIP NOW!
                    </Text>
                    <Text
                      className="absolute bottom-[17%] inset-x-[0] mx-auto text-center text-white-A700 text-xl uppercase w-max"
                      size="txtPoppinsExtraBold20"
                    >
                      book now
                    </Text>
                    <div className="absolute border-4 border-solid border-white-A700 bottom-[15%] h-14 inset-x-[0] mx-auto w-[12%]"></div>
                  </div>
                </div>
                <div className="absolute bg-gray-900 bottom-[8%] h-[660px] inset-x-[0] mx-auto w-full"></div>
                <div className="absolute bottom-[8%] h-[687px] inset-x-[0] mx-auto w-full">
                  <Img
                    className="h-[687px] m-auto object-cover w-full"
                    src="images/img_2950369mesade.png"
                    alt="2950369mesade"
                  />
                  <div className="absolute bottom-[7%] flex flex-col gap-[51px] justify-start right-[9%] w-[55%]">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-start justify-start mr-[238px] w-[77%] md:w-full">
                      <Img
                        className="h-[47px] sm:h-auto md:mt-0 mt-[3px] object-cover w-[29%] md:w-full"
                        src="images/img_image5.png"
                        alt="imageFive"
                      />
                      <Text
                        className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 uppercase"
                        size="txtPoppinsRegular44"
                      >
                        Stay Where You Play
                      </Text>
                    </div>
                    <div className="h-[422px] md:ml-[0] ml-[322px] relative w-[69%] md:w-full">
                      <Text
                        className="leading-[30.00px] m-auto text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        <>
                          Book Mountain Bike Rental&#39;s
                          <br />
                          for you and your crew here. <br />
                          <br />
                          Mountain Life Supply co has mountainbikes (or
                          ski/snowboarding equipment) you can take everywhere.
                          Experience regional classics like Skyline Trail or
                          Exploration Trail. They are your rental outfitter.
                          <br />
                          <br />
                          Their bikes can go anywhere! They have hitches, roof
                          racks and tailgate pads to get you there. Need extra
                          help? They can deliver to you with their conciege
                          service.
                        </>
                      </Text>
                      <Button className="absolute border-4 border-deep_orange-200 border-solid bottom-[0] cursor-pointer font-extrabold left-[0] min-w-[319px] text-center text-xl">
                        RENT YOUR EQUIPMENT
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[8%] h-[811px] left-[18%] object-cover w-[33%]"
                src="images/img_jonnyneuenhage.png"
                alt="jonnyneuenhage"
              />
            </div>
            <Img
              className="absolute bottom-[33%] h-[556px] object-cover right-[20%] w-[29%]"
              src="images/img_timfosterqriy.png"
              alt="timfosterqriy"
            />
            <Img
              className="absolute bottom-[5%] h-[1242px] left-[0] object-cover"
              src="images/img_frame_deep_orange_200.png"
              alt="frame_Six"
            />
            <Img
              className="absolute h-[838px] inset-y-[0] left-[0] my-auto object-cover"
              src="images/img_group.png"
              alt="group"
            />
            <Img
              className="absolute h-[838px] left-[0] object-cover top-[30%]"
              src="images/img_group_deep_orange_200.png"
              alt="group_One"
            />
            <Img
              className="absolute h-[838px] object-cover right-[0] top-[9%]"
              src="images/img_group_deep_orange_200.png"
              alt="group_Two"
            />
          </div>
          <Img
            className="absolute h-[905px] inset-y-[0] my-auto object-cover right-[0]"
            src="images/img_group.png"
            alt="group_Three"
          />
          <Img
            className="absolute bottom-[8%] h-[1020px] object-cover right-[0]"
            src="images/img_frame_deep_orange_200.png"
            alt="frame_Seven"
          />
          <Img
            className="absolute bottom-[19%] h-[1020px] left-[0] object-cover"
            src="images/img_frame_deep_orange_200.png"
            alt="frame_Eight"
          />
          <Img
            className="absolute bottom-[22%] h-[981px] object-cover right-[0]"
            src="images/img_frame_deep_orange_200_981x240.png"
            alt="frame_Nine"
          />
          <Img
            className="absolute h-[981px] left-[0] object-cover top-[13%]"
            src="images/img_frame_deep_orange_200_981x318.png"
            alt="frame_Ten"
          />
          <Text
            className="absolute leading-[60.00px] right-[11%] md:text-5xl text-9xl text-white-A700 top-[18%]"
            size="txtPoppinsExtraBold128"
          >
            <span className="md:text-5xl text-white-A700 font-poppins text-left text-[64px] font-normal">
              <>
                WATCH
                <br />
                THE VIDEO
              </>
            </span>
            <span className="text-white-A700 font-poppins text-left font-extrabold">
              <>
                {" "}
                <br />
              </>
            </span>
          </Text>
        </div>
        <Img
          className="h-[409px] sm:h-auto object-cover w-full"
          src="images/img_image4.png"
          alt="imageFour"
        />
      </div>
    </>
  );
};

export default Slide169OnePage;
