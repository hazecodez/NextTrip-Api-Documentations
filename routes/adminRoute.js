const express = require("express");
const adminRouter = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Admin
//  *   description: Operations related to admin
//  */

//=========================================================Admin Login================================================================
adminRouter.post("/login", (req, res) => {
  res.status(200).json({
    message: "Successfully Login to Admin panel",
  });
});

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin Login
 *     description: Logs in the admin user.
 *     tags: [Admin API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminName:
 *                 type: string
 *                 description: The username of the admin.
 *               password:
 *                 type: string
 *                 description: The password of the admin.
 *     responses:
 *       200:
 *         description: Successfully logged in to the admin panel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful login.
 */
//==========================================================Admin dashboard================================================================
adminRouter.get("/dashboard", (req, res) => {
  res.status(200).json({
    totalTravelers: 10,
    totalHosts: 20,
    totalPackages: 20,
    totalBlogs: 25,
    totalStayBookings: 20,
    totalFlightBookings: 20,
    totalPackageBookings: 20,
  });
});
/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Admin dashboard
 *     description: Retrieves the dashboard information for an admin.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of admin dashboard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalTravelers:
 *                   type: number
 *                   description: Total number of travelers
 *                 totalHosts:
 *                   type: number
 *                   description: Total number of hosts
 *                 totalPackages:
 *                   type: number
 *                   description: Total number of packages
 *                 totalBlogs:
 *                   type: number
 *                   description: Total number of blogs
 *                 totalStayBookings:
 *                   type: number
 *                   description: Total number of stay bookings
 *                 totalFlightBookings:
 *                   type: number
 *                   description: Total number of flight bookings
 *                 totalPackageBookings:
 *                   type: number
 *                   description: Total number of package bookings
 */

//==========================================================Get traveler list================================================================
adminRouter.get("/traveler-list", (req, res) => {
  res.status(200).json({
    name: "john",
    email: "sample@gmail.com",
    mobile: 2342434343,
    isBlock: false,
    _id: 5787987659875,
  });
});
/**
 * @swagger
 * /admin/traveler-list:
 *   get:
 *     summary: Get traveler list
 *     description: Retrieves the list of travelers.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of traveler list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the traveler
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the traveler
 *                 mobile:
 *                   type: number
 *                   description: The mobile number of the traveler
 *                 isBlock:
 *                   type: boolean
 *                   description: Indicates if the traveler is blocked
 *                 _id:
 *                   type: number
 *                   description: The unique identifier of the traveler
 */

//==========================================================Block traveler================================================================
adminRouter.put("/block-traveler/:travelerId", (req, res) => {
  const { travelerId } = req.params;

  console.log(travelerId);
  res
    .status(200)
    .json({ message: "Student with ID ${studentId} blocked successfully." });
});

/**
 * @swagger
 * /admin/block-traveler/{travelerId}:
 *   put:
 *     summary: Block traveler
 *     description: Blocks a traveler by their ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: travelerId
 *         required: true
 *         description: ID of the traveler to be blocked
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful blocking of the traveler
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming the successful blocking of the traveler
 */

//==========================================================Get package list================================================================
// Get traveler details

adminRouter.get("/package-list", (req, res) => {
  res.status(200).json({
    name: "PAckage",
    hostName: "john",
    destination: "mumbai",
    date: "date",
    totalBookings: 23,
  });
});
/**
 * @swagger
 * /admin/package-list:
 *   get:
 *     summary: Get package list
 *     description: Retrieves the list of packages.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of package list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the package
 *                 hostName:
 *                   type: string
 *                   description: The name of the host offering the package
 *                 destination:
 *                   type: string
 *                   description: The destination of the package
 *                 date:
 *                   type: string
 *                   description: The date of the package
 *                 totalBookings:
 *                   type: number
 *                   description: The total number of bookings for the package
 */

//==========================================================Get package bookings================================================================
adminRouter.get("/package-bookings/:packageId", (req, res) => {
  res.status(200).json({
    name: "john",
    stay: "hotel",
    flight: "mumabi",
    guests: 2,
  });
});

/**
 * @swagger
 * /admin/package-bookings/{packageId}:
 *   get:
 *     summary: Get package bookings
 *     description: Retrieves the bookings for a specific package.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: ID of the package for which bookings are requested
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of package bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the guest who booked the package
 *                 stay:
 *                   type: string
 *                   description: The type of stay booked for the package
 *                 flight:
 *                   type: string
 *                   description: The flight destination for the package booking
 *                 guests:
 *                   type: number
 *                   description: The number of guests included in the package booking
 */

//==========================================================Get package details================================================================
adminRouter.get("/package-details/:packageId", (req, res) => {
  res.status(200).json({
    name: "package",
    destination: "dfh",
    stay: "dfg",
    food: "djfhg",
    amenities: "djfg",
    price: 1223,
    description: "dfgf",
    images: ["fdhg", "jdfg", "dfgdy"],
  });
});

/**
 * @swagger
 * /admin/package-details/{packageId}:
 *   get:
 *     summary: Get package details
 *     description: Retrieves the details of a specific package.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: ID of the package for which details are requested
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
 *                 name:
 *                   type: string
 *                   description: The name of the package
 *                 destination:
 *                   type: string
 *                   description: The destination of the package
 *                 stay:
 *                   type: string
 *                   description: The type of stay provided in the package
 *                 food:
 *                   type: string
 *                   description: The food options included in the package
 *                 amenities:
 *                   type: string
 *                   description: The amenities provided in the package
 *                 price:
 *                   type: number
 *                   description: The price of the package
 *                 description:
 *                   type: string
 *                   description: A description of the package
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: An array of image URLs representing the package
 */

//==========================================================Get booking details================================================================
/**
 * @swagger
 * /admin/booking-details:
 *   get:
 *     summary: Get booking details
 *     description: Retrieves the details of a booking.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of booking details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 travelerName:
 *                   type: string
 *                   description: The name of the traveler associated with the booking
 *                 departure:
 *                   type: string
 *                   description: The departure location for the booking
 *                 arrival:
 *                   type: string
 *                   description: The arrival location for the booking
 *                 tripType:
 *                   type: string
 *                   description: The type of trip (e.g., one-way, round-trip) for the booking
 *                 flightDate:
 *                   type: string
 *                   description: The date of the flight for the booking
 *                 price:
 *                   type: number
 *                   description: The total price of the booking
 *                 flightId:
 *                   type: string
 *                   description: The ID of the flight associated with the booking
 *                 guests:
 *                   type: number
 *                   description: The number of guests included in the booking
 *                 hotelName:
 *                   type: string
 *                   description: The name of the hotel booked for the stay
 *                 stayDate:
 *                   type: string
 *                   description: The date of the stay
 */

//==========================================================Get blogs list================================================================

adminRouter.get("/blogs-list", (req, res) => {
  res.status(200).json({
    travelerName: "fdfg",
    location: "gdg",
    caption: "fdfdf",
  });
});

/**
 * @swagger
 * /admin/blogs-list:
 *   get:
 *     summary: Get blogs list
 *     description: Retrieves the list of blogs.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of blogs list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 travelerName:
 *                   type: string
 *                   description: The name of the traveler associated with the blog
 *                 location:
 *                   type: string
 *                   description: The location related to the blog
 *                 caption:
 *                   type: string
 *                   description: The caption or title of the blog
 */

//==========================================================Block blog================================================================

adminRouter.put("/block-blog/:blogId", (req, res) => {
  const { blogId } = req.params;
  res.status(200).json({
    message: `Block ${blogId} successfully`,
  });
});

/**
 * @swagger
 * /admin/block-blog/{blogId}:
 *   put:
 *     summary: Block blog
 *     description: Blocks a blog by its ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to be blocked
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful blocking of the blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming the successful blocking of the blog
 */

//==========================================================Get blog details===============================================================

adminRouter.get("/blog-details/:blogId", (req, res) => {
  res.status(200).json({
    image: "dfjhd",
    caption: "dffjgdh",
    location: "dfkjgdf",
    description: "fdhgf",
    userId: "kjhfgdlkjfb",
  });
});
/**
 * @swagger
 * /admin/blog-details/{blogId}:
 *   get:
 *     summary: Get blog details
 *     description: Retrieves the details of a specific blog.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog for which details are requested
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of blog details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: string
 *                   description: URL of the image associated with the blog
 *                 caption:
 *                   type: string
 *                   description: The caption or title of the blog
 *                 location:
 *                   type: string
 *                   description: The location related to the blog
 *                 description:
 *                   type: string
 *                   description: The description of the blog
 *                 userId:
 *                   type: string
 *                   description: The ID of the user who created the blog
 */

//=========================================================Get notifications===============================================================

adminRouter.get("/notification", (req, res) => {
  res.status(200).json({
    senderName: "djfhgd",
    message: "dkfggf",
    time: "dfgfd",
  });
});

/**
 * @swagger
 * /admin/notification:
 *   get:
 *     summary: Get notifications
 *     description: Retrieves notifications for the admin.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 senderName:
 *                   type: string
 *                   description: The name of the sender of the notification
 *                 message:
 *                   type: string
 *                   description: The content of the notification message
 *                 time:
 *                   type: string
 *                   description: The timestamp of when the notification was sent
 */

//=========================================================Accept package===============================================================

adminRouter.put("/package-accept/:packageId", (req, res) => {
  res.status(200).json({
    message: "Package accepted",
  });
});

/**
 * @swagger
 * /admin/package-accept/{packageId}:
 *   put:
 *     summary: Accept package
 *     description: Accepts a package by its ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: ID of the package to be accepted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful acceptance of the package
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming the successful acceptance of the package
 */

//========================================================Get traveler details=============================================================

adminRouter.get("/traveler-details/:userId", (req, res) => {
  res.status(200).json({
    name: "fdjfg",
    address: "dfgd",
    email: "dfjjfh",
    mobile: 2543654,
  });
});

/**
 * @swagger
 * /admin/traveler-details/{userId}:
 *   get:
 *     summary: Get traveler details
 *     description: Retrieves details of a specific traveler by their user ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the traveler for which details are requested
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of traveler details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the traveler
 *                 address:
 *                   type: string
 *                   description: The address of the traveler
 *                 email:
 *                   type: string
 *                   description: The email address of the traveler
 *                 mobile:
 *                   type: number
 *                   description: The mobile number of the traveler
 */

//========================================================Get host details=============================================================

adminRouter.get("/host-details/:hostId", (req, res) => {
  res.status(200).json({
    name: "fdjfg",
    bankDetails: "dfgd",
    email: "dfjjfh",
    mobile: 2543654,
    aadhaar: 3545454,
  });
});

/**
 * @swagger
 * /admin/host-details/{hostId}:
 *   get:
 *     summary: Get host details
 *     description: Retrieves details of a specific host by their ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: ID of the host for which details are requested
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of host details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the host
 *                 bankDetails:
 *                   type: string
 *                   description: The bank details of the host
 *                 email:
 *                   type: string
 *                   description: The email address of the host
 *                 mobile:
 *                   type: number
 *                   description: The mobile number of the host
 *                 aadhaar:
 *                   type: number
 *                   description: The Aadhaar number of the host
 */

//========================================================Get traveler bookings=============================================================

adminRouter.get("/traveler-bookings/:travelerId", (req, res) => {
  res.status(200).json({
    flightBookings: {
      flightId: "dfjhf",
      departure: "dfdjfg",
      arrival: "dgjhdf",
      date: "djfhldsh",
      price: 4343,
    },
    stayBookings: {
      hotelName: "djgh",
      date: "djfhdj",
      price: 3545,
      checkIn: "dhfgdhk",
      checkOut: "fdjgj",
    },
    packageBookings: {
      packageName: "dfghd",
      destination: "dfh",
      stay: "dfg",
      food: "djfhg",
      amenities: "djfg",
      price: 1223,
      description: "dfgf",
      images: ["fdhg", "jdfg", "dfgdy"],
      date: "dfgf",
    },
  });
});

/**
 * @swagger
 * /admin/traveler-bookings/{travelerId}:
 *   get:
 *     summary: Get traveler bookings
 *     description: Retrieves bookings of a specific traveler by their ID.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: travelerId
 *         required: true
 *         description: ID of the traveler for which bookings are requested
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of traveler bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 flightBookings:
 *                   type: object
 *                   properties:
 *                     flightId:
 *                       type: string
 *                       description: The ID of the booked flight
 *                     departure:
 *                       type: string
 *                       description: The departure location for the flight
 *                     arrival:
 *                       type: string
 *                       description: The arrival location for the flight
 *                     date:
 *                       type: string
 *                       description: The date of the flight
 *                     price:
 *                       type: number
 *                       description: The price of the flight booking
 *                 stayBookings:
 *                   type: object
 *                   properties:
 *                     hotelName:
 *                       type: string
 *                       description: The name of the booked hotel
 *                     date:
 *                       type: string
 *                       description: The date of the hotel booking
 *                     price:
 *                       type: number
 *                       description: The price of the hotel booking
 *                     checkIn:
 *                       type: string
 *                       description: The check-in date for the hotel booking
 *                     checkOut:
 *                       type: string
 *                       description: The check-out date for the hotel booking
 *                 packageBookings:
 *                   type: object
 *                   properties:
 *                     packageName:
 *                       type: string
 *                       description: The name of the booked package
 *                     destination:
 *                       type: string
 *                       description: The destination of the package
 *                     stay:
 *                       type: string
 *                       description: The type of stay included in the package
 *                     food:
 *                       type: string
 *                       description: The food options included in the package
 *                     amenities:
 *                       type: string
 *                       description: The amenities provided in the package
 *                     price:
 *                       type: number
 *                       description: The price of the package booking
 *                     description:
 *                       type: string
 *                       description: A description of the package
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: An array of image URLs representing the package
 *                     date:
 *                       type: string
 *                       description: The date of the package booking
 */
//========================================================Admin Logout=============================================================

/**
 * @swagger
 * /admin/logout:
 *   post:
 *     summary: Admin Logout
 *     description: Logs out the admin user.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successfully logged out from the admin panel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful logout.
 */
adminRouter.post("/logout", (req, res) => {
  // Perform logout operation (e.g., invalidate session, clear cookies, etc.)
  res.status(200).json({
    message: "Successfully logged out from the admin panel",
  });
});

module.exports = adminRouter;
