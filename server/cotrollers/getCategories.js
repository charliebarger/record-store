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
      categoryId: ObjectId(paramId),
    });
    return records;
  } catch (error) {
    console.log("mistake in getRecordsbyId");
  }
};

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

exports.getSelectedCategory = async (paramId) => {
  try {
    console.log(paramId);
    const category = await Category.findOne({
      _id: ObjectId(paramId),
    });
    return category;
  } catch (error) {
    console.log("mistake in getRecordsbyId");
  }
};

exports.updateItem = async (paramId, newRecord) => {
  try {
    const category = await Category.findOne({
      _id: ObjectId(newRecord.category),
    });
    console.log(category);
    await Records.findByIdAndUpdate(ObjectId(paramId), { $set: newRecord });
  } catch (error) {
    console.log("mistake in updateItem");
  }
};

exports.delete = async (paramId) => {
  try {
    console.log(paramId);
    await Records.findByIdAndDelete(paramId);
  } catch (error) {
    console.log("mistake in deleteItem");
  }
};

exports.updateCategory = async (paramId, newRecord) => {
  try {
    await Category.findByIdAndUpdate(ObjectId(paramId), { $set: newRecord });
  } catch (error) {
    console.log("mistake in updateItem");
  }
};

exports.deleteCategory = async (paramId) => {
  try {
    await Category.findByIdAndDelete(paramId);
  } catch (error) {
    console.log("mistake in deleteItem");
  }
};
