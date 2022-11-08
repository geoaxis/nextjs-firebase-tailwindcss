import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { authServer } from "../lib/session";
import type { TIdTokenResult } from "../lib/authContext";
import React, { ReactNode } from "react";
import { EmailAuthCredential } from "firebase/auth";

interface AuthUser {

    provider_id?: string,
    user_id?: string,
    email?: string,
    uid?: string
  }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authUser = await authServer(ctx);

  return { props: { authUser } };
};

const Home: NextPage = ({
  user,
  authUser,
}: {
  user?: TIdTokenResult;
  authUser?: AuthUser;
  children?: ReactNode;
}) => {
  console.log(authUser);
  if (!user && !authUser ) return <h1>U need to login</h1>;
  if (!user && authUser?.provider_id ==='anonymous') return(
    <main>
      <h1>Guest: {authUser?.user_id}</h1>
      <p>No token as it s a cookie based auth</p>
      Private with SSR

    </main>);


  return (
    <>
      <Head>
        <title>Private SSR</title>
      </Head>

      <main>
        <h1>Email: {authUser?.email}</h1>
        <p>No token as it s a cookie based auth</p>
        Private with SSR
      </main>
    </>
  );
};

export default Home;
