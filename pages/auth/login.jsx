import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
export function getServerSideProps(context) {
  const { response_url } = context.query;
  return {
    props: {
      response_url,
    },
  };
  // return {
  //   redirect: {
  //     destination: response_url,
  //   },
  // };
}

const login = ({ response_url }) => {
  const router = useRouter();
  async function submitLogin(e) {
    const resp = await axios.post("/api/auth/login", {
      response_url,
    });
    if (resp.data?.response_url) {
      alert("selamat datang");
      router.replace(resp.data.response_url);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <input
          type="text"
          readOnly
          name="response_url"
          defaultValue={response_url}
        />
        <button type="submit">Link this service to Google</button>
      </form>
    </div>
  );
};

export default login;
