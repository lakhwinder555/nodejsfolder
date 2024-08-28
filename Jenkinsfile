pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your version control system (e.g., Git)
                git url: 'https://github.com/lakhwinder555/nodejsfolder.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm if not already installed
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'

                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests (adjust the command if you have a different test script)
                sh 'npm test'
            }
        }

        stage('Run Application') {
            steps {
                // Run the application on localhost (adjust as needed)
                sh 'node demo.js &'
                echo 'Application is running on http://localhost:5000'
            }
        }
    }

    post {
        always {
            // Clean up or additional steps
            echo 'Pipeline finished.'
        }
    }
}
