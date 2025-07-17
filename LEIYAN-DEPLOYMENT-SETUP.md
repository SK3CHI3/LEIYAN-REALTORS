# Leiyan Realtors - cPanel Git Deployment Setup

## Server Information
- **Domain**: leiyanrealtors.co.ke
- **cPanel URL**: https://leiyanrealtors.co.ke/cpanel
- **cPanel Username**: leiyanre
- **Server**: RS8 (rs8.rcnoc.com)
- **Main IP**: 142.132.134.47

## Deployment Configuration

Your `.cpanel.yml` file has been configured with the correct deployment path:
```yaml
- export DEPLOYPATH=/home/leiyanre/public_html/
```

## Setup Steps

### 1. Access cPanel
1. Go to: https://leiyanrealtors.co.ke/cpanel
2. Login with username: `leiyanre`
3. Navigate to **Files → Git Version Control**

### 2. Create Git Repository in cPanel
1. Click **Create** new repository
2. Set repository name (e.g., `leiyan-realtors-website`)
3. Choose repository path (e.g., `/home/leiyanre/repositories/leiyan-realtors`)
4. Initialize with README if needed

### 3. Connect Your Local Repository
```bash
# Add cPanel remote (replace with actual Git URL from cPanel)
git remote add cpanel [GIT_URL_FROM_CPANEL]

# Or if this is a new repository
git remote add origin [GIT_URL_FROM_CPANEL]
```

### 4. Test Node.js Availability
First, check if Node.js is available on your hosting:

1. In cPanel, go to **Terminal** (if available)
2. Run: `node --version`
3. Run: `npm --version`

**If Node.js is NOT available:**
- Rename `.cpanel-no-nodejs.yml` to `.cpanel.yml`
- Build locally before deploying

### 5. Deploy Your Application

#### Option A: If Node.js is Available
```bash
# Build and deploy automatically
git add .
git commit -m "Initial deployment"
git push cpanel main
```

#### Option B: If Node.js is NOT Available
```bash
# Build locally first
npm run build

# Commit the dist folder
git add dist/
git add .cpanel.yml
git add .htaccess
git commit -m "Deploy built application"
git push cpanel main
```

## Deployment Process

### What Happens During Deployment:
1. **Backup**: Previous deployment is backed up
2. **Build**: Application is built (if Node.js available)
3. **Deploy**: Files are copied to `/home/leiyanre/public_html/`
4. **Permissions**: Proper file permissions are set
5. **Routing**: `.htaccess` enables React Router

### Files Deployed:
- All files from `dist/` directory
- `.htaccess` for SPA routing
- Optimized CSS, JS, and assets

## Verification Steps

### 1. Check Deployment Status
- In cPanel Git interface, verify deployment completed successfully
- Check for any error messages

### 2. Test Website
- Visit: https://leiyanrealtors.co.ke
- Test navigation between pages
- Check browser console for errors
- Verify all images and assets load

### 3. Check File Structure
In cPanel File Manager (`/home/leiyanre/public_html/`):
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── .htaccess
└── [other static files]
```

## Troubleshooting

### Domain Not Accessible
- DNS propagation can take 24-48 hours
- Check nameservers are correctly set:
  - rs81.rcnoc.com (142.132.134.47)
  - rs82.rcnoc.com (142.132.134.14)
  - rs71.rcnoc.com (142.132.134.47)
  - rs72.rcnoc.com (142.132.134.14)

### Build Errors
- If Node.js not available, use pre-built option
- Check cPanel error logs
- Verify all dependencies are in package.json

### Routing Issues
- Ensure `.htaccess` is deployed
- Check if mod_rewrite is enabled in cPanel

## Security Notes
- Never commit `.env` files with sensitive data
- The `.htaccess` includes security headers
- Regular backups are created automatically

## Next Steps
1. Set up SSL certificate in cPanel
2. Configure email accounts if needed
3. Set up regular deployment workflow
4. Monitor website performance

## Support
- Contact your hosting provider (rcnoc.com) for server-specific issues
- Check cPanel documentation for Git deployment features
