import mongoose from "mongoose";

export const UpdatedBy_ObjectModule = {
  updated_by: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      updated_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
};
