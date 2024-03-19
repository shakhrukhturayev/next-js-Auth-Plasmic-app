// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/bobre_kurwa/PlasmicGlobalContextsProvider";
import { PlasmicLogin } from "../components/plasmic/bobre_kurwa/PlasmicLogin";
import { useRouter } from "next/router";

function Login() {
 
  
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicLogin />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Login;