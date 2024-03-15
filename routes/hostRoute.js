const express = require("express");
const hostRouter = express.Router();
//===================================================Host login=========================================================
/**
 * @swagger
 * /host/login:
 *   post:
 *     summary: Host Login
 *     description: Logs in a host user.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the host.
 *               password:
 *                 type: string
 *                 description: The password of the host.
 *     responses:
 *       200:
 *         description: Successfully logged in as a host
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful login.
 */
hostRouter.post("/login", (req, res) => {
  // Your login logic here
  res.status(200).json({
    message: "Successfully logged in as a host",
  });
});

//===================================================Host Signup=======================================================

/**
 * @swagger
 * /host/signup:
 *   post:
 *     summary: Host Signup
 *     description: Registers a new host with email and password.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the host.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the host account.
 *     responses:
 *       200:
 *         description: Successfully registered as a host
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful registration.
 */
hostRouter.post("/signup", (req, res) => {
  // Your signup logic here
  res.status(200).json({
    message: "Successfully registered as a host",
  });
});

//================================================Verify OTP for Host=================================================
/**
 * @swagger
 * /host/verify-otp:
 *   post:
 *     summary: Verify OTP for Host
 *     description: Verifies OTP (One-Time Password) for host authentication.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               otp:
 *                 type: string
 *                 description: The OTP received by the host.
 *     responses:
 *       200:
 *         description: Successfully verified OTP for host authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful OTP verification.
 *       400:
 *         description: Invalid OTP provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the provided OTP is invalid.
 */
hostRouter.post("/verify-otp", (req, res) => {
  // Your OTP verification logic here
  const { otp } = req.body;
  if (otp === "123456") {
    res.status(200).json({
      message: "OTP verified successfully",
    });
  } else {
    res.status(400).json({
      error: "Invalid OTP",
    });
  }
});
//================================================Resend OTP===============================================
/**
 * @swagger
 * /host/resend-otp:
 *   post:
 *     summary: Resend OTP
 *     description: Resends the OTP to the host's mobile number or email.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the host.
 *               contactType:
 *                 type: string
 *                 enum: [mobile, email]
 *                 description: The type of contact information to resend OTP to (either mobile or email).
 *     responses:
 *       200:
 *         description: OTP resent successfully
 *       404:
 *         description: Host not found
 */
hostRouter.post("/resend-otp", (req, res) => {
  const { userId, contactType } = req.body;

  // Your logic to resend the OTP
  // Example: Check if the host with the provided ID exists

  if (!userId) {
    return res.status(404).json({ message: "Host not found" });
  }

  // Generate and send the OTP based on the contact type (logic depends on your system)
  // For demonstration purposes, assuming success
  res.status(200).json({ message: "OTP resent successfully" });
});

//================================================Verify Host Admin with Aadhaar================================================

/**
 * @swagger
 * /host/verify-aadhaar:
 *   post:
 *     summary: Verify Host Admin with Aadhaar
 *     description: Verifies host admin using Aadhaar card number.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aadhaarNumber:
 *                 type: number
 *                 description: The Aadhaar card number of the host admin.
 *     responses:
 *       200:
 *         description: Successfully verified host admin using Aadhaar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful host admin verification.
 *       400:
 *         description: Invalid Aadhaar number provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the provided Aadhaar number is invalid.
 */
hostRouter.post("/verify-aadhaar", (req, res) => {
  // Your Aadhaar verification logic here
  const { aadhaarNumber } = req.body;
  if (aadhaarNumber === 35435345454) {
    res.status(200).json({
      message: "Host admin verified successfully using Aadhaar",
    });
  } else {
    res.status(400).json({
      error: "Invalid Aadhaar number",
    });
  }
});
//============================================== Get Host Profile==============================================
/**
 * @swagger
 * /host/profile:
 *   get:
 *     summary: Get Host Profile
 *     description: Retrieves the profile information of the host.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful retrieval of host profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the host.
 *                 address:
 *                   type: string
 *                   description: The address of the host.
 *                 bankName:
 *                   type: string
 *                   description: The name of the bank associated with the host's account.
 *                 accountNumber:
 *                   type: string
 *                   description: The account number of the host.
 *                 branchName:
 *                   type: string
 *                   description: The name of the branch of the host's bank.
 *                 mobile:
 *                   type: string
 *                   description: The mobile number of the host.
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the host.
 *                 password:
 *                   type: string
 *                   format: password
 *                   description: The password of the host's account.
 */
hostRouter.get("/profile", (req, res) => {
  // Your logic to retrieve host profile data
  const hostProfile = {
    name: "John Doe",
    address: "123 Main St, City",
    bankName: "ABC Bank",
    accountNumber: "1234567890",
    branchName: "Main Branch",
    mobile: "9876543210",
    email: "john@example.com",
    password: "********",
  };
  res.status(200).json(hostProfile);
});

