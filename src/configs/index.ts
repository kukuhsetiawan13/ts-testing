// config.ts
import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.coerce.number().default(3000),
  //   MONGODB_URL: z.string().min(1, "MongoDB URL is required"),
  //   JWT_SECRET: z.string().min(1, "JWT secret key is required"),
  //   JWT_ACCESS_EXPIRATION_MINUTES: z.coerce.number().default(30),
  //   JWT_REFRESH_EXPIRATION_DAYS: z.coerce.number().default(30),
  //   JWT_RESET_PASSWORD_EXPIRATION_MINUTES: z.coerce.number().default(10),
  //   JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: z.coerce.number().default(10),
  //   SMTP_HOST: z.string().optional(),
  //   SMTP_PORT: z.coerce.number().optional(),
  //   SMTP_USERNAME: z.string().optional(),
  //   SMTP_PASSWORD: z.string().optional(),
  //   EMAIL_FROM: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "❌ Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error("Config validation error");
}

const env = parsedEnv.data;

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  //   mongoose: {
  //     url: env.MONGODB_URL + (env.NODE_ENV === "test" ? "-test" : ""),
  //     options: {
  //       useCreateIndex: true,
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     },
  //   },
  //   jwt: {
  //     secret: env.JWT_SECRET,
  //     accessExpirationMinutes: env.JWT_ACCESS_EXPIRATION_MINUTES,
  //     refreshExpirationDays: env.JWT_REFRESH_EXPIRATION_DAYS,
  //     resetPasswordExpirationMinutes: env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
  //     verifyEmailExpirationMinutes: env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  //   },
  //   email: {
  //     smtp: {
  //       host: env.SMTP_HOST,
  //       port: env.SMTP_PORT,
  //       auth: {
  //         user: env.SMTP_USERNAME,
  //         pass: env.SMTP_PASSWORD,
  //       },
  //     },
  //     from: env.EMAIL_FROM,
  //   },
};

export default config;
