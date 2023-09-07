export const introQuestion = [
    {
        id:1,
        question: "What is aws ?",
        answer: "AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS) and packaged-software-as-a-service (SaaS) offerings. AWS services can offer an organization tools such as compute power, database storage and content delivery services." ,
        readMore : ""
    },
    {
        id:2,
        question: "Why use AWS services ?",
        answer: "Amazon, the preeminent cloud vendor, broke new ground by establishing the first cloud computing service, Amazon EC2, in 2008. AWS offers more solutions and features than any other provider and has free tiers with access to the AWS Console, where users can centrally control their ministrations.",
        readMore : ""
    },
    {
        id:3,
        question: "What is Amazon EC2 ?",
        answer: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 reduces hardware costs so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. You can add capacity (scale up) to handle compute-heavy tasks, such as monthly or yearly processes, or spikes in website traffic. When usage decreases, you can reduce capacity (scale down) again." ,
        readMore: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"
    },
    {
        id:4,
        question: "What is the Instance ?",
        answer: "An instance is taken as the virtual server helps to run apps on Amazon EC2. It can also be taken as a smaller part of a large computer that has its own network connection, hard drive, operating system, etc. But all these services are virtual only. Practically, you could have multiple tiny computers on a single machine all these machines are named as instances." ,
        readMore: ""
    },
    {
        id:5,
        question: "What is the Instance types?",
        answer: ["General Purpose" , "Compute Optimized" , "Memory Optimized" , "Accelerated Computing" , "Storage Optimized"] ,
        readMore: "https://aws.amazon.com/ec2/instance-types/"
    }
]; 

export const instanceType ={
    "GeneralPurpose": {
                        name : "General Purpose" ,
                        discription :"General purpose instances provide a balance of compute, memory and networking resources, and can be used for a variety of diverse workloads. These instances are ideal for applications that use these resources in equal proportions such as web servers and code repositories.",
                        readMore : "https://aws.amazon.com/ec2/instance-types/#General_Purpose"
                    },
    "ComputeOptimized" : {
                        name : "Compute Optimized",
                        discription :"Compute Optimized instances are ideal for compute bound applications that benefit from high performance processors. Instances belonging to this category are well suited for batch processing workloads, media transcoding, high performance web servers, high performance computing (HPC), scientific modeling, dedicated gaming servers and ad server engines, machine learning inference and other compute intensive applications.",
                        readMore : "https://aws.amazon.com/ec2/instance-types/#Compute_Optimized"   
                    },
    "MemoryOptimized": {
                        name : "Memory Optimized" ,
                        discription : "Memory optimized instances are designed to deliver fast performance for workloads that process large data sets in memory." ,
                        readMore : "https://aws.amazon.com/ec2/instance-types/#Memory_Optimized"
    },
    "AcceleratedComputing": {
                        name : "Accelerated Computing",
                        discription : "Accelerated computing instances use hardware accelerators, or co-processors, to perform functions, such as floating point number calculations, graphics processing, or data pattern matching, more efficiently than is possible in software running on CPUs.",
                        readMore : "https://aws.amazon.com/ec2/instance-types/#Accelerated_Computing"
    },
    "StorageOptimized" : {
                        name : "Storage Optimized" ,
                        discription : "Storage optimized instances are designed for workloads that require high, sequential read and write access to very large data sets on local storage. They are optimized to deliver tens of thousands of low-latency, random I/O operations per second (IOPS) to applications." ,
                        readMore : "https://aws.amazon.com/ec2/instance-types/#Storage_Optimized"
    }
};