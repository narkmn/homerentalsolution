import { Routes, Route } from "react-router";
import AuthLayouts from "@/layouts/AuthLayouts";
import LoginPage from "@/pages/auth/LoginPage";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import VerifyForgotOtpPage from "@/pages/auth/VerifyForgotOtp";
import ResetPassword from "@/pages/auth/ResetPassword";

export default function Routers() {
  return (
    <Routes>
      {/* {Authentication} */}
      <Route path="/auth" element={<AuthLayouts />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password/otp" element={<VerifyForgotOtpPage />} />
        <Route
          path="forgot-password/reset-password"
          element={<ResetPassword />}
        />
      </Route>

      {/* {Dashboards} */}
    </Routes>
  );
}
