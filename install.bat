@echo off
echo ========================================
echo FabTech Website Installation Script
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo Node.js found!
node --version
echo.

echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo npm found!
npm --version
echo.

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo ========================================
echo Installation completed successfully!
echo ========================================
echo.

echo Setting up environment file...
if not exist .env (
    copy .env.example .env >nul 2>&1
    echo Environment file created from template.
    echo Please edit .env file with your Firebase configuration.
) else (
    echo Environment file already exists.
)

echo.
echo Next steps:
echo 1. Edit the .env file with your Firebase configuration
echo 2. Run 'npm run dev' to start the development server
echo 3. Visit http://localhost:3000 to view the website
echo.

echo Press any key to exit...
pause >nul
