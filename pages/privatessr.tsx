import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { authServer } from "../lib/session";
import type { TIdTokenResult } from "../lib/authContext";
import React, { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await authServer(ctx);

  return { props: { user } };
};

const Home: NextPage = ({
  user,
}: {
  user?: TIdTokenResult;
  children?: ReactNode;
}) => {
  if (!user) return <h1>U need to login</h1>;
  if (user && user.provider_id ==='anonymous') return(
    <main>
      <h1>Guest: {user.user_id}</h1>
      <p>No token as it s a cookie based auth</p>
      Private with SSR

    </main>);

console.log(user)

  return (
    <>
      <Head>
        <title>Private SSR</title>
      </Head>

      <main>
        <h1>Email: {user?.email}</h1>
        <p>No token as it s a cookie based auth</p>
        Private with SSR
      </main>
    </>
  );
};

export default Home;
