---
sidebar_position: 1
---

# Installing Subcoin

## Compile From Source

### Install Prerequisites

Subcoin is a Substrate-based chain, so you need to install the necessary development tools to compile the binary from source. Follow the full guide for installing the prerequisites at [Substrate Installation Guide](https://docs.substrate.io/install/).

### Clone and Build

The [subcoin-project/subcoin](https://github.com/subcoin-project/subcoin)'s main branch contains the latest Subcoin code. After installing the required packages and Rust, proceed to download the source code and compile the binary using the following command:

```bash
git clone https://github.com/subcoin-project/subcoin subcoin
cd subcoin
cargo build --profile production --bin subcoin
```

Once the compilation is complete, the Subcoin node executable subcoin will be located at `target/production/subcoin`.

## Docker

You can pull the Docker image built from the latest commit of the main branch with the following command:

```bash
docker pull ghcr.io/subcoin-project/subcoin:main
```

For a list of all available versions, refer to the [Subcoin Docker Container Versions](https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/versions).
