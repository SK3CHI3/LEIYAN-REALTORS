#!/bin/bash

# Leiyan Realtors Deployment Script
# This script helps deploy your React application to cPanel

echo "🚀 Leiyan Realtors Deployment Script"
echo "======================================"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if .cpanel.yml exists
if [ ! -f ".cpanel.yml" ]; then
    echo "❌ Error: .cpanel.yml file not found"
    exit 1
fi

echo "📋 Pre-deployment checks..."

# Check if Node.js is available
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
    
    # Check if npm is available
    if command -v npm &> /dev/null; then
        echo "✅ npm found: $(npm --version)"
        
        # Install dependencies if node_modules doesn't exist
        if [ ! -d "node_modules" ]; then
            echo "📦 Installing dependencies..."
            npm ci
        fi
        
        # Build the project
        echo "🔨 Building project..."
        npm run build
        
        if [ $? -eq 0 ]; then
            echo "✅ Build successful"
        else
            echo "❌ Build failed"
            exit 1
        fi
    else
        echo "❌ npm not found"
        exit 1
    fi
else
    echo "⚠️  Node.js not found locally"
    echo "Make sure your cPanel supports Node.js or use pre-built deployment"
fi

# Check git status
echo "📊 Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Uncommitted changes found. Adding files..."
    git add .
    
    # Prompt for commit message
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Deploy to leiyanrealtors.co.ke - $(date)"
    fi
    
    git commit -m "$commit_msg"
else
    echo "✅ Working directory clean"
fi

# Check if cpanel remote exists
if git remote | grep -q "cpanel"; then
    echo "✅ cPanel remote found"
    
    # Deploy to cPanel
    echo "🚀 Deploying to cPanel..."
    git push cpanel main
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your website should be available at: https://leiyanrealtors.co.ke"
        echo "⏰ Note: DNS propagation may take up to 48 hours for new domains"
    else
        echo "❌ Deployment failed"
        exit 1
    fi
else
    echo "⚠️  cPanel remote not configured"
    echo "Please add your cPanel Git repository as a remote:"
    echo "git remote add cpanel [YOUR_CPANEL_GIT_URL]"
    exit 1
fi

echo "✨ Deployment complete!"
