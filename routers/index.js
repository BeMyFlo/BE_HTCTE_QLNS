
import productRouter from "../modules/product/product.routes.js";
import  Staffrouter  from "../modules/staff/staff.route.js";  

const useRoutes = (app) => {
  app.use("/api/product", productRouter);
  app.use("/api/staff", Staffrouter);
};

export default useRoutes;
