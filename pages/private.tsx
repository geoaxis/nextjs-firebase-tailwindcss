import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAuth } from "../lib/authContext";

const Home: NextPage = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!user) return <h1>You need to login to see this page</h1>;

  console.log(user)
  if (user && user.signInProvider ==='anonymous') return(
  <main>
      <h1>Guest: {user.claims.user_id}</h1>
      <p>token: {user.token}</p>
      Private 

    </main>);

  return (
    <>
      <Head>
        {" "}
        <title>Private</title>
      </Head>

      <main>
        <h1>Email: {user?.claims.email}</h1>
        <p>token: {user.token}</p>
        Private
      </main>
    </>
  );
};

export default Home;
