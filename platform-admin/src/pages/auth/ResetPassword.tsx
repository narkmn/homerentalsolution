import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Link, useLocation } from "react-router";
import { CheckCircle2, Shield } from "lucide-react";
import { useState } from "react";
import PasswordInput from "@/components/PasswordInput";

const ResetPassword = () => {
  // const dispatch = useAppDispatch();

  const location = useLocation();
  const state = location.state as {
    email?: string;
    resetToken?: string;
  } | null;

  const email = state.email;
  const resetToken = state.resetToken;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const misMatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (misMatch) return;
    // if (!resetToken) {
    //   setError("Something went wrong");
    // }

    // try {
    setTimeout(() => {
      setIsSubmitting(false);
      setPassword("");
      setConfirmPassword("");
      setIsDone(true);
      // setEmail("");
    }, 2000);
    // } catch {
    // setError(typeof error === "string" ? error : "Could not reset password");
    // } finally {
    // setIsSubmitting(false);
    // }
  };
  if (isDone) {
    return (
      <div className="w-full max-w-sm flex flex-col justify-center items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent">
          <CheckCircle2 className="size-6 text-primary" />
        </div>
        <h2 className="mt-4 text-2xl font-bold">Password Updated</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your password has been reset. You can now sign in with your new
          password.
        </p>
        <button className="mt-10 h-11 w-full">
          <Link to="{/auth/login}">Back to login</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold">Set a new Password</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {email ? (
          <>
            New Password for{" "}
            <span className="font-medium text-foreground">{email}</span>
          </>
        ) : (
          "Choose a password for your account"
        )}
      </p>

      <form className="mt-7" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <PasswordInput
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              className="h-11"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
            />
          </Field>
          <Field>
            <PasswordInput
              id="confirm-password"
              placeholder="Enter your password"
              autoComplete="confirm-password"
              className="h-11"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isSubmitting}
            />
            {misMatch && <FieldError>Passwords do not match</FieldError>}
          </Field>

          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

          <Button type="submit" className="mt-6 h-11 w-full">
            {isSubmitting ? (
              <>
                <Spinner className="size-4" />
                Updating password
              </>
            ) : (
              "Reset password"
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ResetPassword;
