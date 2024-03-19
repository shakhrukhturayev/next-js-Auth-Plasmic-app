// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hLRChXZFR2f6LnncSeLHTY
// Component: P4GR2Muaa09t
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import AuthComponent from "../../AuthComponent"; // plasmic-import: UWArgLRpKcQf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: hLRChXZFR2f6LnncSeLHTY/projectcss
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: P4GR2Muaa09t/css

createPlasmicElementProxy;

export const PlasmicSignUp__VariantProps = new Array();

export const PlasmicSignUp__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignUp__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <AuthComponent
            data-plasmic-name={"authComponent"}
            data-plasmic-override={overrides.authComponent}
            className={classNames("__wab_instance", sty.authComponent)}
            isSignUpFlow={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "authComponent"],
  authComponent: ["authComponent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    authComponent: makeNodeComponent("authComponent"),
    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */
