const { Schema, model } = require(`mongoose`);


const MessageSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: `User`,
      required: true
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: `User`,
      required: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Message = model(`Message`, MessageSchema);

module.exports = Message;