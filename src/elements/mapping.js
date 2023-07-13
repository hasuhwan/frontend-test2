const order = 0;
const step = [
  [
    {
      firstStep:
        "w-full h-full  bg-blackColor grid grid-cols-2 gap-[4px] p-[4px] relative ",
      secondStep: [
        "w-full h-full ",
        "w-full h-full ",
        "w-full h-full ",
        "w-full h-full ",
        "w-1/2 h-1/2 absolute inset-x-1/4 inset-y-1/4  ",
      ],
    },
  ],
  [
    {
      firstStep: "w-full h-full  bg-blackColor grid grid-cols-2 gap-[4px] ",
      secondStep: [
        "w-full h-full bg-whiteColor",
        "w-full h-full bg-pinkColor",
        "w-full h-full bg-pinkColor",
        "w-full h-full bg-yellowColor",
      ],
    },
    {
      firstStep:
        "w-full h-full  bg-blackColor flex justify-center items-center relative",
      secondStep: [
        "w-1/2 h-1/2 bg-blueColor z-20 border-4 border-blackColor  ",
        "w-1/2 h-1/2 bg-skyColor bottom-0 right-0 z-10 absolute",
      ],
    },
    {
      firstStep:
        "w-full h-full  bg-blackColor flex justify-center items-center ",
      secondStep: [
        "w-1/2 h-1/2 bg-whiteColor border-4 border-blackColor z-30  ",
      ],
    },
    {
      firstStep: "w-full h-full  bg-blackColor  ",
      secondStep: ["w-full h-full bg-yellowColor"],
    },
    {
      firstStep: "w-full h-full  bg-blackColor z-10 ",
      secondStep: [
        "w-full h-full bg-greenColor relative ",
        "w-1/2 h-1/2 bg-whiteColor border-4 border-blackColor inset-x-1/4 bottom-0 z-30 absolute",
        "w-1/2 h-1/2 bg-redColor border-4 border-blackColor  inset-y-1/4 z-20 absolute",
      ],
    },
  ],
];

export { step, order };
