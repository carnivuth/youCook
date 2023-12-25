pipeline {
	environment {
		registry = "carnivuth/youcook"
		registryCredential = 'dockerhub_id'
		dockerImage = ''
	}

	agent any
	stages {
		stage('Cloning Repository') {
			steps {
				git branch:'main', 
				    url:'https://github.com/carnivuth/youCook'
			}
		}

		stage('Building youcook docker image') {
			steps {
				script {
					dockerImage = docker.build registry + ":$BUILD_NUMBER"
				}
			}
		}

		stage('Upload docker image to docker hub') {
			steps {
				script {
					docker.withRegistry('', registryCredential) {
						dockerImage.push()
					}
				}
			}
		}

		stage('Cleaning up environment') {
			steps {
				sh "docker rmi $registry:$BUILD_NUMBER"
			}
		}
	}
}
