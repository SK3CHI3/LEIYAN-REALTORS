# cPanel Git Deployment Guide

This guide explains how to deploy your Vite React application using cPanel's Git deployment feature.

## Prerequisites

1. **cPanel account with Git support**
2. **Repository must meet cPanel requirements:**
   - Valid `.cpanel.yml` file in root directory ✅
   - One or more local/remote branches ✅
   - Clean working tree ✅

## Setup Instructions

### Step 1: Update .cpanel.yml

Replace `yourusername` in `.cpanel.yml` with your actual cPanel username:

```yaml
- export DEPLOYPATH=/home/yourusername/public_html/
```

### Step 2: Choose Deployment Method

#### Option A: Server-side Build (Recommended)
Use the current `.cpanel.yml` if your cPanel hosting supports Node.js.

**Pros:**
- Automatic building on deployment
- Always uses latest dependencies
- No need to commit build files

**Cons:**
- Requires Node.js on server
- Longer deployment time

#### Option B: Pre-built Deployment
Use `.cpanel-no-nodejs.yml` if your hosting doesn't support Node.js.

**Setup for Option B:**
1. Rename `.cpanel-no-nodejs.yml` to `.cpanel.yml`
2. Build locally: `npm run build`
3. Commit the `dist` folder to your repository
4. Deploy

**Pros:**
- Works on any hosting
- Faster deployment
- No server dependencies

**Cons:**
- Must remember to build before committing
- Larger repository size

### Step 3: Configure Git Repository in cPanel

1. Log into cPanel
2. Go to **Files → Git Version Control**
3. Click **Create** or **Clone** repository
4. Set up your repository URL and credentials
5. Ensure the repository path points to your project

### Step 4: Deploy

#### Automatic Deployment (Push)
```bash
git add .
git commit -m "Deploy changes"
git push origin main
```
Changes will deploy automatically when pushed to the cPanel-managed repository.

#### Manual Deployment (Pull)
1. Push changes to your remote repository
2. In cPanel Git interface, click **Update from Remote**
3. Click **Deploy HEAD Commit**

## Important Notes

### Security
- Never commit sensitive files (`.env`, private keys)
- The `.htaccess` file includes security headers
- Review deployed files to ensure no sensitive data is exposed

### Performance
- Built files are optimized for production
- Static assets are cached for 1 year
- Gzip compression is enabled

### Troubleshooting

#### Build Fails
- Check if Node.js is available: `node --version`
- Verify npm dependencies: `npm ci`
- Check build logs in cPanel

#### Files Not Deploying
- Ensure `.cpanel.yml` syntax is correct
- Check file permissions
- Verify deployment path exists

#### SPA Routing Issues
- Ensure `.htaccess` is deployed
- Check if mod_rewrite is enabled
- Verify RewriteEngine is On

### File Structure After Deployment

```
public_html/
├── index.html          # Main app entry point
├── assets/            # CSS, JS, and other assets
│   ├── index-[hash].css
│   └── index-[hash].js
├── .htaccess          # Routing and security rules
└── [other static files]
```

## Testing Deployment

1. Visit your domain after deployment
2. Test navigation (React Router should work)
3. Check browser console for errors
4. Verify all assets load correctly

## Backup Strategy

The deployment script automatically creates backups:
- Location: `public_html/backup_YYYYMMDD_HHMMSS/`
- Contains previous deployment files
- Useful for quick rollbacks

## Support

If you encounter issues:
1. Check cPanel error logs
2. Verify Git repository status
3. Test build process locally
4. Contact your hosting provider for Node.js support questions
