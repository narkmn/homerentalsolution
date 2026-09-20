import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      navigate("/auth/forgot-password/otp", { state: { email: email } });
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm">
      <Link
        to="/auth/login"
        aria-label="Back to sign in"
        className="mb-4 inline-flex text-foreground items-center gap-2"
      >
        <ArrowLeft className="size-5" />
        Back
      </Link>
      <h2 className="text-2xl font-bold">Forgot Password</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        We will email a 6 digit code to your email address.
      </p>

      <form className="mt-6" onSubmit={handleSubmit}>
        <Field>
          <FieldLabel>Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="[EMAIL_ADDRESS]"
            autoComplete="username"
            className="h-11"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </Field>

        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

        <Button type="submit" className="mt-6 h-11 w-full">
          {isSubmitting ? (
            <>
              <Spinner className="size-4" />
              Sending OTP
            </>
          ) : (
            "Send OTP"
          )}
        </Button>
      </form>
    </div>
  );
}
