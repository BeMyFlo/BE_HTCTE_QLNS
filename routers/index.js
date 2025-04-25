// import userRouter from "../modules/user/user.routes.js";
import productRouter from "../modules/product/product.routes.js";
import AllowanceRouter from "../modules/allowance/allowance.routes.js";
import DepartmentRouter from "../modules/department/department.routes.js";
import PositionRouter from "../modules/position/position.routes.js";

const useRoutes = (app) => {
  app.use("/api/product", productRouter);
  app.use("/api/v1/allowance", AllowanceRouter);
  app.use("/api/v1/department", DepartmentRouter);
  app.use("/api/v1/position", PositionRouter);
};

export default useRoutes;
