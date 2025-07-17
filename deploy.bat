@echo off
echo 🚀 Leiyan Realtors Deployment Script
echo ======================================

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Error: Not in a git repository
    pause
    exit /b 1
)

REM Check if .cpanel.yml exists
if not exist ".cpanel.yml" (
    echo ❌ Error: .cpanel.yml file not found
    pause
    exit /b 1
)

echo 📋 Pre-deployment checks...

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js found
    for /f "tokens=*" %%i in ('node --version') do echo Version: %%i
    
    REM Check if npm is available
    npm --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ npm found
        for /f "tokens=*" %%i in ('npm --version') do echo Version: %%i
        
        REM Install dependencies if node_modules doesn't exist
        if not exist "node_modules" (
            echo 📦 Installing dependencies...
            npm ci
        )
        
        REM Build the project
        echo 🔨 Building project...
        npm run build
        
        if %errorlevel% equ 0 (
            echo ✅ Build successful
        ) else (
            echo ❌ Build failed
            pause
            exit /b 1
        )
    ) else (
        echo ❌ npm not found
        pause
        exit /b 1
    )
) else (
    echo ⚠️  Node.js not found locally
    echo Make sure your cPanel supports Node.js or use pre-built deployment
)

REM Check git status
echo 📊 Checking git status...
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    for /f %%i in ('git status --porcelain ^| find /c /v ""') do set changes=%%i
    if !changes! gtr 0 (
        echo 📝 Uncommitted changes found. Adding files...
        git add .
        
        REM Prompt for commit message
        set /p commit_msg="Enter commit message (or press Enter for default): "
        if "!commit_msg!"=="" (
            for /f "tokens=*" %%i in ('echo Deploy to leiyanrealtors.co.ke - %date% %time%') do set commit_msg=%%i
        )
        
        git commit -m "!commit_msg!"
    ) else (
        echo ✅ Working directory clean
    )
)

REM Check if cpanel remote exists
git remote | findstr "cpanel" >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ cPanel remote found
    
    REM Deploy to cPanel
    echo 🚀 Deploying to cPanel...
    git push cpanel main
    
    if %errorlevel% equ 0 (
        echo ✅ Deployment successful!
        echo 🌐 Your website should be available at: https://leiyanrealtors.co.ke
        echo ⏰ Note: DNS propagation may take up to 48 hours for new domains
    ) else (
        echo ❌ Deployment failed
        pause
        exit /b 1
    )
) else (
    echo ⚠️  cPanel remote not configured
    echo Please add your cPanel Git repository as a remote:
    echo git remote add cpanel [YOUR_CPANEL_GIT_URL]
    pause
    exit /b 1
)

echo ✨ Deployment complete!
pause
