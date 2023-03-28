const { Applicant } = require("../models");
const editProfile = async (
  { address, contactNumber, linkedinLink },
  { profilePic },
  id
) => {
  try {
    const applicant = await Applicant.findOne({ where: { id: id } });
    if (applicant) {
      applicant.profilePic =
        "uploads/profilePic/" + profilePic[0].filename || applicant.profilePic;
      applicant.address = address || applicant.address;
      applicant.contactNumber = contactNumber || applicant.contactNumber;
      applicant.linkedinLink = linkedinLink || applicant.linkedinLink;
      await applicant.save();
      return {
        data: applicant,
        message: "Profile Updated Successfully",
        status: 201,
        error: false,
      };
    } else {
      return {
        status: 404,
        data: null,
        message: "Profile Not found",
        error: true,
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};
const getProfileById = async (id) => {
  try {
    const profile = await Applicant.findOne({
      attributes: [
        "id",
        "name",
        "profilePic",
        "address",
        "contactNumber",
        "linkedinLink",
        "email",
      ],
      where: { id: id },
    });
    if (profile) {
      return {
        data: profile,
        status: 200,
        message: "Success",
        error: false,
      };
    } else {
      return {
        status: 404,
        message: "Profile Not found",
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};
module.exports = { editProfile, getProfileById };
