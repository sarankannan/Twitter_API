import pageObjectId from "../support/pageObjects/userID.js";
import pageObjectUserName from "../support/pageObjects/userName.js";
import pageObjectUser from "../support/pageObjects/authenticatedUser.js";
import config from "../support/config";

const {
  ID1,ID2,ID3,ID4,ID5,IDS,InvalidID,} = config.ID;
  const {
  UserName1,UserName2,UserName3,UserName4,UserName5,UserNames,InvalidUserName,} = config.UserName;


describe("test scenario", function () {
 const idObjects = new pageObjectId();
 const userNameObjects = new pageObjectUserName();
 const userObjects = new pageObjectUser();
 const baseUrl= "https://api.twitter.com/2/users/"

  it("Single user by ID - 200 Success - Request field for user", function () {
    idObjects.getUserByID1(baseUrl,ID1,UserName1);
  });

  it("Single user by ID - 200 Success - User not found error", function () {
    idObjects.getUserByID2(baseUrl,ID5);
  });

  it("Single user by ID - 400 Bad Request - Invalid query parameter", function () {
    idObjects.getUserByID3(baseUrl,InvalidID);
  });

  it("Multiple users by ID - 200 Success - Request field for user", function () {
    idObjects.getUsersByID(baseUrl,ID1,ID2,UserName1,UserName2);
  });

  it("Multiple users by ID - 400 Bad Request - Too many users", function () {
    idObjects.getUsersByIDS (baseUrl,IDS);
  });

  it("Single user by username - 200 Success - Request field for user", function () {
    userNameObjects.getUserByUserName1(baseUrl,UserName1,ID1);
 });

 it("Single user by username - 200 Success - User not found error", function () {
  userNameObjects.getUserByUserName2(baseUrl,UserName5);
});

it("Single user by username - 400 Bad Request - Invalid query parameter", function () {
  userNameObjects.getUserByUserName3(baseUrl,InvalidUserName);
});

it("Multiple users by username - 200 Success - Request field for user", function () {
  userNameObjects.getUsersByUserName(baseUrl,UserName1,UserName2,ID1,ID2);
});

it("Multiple users by username - 400 Bad Request - Too many users", function () {
  userNameObjects.getUsersByUserNames(baseUrl,UserNames);
});

it("Authenticated User - 200 Success - Requested User Fields", function () {
  userObjects.getAuthenticatedUsers1(baseUrl,UserName1,UserName2,UserName3,UserName4,ID1,ID2,ID3,ID4);
});

it("Authenticated User - 200 Success - User not found error", function () {
  userObjects.getAuthenticatedUsers2(baseUrl,UserName1,UserName2,UserName3,UserName4,UserName5,ID1,ID2,ID3,ID4);
});

it("Authenticated User - 400 Bad Request - Too many users", function () {
  userObjects.getAuthenticatedUsers(baseUrl,UserNames);
});
});
