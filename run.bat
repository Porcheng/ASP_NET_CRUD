@echo off
setlocal

rem Get the current directory
set currentDir=%cd%

rem Set the backend and frontend directories relative to the current directory
set backendDir=%currentDir%\crud_backend
set frontendDir=%currentDir%\crud_frontend

rem Check if backend directory exists
if not exist "%backendDir%" (
    echo Backend directory does not exist: %backendDir%
    goto end
)

rem Check if frontend directory exists
if not exist "%frontendDir%" (
    echo Frontend directory does not exist: %frontendDir%
    goto end
)

rem Navigate to the backend directory and start the backend server
echo Starting backend...
cd /d "%backendDir%"
start cmd /k "dotnet net_crud.dll"

rem Navigate to the frontend directory and start the frontend server
echo Starting frontend...
cd /d "%frontendDir%"
start cmd /k "npm start"

:end
echo All servers started. Press any key to exit.
pause > nul
