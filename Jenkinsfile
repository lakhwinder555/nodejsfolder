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
                script {
                    // Checkout the code from the version control
                    echo 'Checking out code...'
                    git url: 'https://github.com/lakhwinder555/nodejsfolder.git', branch: 'main'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            when {
                expression { 
                    // Check if tests are defined
                    return fileExists('package.json') && 
                           sh(script: "npm run test -- --help > /dev/null 2>&1", returnStatus: true) == 0 
                }
            }
            steps {
                script {
                    // Run tests if they are specified
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Enhanced build step to ensure that a build script is present
                    echo 'Checking for build script...'
                    def buildScriptExists = sh(script: 'npm run build -- --help > /dev/null 2>&1', returnStatus: true) == 0
                    if (buildScriptExists) {
                        echo 'Build script found, proceeding with build...'
                        // Execute the build script
                        sh 'npm run build'

                        // Additional build commands can be added here
                        // Example: sh 'other-build-command'
                    } else {
                        echo 'No build script found, skipping build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application by starting the Node.js server
                    echo 'Deploying application...'
                    sh 'nohup node demo.js &'
                }
            }
        }

        stage('Post-Deployment') {
            steps {
                script {
                    // Print the server URL for easy access
                    echo "Application is running at ${env.SERVER_URL}"
                }
            }
        }
    }

    post {
        always {
            script {
                // Clean up
                echo 'Cleaning up...'
                sh 'rm -rf node_modules'
            }
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
