import type { NextPage } from "next";
import Head from "next/head";
import { getAuth, signInAnonymously } from "firebase/auth";


const Home: NextPage = () => {


const auth = getAuth();
console.log(auth);

if(!auth.currentUser) {
signInAnonymously(auth)
  .then(() => {
    console.log("signed in anonymously")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("could not sign in")
  });
}
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>Sweet home</main>
    </>
  );
};

export default Home;
