pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PORT = 5000 // Specify the port the server will run on
        SERVER_URL = "http://localhost:${PORT}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the version control
                git url: 'https://github.com/lakhwinder555/nodejsfolder.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            when {
                expression { return fileExists('package.json') && sh(script: "npm run test -- --help > /dev/null 2>&1", returnStatus: true) == 0 }
            }
            steps {
                // Run tests if they are specified
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Enhanced build step to ensure that a build script is present
                script {
                    def buildScriptExists = sh(script: 'npm run build -- --help > /dev/null 2>&1', returnStatus: true) == 0
                    if (buildScriptExists) {
                        echo 'Build script found, proceeding with build...'
                        // Execute the build script
                        sh 'npm run build'

                        // Optionally add additional build commands here
                        // For example, minify assets, compile TypeScript, etc.
                        // sh 'other-build-command'
                    } else {
                        echo 'No build script found, skipping build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application by starting the Node.js server
                sh 'nohup node demo.js &'
            }
        }

        stage('Post-Deployment') {
            steps {
                // Print the server URL for easy access
                echo "Application is running at ${env.SERVER_URL}"
            }
        }
    }

    post {
        always {
            // Clean up
            sh 'rm -rf node_modules'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