//=============================================Get Host Packages==============================================

/**
 * @swagger
 * /host/packages:
 *   get:
 *     summary: Get Host Packages
 *     description: Retrieves the packages offered by the host.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful retrieval of host packages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   packageName:
 *                     type: string
 *                     description: The name of the package.
 *                   destination:
 *                     type: string
 *                     description: The destination of the package.
 *                   date:
 *                     type: string
 *                     description: The date of the package.
 *                   price:
 *                     type: number
 *                     description: The price of the package.
 *                   activities:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: The activities included in the package.
 *                   description:
 *                     type: string
 *                     description: The description of the package.
 *                   food:
 *                     type: string
 *                     description: The food options included in the package.
 *                   stay:
 *                     type: string
 *                     description: The type of stay included in the package.
 *                   flight:
 *                     type: string
 *                     description: The flight options included in the package.
 *                   bookings:
 *                     type: number
 *                     description: The number of bookings made for the package.
 */
hostRouter.get("/packages", (req, res) => {
  // Your logic to retrieve host packages data
  const hostPackages = [
    {
      packageName: "Adventure Getaway",
      destination: "Mountain Retreat",
      date: "2024-05-15",
      price: 500,
      activities: ["Hiking", "Camping", "Rafting"],
      description:
        "Escape to the serene mountains for an adventure-packed retreat.",
      food: "Breakfast and Dinner included",
      stay: "Tented accommodation",
      flight: "Not included",
      bookings: 10,
    },
    // Add more package objects as needed
  ];
  res.status(200).json(hostPackages);
});

//===================================================Host Dashboard=========================================================

hostRouter.get("/dashboard", (req, res) => {
  res.status(200).json({
    totalBookings: 34,
    payment: 5465658,
    profit: 64578,
    expenditure: 43545,
  });
});

/**
 * @swagger
 * /host/dashboard:
 *   get:
 *     summary: Host Dashboard
 *     description: Retrieves the dashboard information for a host.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful retrieval of host dashboard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalBookings:
 *                   type: number
 *                   description: Total number of bookings made by the host
 *                 payment:
 *                   type: number
 *                   description: Total payment received by the host
 *                 profit:
 *                   type: number
 *                   description: Total profit earned by the host
 *                 expenditure:
 *                   type: number
 *                   description: Total expenditure incurred by the host
 */

//===================================================Get Host Selected Package=========================================================
/**
 * @swagger
 * /host/package/{packageId}:
 *   get:
 *     summary: Get Host Selected Package
 *     description: Retrieves the details of the selected package by its ID.
 *     tags: [Host API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: ID of the selected package
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of selected package
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 packageName:
 *                   type: string
 *                   description: The name of the package.
 *                 destination:
 *                   type: string
 *                   description: The destination of the package.
 *                 date:
 *                   type: string
 *                   description: The date of the package.
 *                 price:
 *                   type: number
 *                   description: The price of the package.
 *                 activities:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: The activities included in the package.
 *                 description:
 *                   type: string
 *                   description: The description of the package.
 *                 food:
 *                   type: string
 *                   description: The food options included in the package.
 *                 stay:
 *                   type: string
 *                   description: The type of stay included in the package.
 *                 flight:
 *                   type: string
 *                   description: The flight options included in the package.
 *                 bookings:
 *                   type: number
 *                   description: The number of bookings made for the package.
 */
hostRouter.get("/package/:packageId", (req, res) => {
  // Your logic to retrieve details of the selected package by its ID
  const packageId = req.params.packageId;
  // Dummy data for demonstration
  const selectedPackage = {
    packageName: "Adventure Getaway",
    destination: "Mountain Retreat",
    date: "2024-05-15",
    price: 500,
    activities: ["Hiking", "Camping", "Rafting"],
    description:
      "Escape to the serene mountains for an adventure-packed retreat.",
    food: "Breakfast and Dinner included",
    stay: "Tented accommodation",
    flight: "Not included",
    bookings: 10,
  };
  res.status(200).json(selectedPackage);
});

