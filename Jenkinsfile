// Jenkinsfile

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git 'https://github.com/ZaidAmirMahdi10/BMI-Calculator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies using Yarn
                sh 'yarn install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run unit and integration tests
                sh 'yarn test --ci --reporters=jest-junit --outputFile=unit-test-results.xml'
            }
            post {
                always {
                    // Archive test results
                    junit 'unit-test-results.xml'
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React application
                sh 'yarn build'
            }
            post {
                success {
                    // Archive the build artifacts
                    archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
                }
            }
        }

        stage('Run E2E Tests') {
            steps {
                sh 'yarn run cypress:run'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
