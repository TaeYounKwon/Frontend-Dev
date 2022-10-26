# Trainr.Space Documentation

This README can be used to help set up a live development environment of Trainr.space.

# Prerequisites
```
Node.js v14.x or later
npm v6.14.4 or later
git v2.14.1 or later
```
# Environment Setup

## **Installing AWS Amplify**

Run this command in the terminal where you have Node and npm installed:

`npm install -g @aws-amplify/cli`
<br></br>

## **Configuring an AWS Profile**

### **Starting AWS Profile Creation**
Run this command in the terminal to start the account setup:

`amplify configure`

This is where we will setup the account that we are going to use to connect to AWS later.
<br></br>
The browser will open. You can close it and make sure to activate the terminal again and press enter to continue setting up the profile.
<br></br>

### **region:**
When prompted to enter the region choose `us-west-2` from the options.

#### Example
region: `us-west-2`
<br></br>

### **user name:**
Credentials Document: `Trainr.Space_Development_Environment_Credentials.txt`

Now you will need to open the credentials document that was submitted with the assignment.
When prompted to add the IAM user, add the `Username` from the credentials document.

#### Example
user name: `Envname`.Account
<br></br>
The browser will open again. You can close it and make sure to activate the terminal again and press enter to continue setting up the profile.
<br></br>

### **accessKeyId:**
Credentials Document: `Trainr.Space_Development_Environment_Credentials.txt`

Here you will reference the credentials document and enter the `Access Key` associated with the account you are setting up.

#### Example
accessKeyId: `Access Key`
<br></br>

### **secretAccessKey:**
Here you will reference the credentials document and enter the `Secret Key` associated with the account you are setting up.

#### Example
secretAccessKey: `Secret Key`
<br></br>

### **Profile Name:**
The you will set a freindly profile name that you associate with this stack. So later when we sign in with an AWS Profile we know which one connects us to this stack.

#### Example
Profile Name: trainr.space.`account`

Now we have successfully created our AWS account to make connecting to the stack easy!
<br></br>

## **Aquire Copy Of The Codebase**
### **Clone the Repository:**
In the terminal run the command:

`git clone https://github.com/Lor3nzoMartinez/trainr.space.git`
<br></br>

### **Installing Required Libraries to Run the Project:**
Open the project directory in the terminal:

`cd ./trainr.space`

Once in the project root directory run this command to install project dependencies:

If you are using yarn:

`yarn`

If you are using Node:

`npm install`
<br></br>

## **Connecting Project to AWS**

Once the project has been successfully cloned and all project dependencies have been made available. We can now connect the project to AWS Amplify to leverage the power of AWS.

We will start by running:

`amplify init`
<br></br>

### **Exsisting Environment**

The next promt you should see ask `"Do you want to use an exsisting environment?"` to use our test environment type `Y` for yes and press enter.
<br></br>

### **Choose Environment**

