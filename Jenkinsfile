pipeline {
    agent any

    environment {
        NODE_VERSION = '16.x' // Specify the Node.js version you want to use
    }

    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install Node.js
                    sh 'curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Check if 'package.json' exists and install dependencies
                    sh 'if [ -f package.json ]; then npm install; fi'
                }
            }
        }

        stage('Run Server') {
            steps {
                script {
                    // Run the Node.js server
                    sh 'node server.js &'
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