//===================================================Create Package=========================================================
/**
 * @swagger
 * /host/create-package:
 *   post:
 *     summary: Create Package
 *     description: Creates a new package.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               packageName:
 *                 type: string
 *                 description: The name of the package.
 *               capacity:
 *                 type: number
 *                 description: The capacity of the package.
 *               destination:
 *                 type: string
 *                 description: The destination of the package.
 *               durationStart:
 *                 type: string
 *                 format: date
 *                 description: The start date of the package.
 *               durationEnd:
 *                 type: string
 *                 format: date
 *                 description: The end date of the package.
 *               food:
 *                 type: string
 *                 description: The food options included in the package.
 *               flightDeparture:
 *                 type: string
 *                 description: The departure flight information.
 *               flightArrival:
 *                 type: string
 *                 description: The arrival flight information.
 *               amenities:
 *                 type: string
 *                 description: The amenities included in the package.
 *               availabilityStart:
 *                 type: string
 *                 format: date
 *                 description: The start date of package availability.
 *               availabilityEnd:
 *                 type: string
 *                 format: date
 *                 description: The end date of package availability.
 *               roomType:
 *                 type: string
 *                 description: The type of room offered in the package.
 *               price:
 *                 type: number
 *                 description: The price of the package.
 *               activities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The activities included in the package.
 *               stay:
 *                 type: string
 *                 description: The type of stay included in the package.
 *               description:
 *                 type: string
 *                 description: The description of the package.
 *               image:
 *                 type: string
 *                 format: url
 *                 description: The URL of the image representing the package.
 *               hostId:
 *                 type: string
 *                 description: The ID of the host creating the package.
 *     responses:
 *       200:
 *         description: Package created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful package creation.
 */
hostRouter.post("/create-package", (req, res) => {
  // Your logic to create a new package
  const newPackage = req.body;
  // Dummy response for demonstration
  res.status(200).json({
    message: "Package created successfully",
  });
});
//==================================================Get Messages=========================================================

/**
 * @swagger
 * /host/message-box:
 *   get:
 *     summary: Get Messages
 *     description: Retrieves messages from the message box.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful retrieval of messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   senderName:
 *                     type: string
 *                     description: The name of the message sender.
 *                   message:
 *                     type: string
 *                     description: The message content.
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     description: The time when the message was sent.
 */
hostRouter.get("/message-box", (req, res) => {
  // Your logic to retrieve messages from the message box
  const messages = [
    {
      senderName: "John Doe",
      message: "Hello, how are you?",
      time: "2024-03-20T08:00:00Z",
    },
    // Add more message objects as needed
  ];
  res.status(200).json(messages);
});

//==================================================Get Notifications=========================================================

/**
 * @swagger
 * /host/notification:
 *   get:
 *     summary: Get Notifications
 *     description: Retrieves notifications from the notification box.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful retrieval of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   senderName:
 *                     type: string
 *                     description: The name of the notification sender.
 *                   message:
 *                     type: string
 *                     description: The notification message content.
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     description: The time when the notification was sent.
 */
hostRouter.get("/notification", (req, res) => {
  // Your logic to retrieve notifications from the notification box
  const notifications = [
    {
      senderName: "Admin",
      message: "New booking request received",
      time: "2024-03-20T08:00:00Z",
    },
    // Add more notification objects as needed
  ];
  res.status(200).json(notifications);
});

//==================================================Host Logout=========================================================

/**
 * @swagger
 * /host/logout:
 *   post:
 *     summary: Host Logout
 *     description: Logs out the host from the system.
 *     tags: [Host API]
 *     responses:
 *       200:
 *         description: Successful logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful logout.
 */
hostRouter.post("/logout", (req, res) => {
  // Your logout logic here
  // Example: Clear session, token, or any other authentication mechanism
  res.status(200).json({
    message: "Successfully logged out",
  });
});
//=================================================Change Password========================================================
/**
 * @swagger
 * /host/change-password:
 *   put:
 *     summary: Change Password
 *     description: Changes the host's password.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: The current password of the host.
 *               newPassword:
 *                 type: string
 *                 description: The new password for the host.
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid current password
 */
hostRouter.put("/change-password", (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Your logic to validate the current password and update it with the new one
  // Example: Check if the current password matches the one stored in the database

  if (currentPassword !== "exampleCurrentPassword") {
    return res.status(400).json({ message: "Invalid current password" });
  }

  // Update the password (logic depends on your authentication system)
  // For demonstration purposes, assuming success
  res.status(200).json({ message: "Password changed successfully" });
});

//=================================================Forgot Password=======================================================
/**
 * @swagger
 * /host/forgot-password:
 *   post:
 *     summary: Forgot Password
 *     description: Initiates the process for resetting the host's password.
 *     tags: [Host API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the host.
 *     responses:
 *       200:
 *         description: Password reset email sent successfully
 *       404:
 *         description: Host not found
 */
hostRouter.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  // Your logic to initiate the password reset process
  // Example: Check if the host with the provided email exists

  if (email !== "example@example.com") {
    return res.status(404).json({ message: "Host not found" });
  }

  // Generate and send a password reset email (logic depends on your system)
  // For demonstration purposes, assuming success
  res.status(200).json({ message: "Password reset email sent successfully" });
});

module.exports = hostRouter;
