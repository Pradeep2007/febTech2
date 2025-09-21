@echo off
echo ========================================
echo Starting FabTech Development Server
echo ========================================
echo.

echo Checking if dependencies are installed...
if not exist node_modules (
    echo Dependencies not found. Running installation...
    call install.bat
    if %errorlevel% neq 0 (
        echo Installation failed. Please check the error messages above.
        pause
        exit /b 1
    )
)

echo.
echo Starting development server...
echo The website will open at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
