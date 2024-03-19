
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicHomepage } from "../components/plasmic/bobre_kurwa/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
 
  return (
    <PageParamsProvider__
      route={useRouter()?.pathname}
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </PageParamsProvider__>
  );
}

export default Homepage;
