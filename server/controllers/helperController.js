require("../models/database");
const Category = require("../models/Catagory");
const Records = require("../models/Records");
const ObjectId = require("mongodb").ObjectId;

/**
 * Get
 * get all categories from DB
 */
exports.getCategory = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get
 * get all records from DB
 */
exports.getRecords = async () => {
  try {
    const records = await Records.find({}).sort({ _id: -1 });
    return records;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get
 * get all records from DB with the same category Id
 */
exports.getRecordsbyId = async (paramId) => {
  try {
    const records = await Records.find({
      categoryId: ObjectId(paramId),
    });
    return records;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get
 * get a single record from the form by its ID
 */
exports.getRecordbyId = async (paramId) => {
  try {
    const record = await Records.findOne({
      _id: ObjectId(paramId),
    });
    return record;
  } catch (error) {
    console.log("mistake in getRecordsbyId");
  }
};

/**
 * Get
 * get selected category by id and return the category
 */
exports.getSelectedCategory = async (paramId) => {
  try {
    const category = await Category.findOne({
      _id: ObjectId(paramId),
    });
    return category;
  } catch (error) {
    error;
  }
};

/**
 * Put
 * update record
 */
exports.updateItem = async (paramId, newRecord) => {
  try {
    const category = await Category.findOne({
      _id: ObjectId(newRecord.category),
    });
    await Records.findByIdAndUpdate(ObjectId(paramId), { $set: newRecord });
  } catch (error) {
    console.log(error);
  }
};

/**
 * delete
 * delete record
 */
exports.delete = async (paramId) => {
  try {
    await Records.findByIdAndDelete(paramId);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Put
 * update category
 */
exports.updateCategory = async (paramId, newRecord) => {
  try {
    await Category.findByIdAndUpdate(ObjectId(paramId), { $set: newRecord });
  } catch (error) {
    console.log(error);
  }
};

/**
 * delete
 * delete category
 */
exports.deleteCategory = async (paramId) => {
  try {
    await Category.findByIdAndDelete(paramId);
  } catch (error) {
    console.log(error);
  }
};
