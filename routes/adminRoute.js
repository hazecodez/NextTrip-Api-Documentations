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
//==========================================================Get traveler booking details====================================================
/**
 * @swagger
 * /admin/traveler-bookings/{travelerId}:
 *   get:
 *     summary: Get Traveler Booking Details
 *     description: Retrieves the booking details of a specific traveler, including package details and traveler list.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: travelerId
 *         required: true
 *         description: The ID of the traveler.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of traveler booking details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 packageId:
 *                   type: string
 *                   description: The ID of the package booked by the traveler.
 *                 travelers:
 *                   type: array
 *                   description: List of travelers associated with the booking.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the traveler.
 *                       dateOfBirth:
 *                         type: string
 *                         description: The dob of the traveler.
 *                       gender:
 *                         type: string
 *                         description: The gender of the traveler.
 *                       
 *                 status:
 *                   type: string
 *                   description: The status of the booking.
 *                 price:
 *                   type: number
 *                   description: The total price of the booking.
 *       404:
 *         description: Traveler booking details not found
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
 *                 price:
 *                   type: number
 *                   description: The amount of the package
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
 *                 itinerary:
 *                   type: array
 *                   description: A itineraries of the package
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: An array of image URLs representing the package
 */
//==========================================================Block Package================================================================
/**
 * @swagger
 * /admin/package-block/{packageId}:
 *   put:
 *     summary: Block Package
 *     description: Block a package by admin.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: packageId
 *         required: true
 *         description: The ID of the package to block.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Package blocked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful package blocking.
 *       404:
 *         description: Package not found
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
 *                 likes:
 *                   type: number
 *                   description: Likes count of the blog.
 *                 comments:
 *                   type: array
 *                   description: Array of comments of the blog.
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

//========================================================Get host list=============================================================
/**
 * @swagger
 * /admin/host-list:
 *   get:
 *     summary: Get Host List
 *     description: Retrieves a list of hosts with their details.
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: Successful retrieval of host list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the host.
 *                   mobile:
 *                     type: string
 *                     description: The mobile number of the host.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: The email address of the host.
 *       404:
 *         description: No hosts found
 */
adminRouter.get('/host-list', (req, res) => {
  // Your logic to retrieve the list of hosts
  const hosts = [
    { name: "Host 1", mobile: "1234567890", email: "host1@example.com" },
    { name: "Host 2", mobile: "9876543210", email: "host2@example.com" }
    // Add more host objects as needed
  ];

  if (hosts.length > 0) {
    res.status(200).json(hosts);
  } else {
    res.status(404).json({ message: "No hosts found" });
  }
});


//========================================================Get host details=============================================================

adminRouter.get("/host-details/:hostId", (req, res) => {
  res.status(200).json({
    name: "fdjfg",
    email: "dfjjfh",
    mobile: 2543654,
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
 *                   type: array
 *                   description: The bank details of the host
 *                 email:
 *                   type: string
 *                   description: The email address of the host
 *                 mobile:
 *                   type: number
 *                   description: The mobile number of the host
 */
//========================================================Get Host Package Lists=============================================================

/**
 * @swagger
 * /admin/host-list/packages/{hostId}:
 *   get:
 *     summary: Get Host Package Lists
 *     description: Retrieves a list of packages offered by a specific host.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: The ID of the host.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of host package lists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   packageId:
 *                     type: string
 *                     description: The ID of the package.
 *                   packageName:
 *                     type: string
 *                     description: The name of the package.
 *                   price:
 *                     type: number
 *                     description: The price of the package.
 *       404:
 *         description: No packages found for the host
 */
adminRouter.get('/host/:hostId/packages', (req, res) => {
  const { hostId } = req.params;
  
  const packages = [
    { packageId: "1", packageName: "Package 1", price: 100 },
    { packageId: "2", packageName: "Package 2", price: 200 }
    
  ];

  if (packages.length > 0) {
    res.status(200).json(packages);
  } else {
    res.status(404).json({ message: "No packages found for the host" });
  }
});

//======================================================== Block host by admin=============================================================
/**
 * @swagger
 * /admin/block-host/{hostId}:
 *   put:
 *     summary: Block Host
 *     description: Block a host by admin.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: The ID of the host to block.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Host blocked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful host blocking.
 *       404:
 *         description: Host not found
 */



//======================================================== verify host by admin=============================================================

/**
 * @swagger
 * /admin/host-verify/{hostId}:
 *   put:
 *     summary: Verify Host
 *     description: Verify a host by admin.
 *     tags: [Admin API]
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: The ID of the host to verify.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               verificationStatus:
 *                 type: boolean
 *                 description: The verification status (true for verified, false for not verified).
 *     responses:
 *       200:
 *         description: Host verification successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming successful host verification.
 *       404:
 *         description: Host not found
 */
adminRouter.put('/host/:hostId/verify', (req, res) => {
  const { hostId } = req.params;
  const { verificationStatus } = req.body;

  // Your logic to verify the host by admin
  // Example: Update host's verification status in the database
  
  if (verificationStatus !== undefined) {
    if (verificationStatus) {
      res.status(200).json({ message: `Host ${hostId} verified successfully` });
    } else {
      res.status(200).json({ message: `Host ${hostId} verification rejected` });
    }
  } else {
    res.status(400).json({ message: "Invalid verification status" });
  }
});


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
