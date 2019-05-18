module.exports = {
    apps: [{
        name: 'carousel',
        script: './server/index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-220-230-181.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/fike-carousel.pem',
            ref: 'origin/master',
            repo: 'git@github.com:nike-hratx41-fec/carousel.git',
            path: '/home/ubuntu/carousel',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}