const mapping = {
  value: "bg-blackColor row-start-1 row-span-4 col-start-1 col-span-4  ",
  next: [
    {
      value: "bg-blackColor row-start-1 col-start-1 ",
      next: [
        { value: "bg-whiteColor row-start-1 col-start-1 ", next: [] },
        { value: "bg-pinkColor row-start-1 col-start-3 ", next: [] },
        { value: "bg-pinkColor row-start-3 col-start-1 ", next: [] },
      ],
    },
    {
      value: "bg-blackColor row-start-1 col-start-3 ",
      next: [
        { value: "row-start-2 col-start-2 bg-blueColor z-20 ", next: [] },
        { value: "row-start-3 col-start-3 bg-skyColor z-10 ", next: [] },
      ],
    },
    {
      value: "bg-blackColor row-start-3 col-start-1 ",
      next: [
        { value: "row-start-2 col-start-2 bg-whiteColor z-30  ", next: [] },
      ],
    },
    { value: "bg-yellowColor row-start-3 col-start-3 ", next: [] },
    {
      value: "bg-greenColor row-start-2 col-start-2 ",
      next: [
        { value: "row-start-2 col-start-1 bg-redColor z-20 ", next: [] },
        { value: "row-start-3 col-start-2 bg-whiteColor z-30 ", next: [] },
      ],
    },
  ],
};

export { mapping };
