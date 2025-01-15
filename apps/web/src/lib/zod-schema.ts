import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

enum ContentType {
  Link = "link",
  Text = "text",
}

export const addContentSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  type: z.nativeEnum(ContentType),
  content: z
    .string()
    .refine(
      (value) =>
        value === "" ||
        /(?:https?:\/\/)(?:www\.)?(?:youtube\.com|youtu\.be|twitter\.com|...)(?:\/[^\s]*)?/,
    ),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  isPublic: z.boolean({
    invalid_type_error: "Invalid type",
  }),
});
