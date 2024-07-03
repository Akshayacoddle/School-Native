// import { useEffect, useState } from "react";
// import urlcalling from "./urlcalling";

// type Marks = {
//   result: Results[];
// };
// type Results = {
//   Full_Nmae: string;
//   aadhar_number: number;
//   address: string;
//   date_of_birth: string;
//   mobile: number;
//   pin_code: number;
//   email: string;
//   gender: string;
//   nationality: string;
// };
// function Profile() {
//   const [data, setData] = useState<Marks>();
//   useEffect(() => {
//     let path = "";
//     if (localStorage.getItem("role") === "admin") {
//       path = "/teacher/profile";
//     } else {
//       path = "/student/profile";
//     }

//     urlcalling(path, "GET").then((response) => {
//       const { result } = response;
//       setData({ result });
//       console.log(result);
//     });
//   }, []);

//   return (
//     <div className="user-profile">
//       {data?.result.map((option: any) => (
//         <div key={option.aadhar_number}>
//           <h3 className="about-head">Welcom back {option.Full_Nmae}</h3>
//           <p className="about">ABOUT</p>
//           <p>Address :{option.address}</p>
//           <p>DOB:{option.date_of_birth}</p>
//           <p>mobile: {option.mobile}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Profile;
