import { AuthForm } from '@/components/auth-form';

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-3xl font-bold">Sign up</h1>
      <AuthForm mode="signup" />
    </div>
  );
}
