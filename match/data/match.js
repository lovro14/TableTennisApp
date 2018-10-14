import mongoose from "mongoose";

const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    username1: {
      type: String,
      required: true
    },
    username2: {
      type: String,
      required: true
    },
    sets: [
      {
        user1: {
          type: Number,
          required: true
        },
        user2: {
          type: Number,
          required: true
        }
      }
    ],
    winner: {
      type: String,
      required: true
    }
  },
  {
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" }
  }
);

export default mongoose.model("Match", matchSchema);
