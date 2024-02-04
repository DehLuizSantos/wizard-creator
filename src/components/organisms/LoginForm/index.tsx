import { createClient } from "@/src/utils/superbase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginForm({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(searchParams);

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/?message=Credenciais invalidas");
    }

    return redirect("/admin");
  };

  if (user) {
    return redirect("/admin");
  }

  return (
    <form
      className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      action={signIn}
    >
      <h1 className="text-2xl text-lime-400	mb-5 font-bold">Wizard Creator</h1>

      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        id="senha"
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
      />
      <label className="text-md" htmlFor="password">
        Password
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <button className="bg-lime-700 rounded-md px-4 py-2 text-foreground mb-2">
        Logar
      </button>
      {searchParams?.message && (
        <p className="mt-4 p-3 text-sm bg-foreground/10 text-red-600 text-center rounded-md">
          {searchParams.message}
        </p>
      )}

      <p className="text-xs">Use o login: exemplo@exemplo.com.br</p>
      <p className="text-xs">Use a senha : 123456</p>
    </form>
  );
}
