// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// import employer from "../models/employer";

// const secret = 'test';

// export const signinemployer = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingEmployer = await employer.findOne({ email });

//     if (!existingEmployer) return res.status(404).json({ message: "User doesn't exist" });

//     const isPasswordCorrect = await bcrypt.compare(password, existingEmployer.password);

//     if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ email: existingEmployer.email, id: existingEmployer._id }, secret, { expiresIn: "1h" });

//     res.status(200).json({ result: existingEmployer, token });
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export const signupemployer = async (req, res) => {
//   const { email, password, firstName, lastName, dob, phone } = req.body;

//   try {
//     const exsistingEmployer = await employer.findOne({ email });
//     const exsistingPhoneEmployer = await employer.findOne({ phone });
//     if (exsistingEmployer) return res.status(400).json({ message: "User already exists" });
//     if (exsistingPhoneEmployer) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await employer.create({ email,phone, dob, password: hashedPassword, name: `${firstName} ${lastName}` });

//     const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

//     res.status(201).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
    
//     console.log(error);
//   }
// };
