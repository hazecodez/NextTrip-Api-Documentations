const express = require("express");
const travelerRouter = express.Router();

//================================================traveler Login========================================================================

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Traveler Login
 *     description: Logs in a traveler.
 *     tags: [Traveler API]
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
 *                 description: The email of the traveler.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the traveler.
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful login.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating invalid credentials.
 */
travelerRouter.post("/login", (req, res) => {
  // Your login logic here
  const { email, password } = req.body;

  // Example: Check if email and password are valid
  if (email === "example@gmail.com" && password === "password") {
    res.status(200).json({
      message: "Login successful",
    });
  } else {
    res.status(401).json({
      error: "Invalid email or password",
    });
  }
});

//===============================================Traveler Signup========================================================================

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Traveler Signup
 *     description: Registers a new traveler.
 *     tags: [Traveler API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 description: The full name of the traveler.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the traveler.
 *               mobile:
 *                 type: string
 *                 description: The mobile number of the traveler.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the traveler's account.
 *     responses:
 *       200:
 *         description: Signup successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful signup.
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating missing or invalid data.
 */
travelerRouter.post("/signup", (req, res) => {
  // Your signup logic here
  const { fullname, email, mobile, password } = req.body;

  // Example: Check if all required fields are provided
  if (!fullname || !email || !mobile || !password) {
    res.status(400).json({
      error: "Missing required fields",
    });
  } else {
    // Example: Save traveler details to database
    // Assuming successful signup
    res.status(200).json({
      message: "Signup successful",
    });
  }
});

//================================================Verify OTP========================================================================
/**
 * @swagger
 * /otp-verify:
 *   post:
 *     summary: Verify OTP
 *     description: Verifies the OTP sent to the traveler's mobile number during signup.
 *     tags: [Traveler API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 description: The mobile number of the traveler.
 *               otp:
 *                 type: string
 *                 description: The OTP code sent to the traveler's mobile.
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful OTP verification.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating invalid OTP code.
 */
travelerRouter.post("/otp-verify", (req, res) => {
  // Your OTP verification logic here
  const { mobile, otp } = req.body;

  // Example: Check if the OTP matches the one sent to the traveler's mobile
  if (otp === "123456") {
    res.status(200).json({
      message: "OTP verified successfully",
    });
  } else {
    res.status(401).json({
      error: "Invalid OTP code",
    });
  }
});
//==============================================Resend OTP========================================================================

/**
 * @swagger
 * /resend-otp:
 *   post:
 *     summary: Resend OTP
 *     description: Resends the OTP to the traveler's mobile number or email.
 *     tags: [Traveler API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the traveler.
 *               contactType:
 *                 type: string
 *                 enum: [mobile, email]
 *                 description: The type of contact information to resend OTP to (either mobile or email).
 *     responses:
 *       200:
 *         description: OTP resent successfully
 *       404:
 *         description: Traveler not found
 */
travelerRouter.post("/resend-otp", (req, res) => {
  const { userId, contactType } = req.body;

  // Your logic to resend the OTP
  // Example: Check if the traveler with the provided ID exists

  if (!userId) {
    return res.status(404).json({ message: "Traveler not found" });
  }

  // Generate and send the OTP based on the contact type (logic depends on your system)
  // For demonstration purposes, assuming success
  res.status(200).json({ message: "OTP resent successfully" });
});

//================================================Traveler Home========================================================================
/**
 * @swagger
 * /:
 *   get:
 *     summary: Traveler Home
 *     description: Retrieves trending packages, destinations, stay categories, and blogs for travelers.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of traveler home data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trendingPackages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       packageName:
 *                         type: string
 *                         description: The name of the trending package.
 *                       destination:
 *                         type: string
 *                         description: The destination of the trending package.
 *                       price:
 *                         type: number
 *                         description: The price of the trending package.
 *                 trendingDestinations:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The name of the trending destination.
 *                 stayCategories:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The categories of stays available.
 *                 blogs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the blog.
 *                       author:
 *                         type: string
 *                         description: The author of the blog.
 *                       content:
 *                         type: string
 *                         description: The content of the blog.
 */
travelerRouter.get("/", (req, res) => {
  // Your logic to retrieve traveler home data
  const trendingPackages = [
    {
      packageName: "Adventure Getaway",
      destination: "Mountain Retreat",
      price: 500,
    },
    // Add more trending package objects as needed
  ];

  const trendingDestinations = [
    "Beach Paradise",
    "City Escape",
    "Nature Retreat",
  ];

  const stayCategories = ["Hotel", "Resort", "Cottage", "Villa"];

  const blogs = [
    {
      title: "10 Must-Visit Destinations for Adventure Seekers",
      author: "Traveler123",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blog objects as needed
  ];

  res.status(200).json({
    trendingPackages,
    trendingDestinations,
    stayCategories,
    blogs,
  });
});

//================================================Get Flights page========================================================================
/**
 * @swagger
 * /flights:
 *   get:
 *     summary: Get Flights page
 *     description: Retrieves trending packages for travelers when searching flights.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of trending packages for flights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   packageName:
 *                     type: string
 *                     description: The name of the trending package.
 *                   destination:
 *                     type: string
 *                     description: The destination of the trending package.
 *                   price:
 *                     type: number
 *                     description: The price of the trending package.
 */
travelerRouter.get("/flights", (req, res) => {
  // Your logic to retrieve trending packages for flights
  const trendingPackages = [
    {
      packageName: "Adventure Getaway",
      destination: "Mountain Retreat",
      price: 500,
    },
    // Add more trending package objects as needed
  ];

  res.status(200).json(trendingPackages);
});

//===============================================Get Stay page========================================================================

/**
 * @swagger
 * /stays:
 *   get:
 *     summary: Get Stay Categories and Trending Destinations
 *     description: Retrieves stay categories and trending destinations for travelers.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of stay categories and trending destinations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 stayCategories:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The categories of stays available.
 *                 trendingDestinations:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The names of the trending destinations.
 */
travelerRouter.get("/stays", (req, res) => {
  // Your logic to retrieve stay categories and trending destinations
  const stayCategories = ["Hotel", "Resort", "Cottage", "Villa"];
  const trendingDestinations = [
    "Beach Paradise",
    "Mountain Retreat",
    "City Escape",
  ];

  res.status(200).json({
    stayCategories,
    trendingDestinations,
  });
});

//===============================================Get Packages page========================================================================

/**
 * @swagger
 * /packages:
 *   get:
 *     summary: Get Trending Destinations for Packages
 *     description: Retrieves trending destinations for travelers browsing packages.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of trending destinations for packages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: The names of the trending destinations.
 */
travelerRouter.get("/packages", (req, res) => {
  // Your logic to retrieve trending destinations for packages
  const trendingDestinations = [
    "Beach Paradise",
    "Mountain Retreat",
    "City Escape",
  ];

  res.status(200).json(trendingDestinations);
});

//==============================================Get Package Details========================================================================
/**
 * @swagger
 * /select-package/{packageId}:
 *   get:
 *     summary: Get Package Details
 *     description: Retrieves details of a selected package.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: ID of the selected package.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of package details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 packageName:
 *                   type: string
 *                   description: The name of the selected package.
 *                 destination:
 *                   type: string
 *                   description: The destination of the selected package.
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: The date of the selected package.
 *                 price:
 *                   type: number
 *                   description: The price of the selected package.
 *                 activities:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The activities included in the selected package.
 *                 description:
 *                   type: string
 *                   description: The description of the selected package.
 *                 image:
 *                   type: string
 *                   description: The image URL of the selected package.
 */
travelerRouter.get("/select-package/:packageId", (req, res) => {
  // Your logic to retrieve package details based on packageId
  const packageId = req.params.packageId;
  // Example package details
  const packageDetails = {
    packageName: "Mountain Getaway",
    destination: "Mountain Retreat",
    date: "2024-04-15",
    price: 500,
    activities: ["Hiking", "Skiing", "Mountain Biking"],
    description:
      "Escape to the serene mountains and enjoy a variety of outdoor activities.",
    image: "https://example.com/mountain-getaway.jpg",
  };

  res.status(200).json(packageDetails);
});

//==============================================Chat with Host========================================================================
/**
 * @swagger
 * /chat-host/{hostId}:
 *   get:
 *     summary: Chat with Host
 *     description: Retrieves chat messages with a specific host.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: ID of the host.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of chat messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   hostName:
 *                     type: string
 *                     description: The name of the host.
 *                   message:
 *                     type: string
 *                     description: The chat message.
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     description: The time when the message was sent.
 */
travelerRouter.get("/chat-host/:hostId", (req, res) => {
  // Your logic to retrieve chat messages with the host based on hostId
  const hostId = req.params.hostId;
  // Example chat messages
  const chatMessages = [
    {
      hostName: "John",
      message: "Hello, how can I assist you?",
      time: "2024-04-15T10:00:00Z",
    },
    {
      hostName: "John",
      message: "Feel free to ask any questions!",
      time: "2024-04-15T10:05:00Z",
    },
  ];

  res.status(200).json(chatMessages);
});

//==============================================Get Notifications========================================================================
/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get Notifications
 *     description: Retrieves notifications for the traveler.
 *     tags: [Traveler API]
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
 *                     description: The name of the sender.
 *                   message:
 *                     type: string
 *                     description: The notification message.
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     description: The time when the notification was sent.
 */
travelerRouter.get("/notifications", (req, res) => {
  // Your logic to retrieve notifications for the traveler
  const notifications = [
    {
      senderName: "Admin",
      message: "Your booking is confirmed!",
      time: new Date().toISOString(), // Current time in ISO format
    },
    // Add more notification objects as needed
  ];

  res.status(200).json(notifications);
});
//==============================================Get Blogs========================================================================

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get Blogs
 *     description: Retrieves blog details for travelers.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: The title of the blog.
 *                   author:
 *                     type: string
 *                     description: The author of the blog.
 *                   content:
 *                     type: string
 *                     description: The content of the blog.
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: The date when the blog was published.
 */
travelerRouter.get("/blogs", (req, res) => {
  // Your logic to retrieve blog details for travelers
  const blogs = [
    {
      title: "10 Must-Visit Destinations for Adventure Seekers",
      author: "Traveler123",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: new Date().toISOString(), // Current time in ISO format
    },
    // Add more blog objects as needed
  ];

  res.status(200).json(blogs);
});

//==============================================Get Selected Blog========================================================================
/**
 * @swagger
 * /select-blog/{id}:
 *   get:
 *     summary: Get Selected Blog
 *     description: Retrieves details of a selected blog.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the selected blog.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of selected blog details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 caption:
 *                   type: string
 *                   description: The caption of the selected blog.
 *                 description:
 *                   type: string
 *                   description: The description of the selected blog.
 *                 location:
 *                   type: string
 *                   description: The location of the selected blog.
 *                 author:
 *                   type: string
 *                   description: The author of the selected blog.
 */
travelerRouter.get("/select-blog/:id", (req, res) => {
  // Your logic to retrieve details of the selected blog based on id
  const { id } = req.params;
  // Example blog details
  const blogDetails = {
    caption: "Exploring the Hidden Gems of Kyoto",
    description:
      "Kyoto, the former imperial capital of Japan, is known for its traditional temples, gardens, and geisha.",
    location: "Kyoto, Japan",
    author: "Traveler123",
  };

  res.status(200).json(blogDetails);
});

//==============================================Get User Profile========================================================================
/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get User Profile
 *     description: Retrieves details of the user's profile including images and blogs posted by the user.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Successful retrieval of user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDetails:
 *                   type: object
 *                   description: Details of the user.
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the user.
 *                     email:
 *                       type: string
 *                       description: The email of the user.
 *                     mobile:
 *                       type: string
 *                       description: The mobile number of the user.
 *                     address:
 *                       type: string
 *                       description: The address of the user.
 *                     profileImage:
 *                       type: string
 *                       description: The URL of the user's profile image.
 *                 userBlogs:
 *                   type: array
 *                   description: Blogs posted by the user.
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the blog.
 *                       content:
 *                         type: string
 *                         description: The content of the blog.
 *                       location:
 *                         type: string
 *                         description: The location of the blog.
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         description: The date when the blog was posted.
 *                       image:
 *                         type: string
 *                         description: The URL of the blog's image.
 */
travelerRouter.get("/profile", (req, res) => {
  // Your logic to retrieve user details and blogs posted by the user
  const userDetails = {
    name: "John Doe",
    email: "john@example.com",
    mobile: "1234567890",
    address: "123 Main St, City, Country",
    profileImage: "https://example.com/profile.jpg",
  };

  const userBlogs = [
    {
      title: "Exploring the Hidden Gems of Kyoto",
      content:
        "Kyoto, the former imperial capital of Japan, is known for its traditional temples, gardens, and geisha.",
      location: "Kyoto, Japan",
      date: new Date().toISOString(),
      image: "https://example.com/kyoto.jpg",
    },
    // Add more blog objects as needed
  ];

  res.status(200).json({ userDetails, userBlogs });
});

//==============================================Edit User Profile========================================================================
/**
 * @swagger
 * /edit-profile:
 *   put:
 *     summary: Edit User Profile
 *     description: Updates the user's profile information.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: formData
 *         name: name
 *         required: true
 *         description: The new name of the user.
 *         schema:
 *           type: string
 *       - in: formData
 *         name: email
 *         required: true
 *         description: The new email of the user.
 *         schema:
 *           type: string
 *           format: email
 *       - in: formData
 *         name: mobile
 *         required: true
 *         description: The new mobile number of the user.
 *         schema:
 *           type: string
 *       - in: formData
 *         name: address
 *         required: true
 *         description: The new address of the user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message indicating successful profile update.
 */
travelerRouter.put("/edit-profile", (req, res) => {
  // Your logic to update the user's profile
  const { name, email, mobile, address } = req.body;

  // Your logic to update the user's profile in the database

  // Assuming the profile update was successful
  res.status(200).json({ message: "Profile updated successfully" });
});
//==============================================Create Blog========================================================================
/**
 * @swagger
 * /create-blog:
 *   post:
 *     summary: Create Blog
 *     description: Creates a new blog post.
 *     tags: [Traveler API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 description: The URL of the blog's image.
 *               caption:
 *                 type: string
 *                 description: The caption/title of the blog.
 *               userId:
 *                 type: string
 *                 description: The ID of the user creating the blog.
 *               description:
 *                 type: string
 *                 description: The content/description of the blog.
 *               location:
 *                 type: string
 *                 description: The location associated with the blog.
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message indicating successful creation of the blog.
 *                 blogId:
 *                   type: string
 *                   description: The ID of the newly created blog.
 */
travelerRouter.post("/create-blog", (req, res) => {
  // Your logic to create a new blog post
  const { image, caption, userId, description, location } = req.body;

  // Your logic to save the blog details in the database

  // Assuming the blog creation was successful
  const blogId = "123456"; // Example blog ID
  res.status(201).json({ message: "Blog created successfully", blogId });
});

//==============================================Get Stay Bookings========================================================================
/**
 * @swagger
 * /stay-bookings/{userId}:
 *   get:
 *     summary: Get User Stay Bookings
 *     description: Retrieves stay bookings for a specific user.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to retrieve stay bookings for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of user stay bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   hotelDetails:
 *                     type: object
 *                     description: Details of the hotel booked.
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the hotel.
 *                       location:
 *                         type: string
 *                         description: The location of the hotel.
 *                       checkIn:
 *                         type: string
 *                         format: date
 *                         description: The check-in date.
 *                       checkOut:
 *                         type: string
 *                         format: date
 *                         description: The check-out date.
 *                       guests:
 *                         type: integer
 *                         description: The number of guests.
 *
 */
travelerRouter.get("/stay-bookings/:userId", (req, res) => {
  // Your logic to retrieve stay bookings for the specified user
  const { userId } = req.params;

  // Your logic to fetch stay bookings from the database based on userId

  // Example hotel details for demonstration purposes
  const stayBookings = [
    {
      hotelDetails: {
        name: "Example Hotel",
        location: "City Center",
        checkIn: "2024-04-15",
        checkOut: "2024-04-20",
        guests: 2,
      },
    },
    // Add more stay booking objects as needed
  ];

  res.status(200).json(stayBookings);
});

//==============================================Get User Flight Bookings========================================================================
/**
 * @swagger
 * /flight-bookings/{userId}:
 *   get:
 *     summary: Get User Flight Bookings
 *     description: Retrieves flight details for a specific user's bookings.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to retrieve flight bookings for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of user flight bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   flightDetails:
 *                     type: object
 *                     description: Details of the flight booked.
 *                     properties:
 *                       flightId:
 *                         type: string
 *                         description: The ID of the flight.
 *                       departure:
 *                         type: string
 *                         description: The departure location.
 *                       arrival:
 *                         type: string
 *                         description: The arrival location.
 *                       date:
 *                         type: string
 *                         format: date
 *                         description: The date of the flight.
 *                       price:
 *                         type: number
 *                         description: The price of the flight.
 *
 */
travelerRouter.get("/flight-bookings/:userId", (req, res) => {
  // Your logic to retrieve flight bookings for the specified user
  const { userId } = req.params;

  // Your logic to fetch flight bookings from the database based on userId

  // Example flight details for demonstration purposes
  const flightBookings = [
    {
      flightDetails: {
        flightId: "ABC123",
        departure: "New York",
        arrival: "Los Angeles",
        date: "2024-04-15",
        price: 300,
      },
    },
    // Add more flight booking objects as needed
  ];

  res.status(200).json(flightBookings);
});

//==============================================Get User Package Bookings========================================================================
/**
 * @swagger
 * /package-bookings/{userId}:
 *   get:
 *     summary: Get User Package Bookings
 *     description: Retrieves package details for a specific user's bookings.
 *     tags: [Traveler API]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to retrieve package bookings for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of user package bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   packageDetails:
 *                     type: object
 *                     description: Details of the package booked.
 *                     properties:
 *                       packageName:
 *                         type: string
 *                         description: The name of the package.
 *                       destination:
 *                         type: string
 *                         description: The destination of the package.
 *                       date:
 *                         type: string
 *                         format: date
 *                         description: The date of the package booking.
 *                       price:
 *                         type: number
 *                         description: The price of the package.
 *
 */
travelerRouter.get("/package-bookings/:userId", (req, res) => {
  // Your logic to retrieve package bookings for the specified user
  const { userId } = req.params;

  // Your logic to fetch package bookings from the database based on userId

  // Example package details for demonstration purposes
  const packageBookings = [
    {
      packageDetails: {
        packageName: "Adventure Package",
        destination: "Mountains",
        date: "2024-04-15",
        price: 500,
      },
    },
    // Add more package booking objects as needed
  ];

  res.status(200).json(packageBookings);
});

//==============================================Change Password========================================================================
/**
 * @swagger
 * /change-password:
 *   put:
 *     summary: Change Password
 *     description: Changes the traveler's password.
 *     tags: [Traveler API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: The current password of the traveler.
 *               newPassword:
 *                 type: string
 *                 description: The new password for the traveler.
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid current password
 */
travelerRouter.put("/change-password", (req, res) => {
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

//==============================================Forgot Password========================================================================
/**
 * @swagger
 * /forgot-password:
 *   post:
 *     summary: Forgot Password
 *     description: Initiates the process for resetting the traveler's password.
 *     tags: [Traveler API]
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
 *                 description: The email address of the traveler.
 *     responses:
 *       200:
 *         description: Password reset email sent successfully
 *       404:
 *         description: Traveler not found
 */
travelerRouter.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  // Your logic to initiate the password reset process
  // Example: Check if the traveler with the provided email exists

  if (email !== "example@example.com") {
    return res.status(404).json({ message: "Traveler not found" });
  }

  // Generate and send a password reset email (logic depends on your system)
  // For demonstration purposes, assuming success
  res.status(200).json({ message: "Password reset email sent successfully" });
});

//==============================================Logout========================================================================
/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout
 *     description: Logs out the traveler.
 *     tags: [Traveler API]
 *     responses:
 *       200:
 *         description: Traveler logged out successfully
 */
travelerRouter.post("/logout", (req, res) => {
  // Your logic for logging out the traveler
  // This could include clearing session data or performing other actions as needed

  res.status(200).send("Traveler logged out successfully");
});

module.exports = travelerRouter;
