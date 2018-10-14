import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match"
      }
    ]
  },
  {
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" }
  }
);

export default mongoose.model("User", userSchema);
