**Use an ec2 machine for deploying angular application and Dotnet core API and both applications use docker. Will create an image locally and deploy it to the ec2 instance and host.**

To deploy an Angular application and a .NET Core API on an EC2 instance using Docker, you'll need to follow these steps:

1. Set up an EC2 instance: Launch an EC2 instance on AWS with an appropriate operating system (e.g., Amazon Linux 2). Ensure that the instance has enough resources to handle your application.

2. Install Docker: SSH into the EC2 instance and install Docker by running the following commands:

```bash
sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
```

3. Set up Docker Compose (optional): If you plan to use Docker Compose to manage multiple containers, you can install it on the EC2 instance by following the official Docker Compose installation guide.

4. Build Docker images locally: On your local machine, navigate to the root directory of your Angular application and use the following command to build the Angular image:

```bash
docker build -t angular-app .
```

Similarly, navigate to the root directory of your .NET Core API and use the following command to build the .NET Core image:

```bash
docker build -t dotnet-api .
```

Ensure that you have Dockerfiles available for both projects that define the necessary instructions to build the images.

5. Push Docker images to a container registry: You can use Docker Hub, Amazon ECR, or any other container registry of your choice to store the Docker images. Push the images to the registry following their respective documentation.

6. Pull Docker images on the EC2 instance: SSH into the EC2 instance and pull the Docker images from the container registry by running the following commands:

```bash
docker pull <registry>/<user>/angular-app
docker pull <registry>/<user>/dotnet-api
```

Replace `<registry>` and `<user>` with the appropriate values based on your container registry configuration.

7. Run the Docker containers: Once the images are pulled, you can run the containers using the following commands:

For the Angular application:

```bash
docker run -d -p 80:80 <registry>/<user>/angular-app
```

For the .NET Core API:

```bash
docker run -d -p 5000:5000 <registry>/<user>/dotnet-api
```

These commands will start the containers in detached mode (`-d`) and map the container ports to the respective host ports (`-p`). Adjust the port numbers if your applications use different ports.

8. Configure security groups: Ensure that the EC2 instance's security group allows inbound traffic on the specified ports (e.g., 80 for Angular, 5000 for .NET Core API).

9. Access the applications: After running the containers, you should be able to access your Angular application at the EC2 instance's public IP or DNS name, and the .NET Core API at the corresponding port (e.g., `http://<public-ip>` or `http://<public-ip>:5000`).

Remember to replace `<public-ip>` with the actual IP address of your EC2 instance.

That's it! You have now deployed your Angular application and .NET Core API on an EC2 instance using Docker. Make sure to consider additional configurations, such as SSL certificates, domain names, and production-level optimizations, depending on your requirements.

