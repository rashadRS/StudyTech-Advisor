import { AuthForm } from '@/components/auth-form';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <AuthForm mode="login" />
    </div>
  );
}
