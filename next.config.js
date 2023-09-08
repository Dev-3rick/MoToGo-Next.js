// next.config.js
module.exports = {
    // Outras configurações...
    webpack: (config, { dev }) => {
        if (dev) {
            config.devtool = 'cheap-module-source-map' // ou a opção adequada ao seu caso
        }
        // Resto da configuração...
        return config
    },
}
