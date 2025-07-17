<?php
// Git deployment hook for cPanel
// This script will be triggered when you push to your repository

$secret = 'your_webhook_secret_here'; // Change this to a secure secret
$repo_path = '/home/username/repositories/your-repo-name';
$deploy_path = '/home/username/public_html/';

// Verify the webhook secret (if using GitHub/GitLab webhooks)
if (isset($_SERVER['HTTP_X_HUB_SIGNATURE'])) {
    $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
    $payload = file_get_contents('php://input');
    $expected = 'sha1=' . hash_hmac('sha1', $payload, $secret);
    
    if (!hash_equals($signature, $expected)) {
        http_response_code(403);
        exit('Forbidden');
    }
}

// Change to repository directory
chdir($repo_path);

// Pull latest changes
exec('git pull origin main 2>&1', $output, $return_code);

if ($return_code !== 0) {
    error_log('Git pull failed: ' . implode("\n", $output));
    http_response_code(500);
    exit('Git pull failed');
}

// Install dependencies (if package.json changed)
if (file_exists('package.json')) {
    exec('npm ci 2>&1', $npm_output, $npm_return);
    if ($npm_return !== 0) {
        error_log('npm install failed: ' . implode("\n", $npm_output));
    }
}

// Build the project
exec('npm run build 2>&1', $build_output, $build_return);

if ($build_return !== 0) {
    error_log('Build failed: ' . implode("\n", $build_output));
    http_response_code(500);
    exit('Build failed');
}

// Copy built files to public_html
exec("cp -r dist/* $deploy_path", $copy_output, $copy_return);

if ($copy_return !== 0) {
    error_log('File copy failed: ' . implode("\n", $copy_output));
    http_response_code(500);
    exit('File copy failed');
}

// Log successful deployment
error_log('Deployment successful at ' . date('Y-m-d H:i:s'));
echo 'Deployment successful';
?>