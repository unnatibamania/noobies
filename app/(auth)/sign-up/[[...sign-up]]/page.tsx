import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid grid-cols-2 border-5 border-red-500 h-screen w-screen">
      <div className="bg-slate-950 w-full">Hi</div>
      <div className="flex items-center justify-center">
        <SignUp path="/sign-up" />
        Sheep
      </div>
    </div>
  );
}

