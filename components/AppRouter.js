import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const AppRouter = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.replace("/signin");
    }
  }, [router.pathname]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/signin" ? "active" : ""}>
            Sign In
          </a>
        </Link>
        <Link href="/signin">
          <a className={router.pathname === "/signin" ? "active" : ""}>
            Sign In
          </a>
        </Link>
        <Link href="/login">
          <a className={router.pathname === "/login" ? "active" : ""}>Login</a>
        </Link>
        <Link href="/articles">
          <a className={router.pathname === "/articles" ? "active" : ""}>
            Articles
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default AppRouter;
