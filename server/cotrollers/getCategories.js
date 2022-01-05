require("../models/database");
const Category = require("../models/Catagory");
const Records = require("../models/Records");
const ObjectId = require("mongodb").ObjectId;

exports.getCategory = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.log("mistake in getCategories");
  }
};

exports.getRecords = async () => {
  try {
    const records = await Records.find({}).sort({ _id: -1 });
    return records;
  } catch (error) {
    console.log("mistake in getRecords");
  }
};

exports.getRecordsbyId = async (paramId) => {
  try {
    const records = await Records.find({
      category: ObjectId(paramId),
    });
    return records;
  } catch (error) {
    console.log("mistake in getRecordsbyId");
  }
};
