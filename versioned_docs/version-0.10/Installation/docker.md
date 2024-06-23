---
sidebar_position: 2
---

# Getting started

:::info

It is recommended that you have some sort of Linux, Docker and MariaDB experience before installing this.
This guide requires you to already have a working Pterodactyl installation.

:::

:::warning

Warning, The dashboard is currently in pre-release and may contain some bugs. Use This dashboard at your own risk.

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Dependencies

- [Docker for Linux](https://docs.docker.com/engine/install/) + Docker Compose (which automatically gets installed, if you follow those docs)

## Running as commandline command:

```bash
docker run -p 80:80 -p 443:443 -v /path/to/website_files:/var/www/html ghcr.io/ctrlpanel-gg/panel:latest
```

## Download Files

The first step in this process is to create the folder where the panel will live and then move ourselves into that
newly created folder. Below is an example of how to perform this operation.

```bash
mkdir ~/ctrlpanel && cd ~/ctrlpanel
```

1. Get the docker compose file `curl -L -o compose.yaml https://raw.githubusercontent.com/Ctrlpanel-gg/panel/blob/main/docker/standalone/compose.yaml`.
2. Modify the `compose.yaml` to your needs. (Update users and passwords)
3. Create the env file in the same directory as the compose file `touch env_file`.
4. Start the Panel with `docker compose up -d`
5. Open the installer at `http://<server-ip-or-domain>/install`

### Adding SSL

There are many ways to add SSL to your site. A simple solution is to use Cert bot from Let’s Encrypt. Cert bot will automatically install the certificates for you and keep your SSL certifications up to date!

```bash
sudo apt update
#install certbot for nginx
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
#install certificates
sudo certbot --nginx -d yourdomain.com
```

### Running the installer

#### Navigate to `https://yourdomain.com/install` to run the Web-Installer and follow the steps.

If you encounter problems with the email setup, you can use the skip button and set it up later.

Once the Web-Installer has been completed, you will be navigated to the login-page of your installation.<br />
