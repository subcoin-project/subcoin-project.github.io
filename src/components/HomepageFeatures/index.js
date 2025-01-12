import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Written in Rust",
    Svg: require("@site/static/img/rust.svg").default,
    description: (
      <>
        As a high-performance system programming language, Rust is well-regarded
        for its safety and concurrency. Its widespread adoption in the
        blockchain space makes it an excellent choice for fostering new
        contributors to the Bitcoin ecosystem.
      </>
    ),
  },
  {
    title: "Built on Polkadot SDK",
    Svg: require("@site/static/img/polkadot.svg").default,
    description: (
      <>
        Leveraging the scalability and flexibility of the industry-leading{" "}
        <a href="https://github.com/paritytech/polkadot-sdk" target="_blank">
          Polkadot-SDK
        </a>{" "}
        (formerly known as Substrate), Subcoin has the potential to evolve into
        a robust and feature-rich Bitcoin software with production-level
        infrastructure.
      </>
    ),
  },
  {
    title: "Decentralized Fast Sync",
    Svg: require("@site/static/img/blockchain.svg").default,
    description: (
      <>
        Subcoin node enables new Bitcoin participants to quickly sync the latest
        Bitcoin state in a decentralized manner, achieving the fast sync
        functionality of Bitcoin Core without depending on a trusted snapshot
        provider.
      </>
    ),
  },
  {
    title: "Trustless UTXO Snapshot Provider for Bitcoin Core",
    Svg: require("@site/static/img/snapshot_provider.svg").default,
    description: (
      <>
        Subcoin provides a dedicated tool{" "}
        <Link to="/docs/basics/download-UTXO-snapshot"> Snapcake </Link> that
        serves as a trustless UTXO snapshot provider for Bitcoin Core without
        running a Subcoin node, downloading the Bitcoin state from the Subcoin
        P2P network and generating a Bitcoin Core-compatible UTXO snapshot which
        can be directly imported into Bitcoin Core.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
