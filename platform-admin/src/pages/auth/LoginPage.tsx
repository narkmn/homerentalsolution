import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Link } from "react-router";
import { Shield } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPassword("");
      // setEmail("");
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold">Sign in to your account</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Access the admin control
      </p>

      <form className="mt-7" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="admin@admin.com"
              autoComplete="username"
              className="h-11"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </Field>

          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link
                to="/auth/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="h-11"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
            />
          </Field>

          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

          <Button type="submit" className="mt-6 h-11 w-full">
            {isSubmitting ? (
              <>
                <Spinner className="size-4" />
                Logging in
              </>
            ) : (
              "Log in"
            )}
          </Button>
        </FieldGroup>
      </form>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Shield className="size-3.5" />
        Protected by SSo and 2-factor verification
      </div>
    </div>
  );
}
