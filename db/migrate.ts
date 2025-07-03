import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./config";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "db/migration",
    });
    console.log("Migration completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
};

main();
