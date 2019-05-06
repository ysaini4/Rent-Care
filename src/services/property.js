import { httpService } from "./httpservices";
export const postProperty = async data => {
  /*let headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2JlYjE3Y2MyNzA4NjI5YmY4MmZiYTYiLCJuYW1lIjoiYWRhc2QiLCJlbWFpbCI6ImFZb2d5YSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE1NTYwMDMzMjR9.jE4KBW47xUivFPcmesX2J-t04wvEykYXgD2lKhTIauU"
  };*/
  return await httpService("POST", "/property", data);
};
export const searchProperty = async data => {
  return await httpService("POST", "/property/search", data);
};

export const generateOtp = async () => {
  let url =
    "http://control.msg91.com/api/sendotp.php?authkey=275294A6MSZJwM5ccfbcd4&message=Hi from Rent-Care.Your OTP is ##OTP##.&sender=RNTCR&mobile=8955065736";
  return await httpService("POST", url);
};
