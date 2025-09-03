#!/bin/bash

echo "🔍 Verificando configuración del proyecto para Netlify..."
echo ""

# Verificar que existe netlify.toml
if [ -f "netlify.toml" ]; then
    echo "✅ netlify.toml existe"
else
    echo "❌ netlify.toml NO encontrado"
fi

# Verificar que existe _redirects
if [ -f "public/_redirects" ]; then
    echo "✅ public/_redirects existe"
else
    echo "❌ public/_redirects NO encontrado"
fi

# Verificar que existe .env
if [ -f ".env" ]; then
    echo "✅ .env existe"
    echo "   Variables configuradas:"
    cat .env | sed 's/^/   /'
else
    echo "❌ .env NO encontrado"
fi

# Verificar package.json
if [ -f "package.json" ]; then
    echo "✅ package.json existe"
    echo "   Build script:"
    grep '"build"' package.json | sed 's/^/   /'
else
    echo "❌ package.json NO encontrado"
fi

echo ""
echo "🏗️ Intentando build local..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
    echo "   Archivos generados en dist/:"
    ls -la dist/ | sed 's/^/   /'
else
    echo "❌ Build falló"
fi

echo ""
echo "📋 Resumen de configuración para Netlify:"
echo "   Base directory: part2/phonebook"
echo "   Build command: npm run build"
echo "   Publish directory: dist"
echo "   Node version: 18"
echo "   Variables de entorno: VITE_API_URL"
