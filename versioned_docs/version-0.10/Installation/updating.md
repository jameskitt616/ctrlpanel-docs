---
sidebar_position: 5
---

# Updating

:::caution
This guide is for updates 0.9.x -> 0.10.0 (Check the Version dropdown at the top right)
:::

## Docker

### Get into the correct directory

likely one of these two
```
cd ~/ctrlpanel
cd ~/controlpanel
```

### Pull the new Docker images, start and cleanup

```bash
docker compose pull && docker compose up -d && docker image prune -f
```

## Bare Metal

### Use the correct directory

likely one of these two
```
cd /var/www/ctrlpanel
cd /var/www/controlpanel
```

### Enable Maintenance Mode

```bash
sudo php artisan down
```

### Pulling the New Files

```bash
sudo git stash
sudo git pull
# Check Correct directory
sudo chmod -R 755 /var/www/ctrlpanel
# or
sudo chmod -R 755 /var/www/controlpanel
```

### Update Dependencies

```bash
sudo composer install --no-dev --optimize-autoloader
```

### Updating the Database

```bash
sudo php artisan migrate --seed --force
```

### Clear Compiled Template Cache

```bash
sudo php artisan view:clear
sudo php artisan config:clear
```

### Set Permissions

```bash
# If using NGINX or Apache (not on CentOS):
# Check Correct directory
sudo chown -R www-data:www-data /var/www/ctrlpanel/
# or
sudo chown -R www-data:www-data /var/www/controlpanel/

# If using NGINX on CentOS:
# Check Correct directory
sudo chown -R nginx:nginx /var/www/ctrlpanel/
# or
sudo chown -R nginx:nginx /var/www/controlpanel/

# If using Apache on CentOS
# Check Correct directory
sudo chown -R apache:apache /var/www/ctrlpanel/
# or
sudo chown -R apache:apache /var/www/controlpanel/
```

### Restarting Queue Workers

After every update, you should restart the queue worker to ensure that the new code is loaded in and used.

```bash
sudo php artisan queue:restart
```

### Disable Maintenance Mode

```bash
sudo php artisan up
```

## Disclaimer

Warning, The dashboard is currently in pre-release and may contain some bugs 🐛 <br/>
Use This dashboard at your own risk.

If you notice any bugs or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/ControlPanel-gg/dashboard/issues/new/choose)<br /> **for any major security risk, contact** _1Day2Die#6718_
