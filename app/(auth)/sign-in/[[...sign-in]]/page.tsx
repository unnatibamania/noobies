import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="bg-slate-950 w-full">Hi</div>
      <div className="flex items-center justify-center">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}

