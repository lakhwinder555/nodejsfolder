pipeline {
    agent any

    environment {
        NODE_VERSION = '16.20.4' // Specify the Node.js version you want to use
    }

    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install nvm and Node.js
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                    sh '. ~/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION'
                    sh '. ~/.nvm/nvm.sh && node -v' // Check Node.js version
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies if package.json exists
                    sh 'if [ -f package.json ]; then . ~/.nvm/nvm.sh && npm install; fi'
                }
            }
        }

        stage('Run Server') {
            steps {
                script {
                    // Run the Node.js server
                    sh '. ~/.nvm/nvm.sh && node server.js &'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
