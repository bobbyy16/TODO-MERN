const { z } = require("zod");

const TodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["completed", "incomplete"]).default("incomplete"),
});

module.exports = TodoSchema;
