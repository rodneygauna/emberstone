import mongoose from "mongoose";

export const CreatedBy_ObjectModule = {
  created_by: {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
};
