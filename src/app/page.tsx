import LoginForm from "../components/organisms/LoginForm";

export default function Login({
  searchParams = undefined,
}: {
  searchParams?: { message: string | undefined };
}) {
  return (
    <div className="h-screen w-72 flex justify-center flex-col m-auto items-center">
      <LoginForm searchParams={searchParams} />
    </div>
  );
}
