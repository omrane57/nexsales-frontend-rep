const getCardDetail = () => {
  const response = {
    data: [
      { text: "Sign up Initiated", tam: "52" },
      { text: "Sign up Completed", tam: "32" },
      { text: "Log In Completed", tam: "30" },
      { text: "Request Raised", tam: "12" },
    ],
  };
  return response;
};
const getTableDetail = () => {
  const tableData = [
    {
      Name: "",
      EmailAddress: "akshay.pawar@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632541556",
    },
    {
      Name: "Om Rane dewqdwqdqwdfwqerewrewfaefaef  Om Rane dewqdwqdqwdfwqerewrewfaefaefOm Rane dewqdwqdqwdfwqerewrewfaefaefOm Rane dewqdwqdqwdfwqerewrewfaefaef",
      EmailAddress: "om.rane@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632541556",
    },
    {
      Name: "rohit verma",
      EmailAddress: "rohit.verma@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632541556",
    },
    {
      Name: "caleb felix",
      EmailAddress: "caleb.felix@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632541556",
    },
  ];
  return tableData;
};
export { getCardDetail, getTableDetail };
