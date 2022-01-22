# curso_practico_reactjs


```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
```diff
## Instalacion de Webpack y babel
- porfavor sigue los siguientes pasos para una instalacion y configuracion correcta
```
```diff
@@ guia adicional de instalacion de webpack y babel
! https://occipital-abrosaurus-f85.notion.site/Configuraci-n-de-Webpack-y-Babel-6440298cb4cd4e17b2c4550705e8a5ef
```

# paso 1
## Instalacion de babel
```diff
+ npm install @babel/core @babel/preset-env @babel/preset-react
```
# paso 2
## Instalacion de Webpack
+ npm install webpack webpack-cli webpack-dev-server

# paso 3
## Instalacion HTLM plugin
+ npm install babel-loader html-loader html-webpack-plugin

# paso 4
## Instalacion del loader para babel html y webpack
+ npm install babel-loader html-loader html-webpack-plugin --save-dev

# CIUDADO!!
```diff
@@Los pasos 5 y 6 son necesarios para darle vida a la apliacion@@ 
```

# paso 5
## Creacion de archivo .labelrc
```diff
+ creamos un archivo .labelrc agregamos la configuración para que babel reconozca los presets (se adjunta copia del webpack que se realizo en el curso re react practico)

      {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }
```

# paso 6
## Creacion de archivo webpack.config.js
```diff
+ creamos un archivo webpack.config.js para preparar nuestro proyecto de forma personalizada
```
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@context': path.resolve(__dirname, 'src/context/')
            
            
        }
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins:[
        new  HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
      }
}



```
