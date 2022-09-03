import { app } from "./app";

const port: string | number = process.env.PORT || 4000;
const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`); // temp db connection
    });
  } catch (error) {
    console.log(`Server error: ${error}`);
  }
};
startServer();
