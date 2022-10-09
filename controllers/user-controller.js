const userSchema = require("../Models/Registermodel");

const addUser = async (req, res, next) => {
  const { email, password, name, age, city, country, phonenumber, bloodgroup } =
    req.body;
  //res.send(name + id);
  console.log("h");
  const doesEmailExist = await userSchema.findOne({ email });
  if (doesEmailExist) {
    throw new Error("Email already exists");
  }

  const newUser = new userSchema({
    email: email,
    password: password,
    name: name,
    age: age,
    city: city,
    country: country,
    phonenumber: phonenumber,
    bloodgroup: bloodgroup,
  });

  try {
    await newUser.save();
  } catch (err) {
    res.json({ err });
  }

  res.json({ message: "User Created" });
  console.log("user created");
};

exports.addUser = addUser;
