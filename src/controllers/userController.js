import  {findEmail} from "../services/userService.js";

export const loginUser = (req, res) =>{
const {email, password} = req.body;

const user = findEmail(email);
if(!user) return res.status(404).json({msg:"Email oldsongui"});
if(user.password !==password) return res.status(401).json({msg:"Password buruu"});

res.cookie("userId", user.id, {
  httpOnly: true,
  maxAge: 3*24*60*60*1000
});

res.json({
  msg:"Amjilttai nevterlee",
  firstname: user.firstname,
  lastname: user.lastname
});

};

export const logoutUser = (req, res)=>{
  res.clearCookie("userId");
  res.json({msg:"Holbolt sallaa"})
}