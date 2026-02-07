// ============================================
// SOCIETY DATA - EASY TO UPDATE
// ============================================

const SOCIETY_INFO = {
    name: "Punjabi Khatri Sabha",
    established: "1985",
    founder: "Shri Ram Lal Kapoor Ji",
    description: "A vibrant community of Punjabi Khatri families united by culture, tradition, and values. Our society has been serving the community for decades, organizing cultural events, supporting families, and preserving our rich heritage.",
    mission: "To unite Punjabi Khatri families, preserve our cultural heritage, and support community members through various social and cultural initiatives.",
    address: "Community Hall, Sector 15, New Delhi - 110001",
    phone: "+91 98765 43210",
    email: "info@punjabikhatrisabha.org"
};

// ============================================
// FAMILY DOMAINS - 5 CATEGORIES
// ============================================

const FAMILY_DOMAINS = [
    { id: "kapoor", name: "Kapoor", icon: "K", color: "#e74c3c" },
    { id: "khatri", name: "Khatri", icon: "Kh", color: "#3498db" },
    { id: "tandon", name: "Tandon", icon: "T", color: "#2ecc71" },
    { id: "bhalla", name: "Bhalla", icon: "B", color: "#9b59b6" },
    { id: "bajaj", name: "Bajaj", icon: "Bj", color: "#f39c12" },
    { id: "mehra", name: "Mehra", icon: "M", color: "#392b69" },

];

// ============================================
// FAMILY MEMBERS DATA
// Format: Each Mukhiya with their family details
// ============================================

const FAMILY_MEMBERS = {
    kapoor: [
        {
            id: "kapoor_001",
            
            name: "Rajesh Kapoor",
            phone: "+91 98111 22333",
            location: "A-45, Sector 15, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Sunita Kapoor", age: 48 },
                children: [
                    { name: "Amit Kapoor", gender: "male", age: 25, married: false, status: "present" },
                    { name: "Priya Kapoor", gender: "female", age: 23, married: true, marriedTo: "Sharma Family", status: "married_out" },
                    { name: "Neha Kapoor", gender: "female", age: 20, married: false, status: "late" }
                ]
            }
        },
        {
            id: "kapoor_002",
            name: "Vinod Kapoor",
            phone: "+91 98222 33444",
            location: "B-12, Sector 18, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Meena Kapoor", age: 45 },
                children: [
                    { name: "Rohit Kapoor", gender: "male", age: 22, married: false, status: "present" },
                    { name: "Anita Kapoor", gender: "female", age: 19, married: false, status: "present" }
                ]
            }
        },
        {
            id: "kapoor_003",
            name: "Suresh Kapoor",
            phone: "+91 98333 44555",
            location: "C-78, Sector 22, Noida",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 6,
                wife: { name: "Kavita Kapoor", age: 50 },
                children: [
                    { name: "Vikram Kapoor", gender: "male", age: 28, married: true, status: "present" },
                    { name: "Suman Kapoor", gender: "female", age: 26, married: true, marriedTo: "Mehta Family", status: "married_out" },
                    { name: "Pooja Kapoor", gender: "female", age: 24, married: true, marriedTo: "Gupta Family", status: "married_out" },
                    { name: "Rahul Kapoor", gender: "male", age: 21, married: false, status: "present" }
                ]
            }
        },
        {
            id: "kapoor_004",
            name: "Anil Kapoor",
            phone: "+91 98444 55666",
            location: "D-34, Sector 10, Gurgaon",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Rekha Kapoor", age: 42 },
                children: [
                    { name: "Simran Kapoor", gender: "female", age: 18, married: false, status: "present" }
                ]
            }
        },
        {
            id: "kapoor_005",
            name: "Mahesh Kapoor",
            phone: "+91 98555 66777",
            location: "E-56, Sector 25, Faridabad",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Seema Kapoor", age: 47 },
                children: [
                    { name: "Kunal Kapoor", gender: "male", age: 24, married: false, status: "present" },
                    { name: "Kritika Kapoor", gender: "female", age: 22, married: false, status: "present" },
                    { name: "Karan Kapoor", gender: "male", age: 19, married: false, status: "present" }
                ]
            }
        }
    ],
    khatri: [
        {
            id: "khatri_001",
            name: "Jitendra Khatri",
            phone: "+91 9694466909 / +91 7014321857",
            location: "8, jai shree colony, dholkot, bohra ganeshji udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Monika Khatri", age: 46 },
                children: [
                    { name: "Devash Khatri", gender: "male", age: 23, married: false, status: "present" },
                    { name: "Deepika Khatri", gender: "female", age: 21, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_002",
            name: "Suresh prakash chandra Khatri",
            phone: "+91 7737403801",
            location: "D7, shalibhadra complex saflta nagar, bedla, udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Anita Khatri", age: 44 },
                children: [
                    { name: "Vishal Khatri", gender: "male", age: 22, married: false, status: "present" },
                    { name: "Monika Khatri", gender: "female", age: 20, married: false, status: "present" },
                    { name: "Mohit Khatri", gender: "male", age: 17, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_003",
            name: "narendra prakash chandra khatri",
            phone: "+91 9828059115",
            location: "115, Bhopalwadi, Udaipur ",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Neelam Khatri", age: 43 },
                children: [
                    { name: "Sachin Khatri", gender: "male", age: 21, married: false, status: "present" },
                    { name: "Sapna Khatri", gender: "female", age: 19, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_004",
            name: "Yogesh Chaganlal Khatri",
            phone: "+91 9829041227",
            location: "1, chabila bheru marg., bharbhuja ghati",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 6,
                wife: { name: "Pushpa Khatri", age: 52 },
                children: [
                    { name: "Rajiv Khatri", gender: "male", age: 28, married: true, status: "present" },
                    { name: "Ritu Khatri", gender: "female", age: 26, married: true, marriedTo: "Verma Family", status: "married_out" },
                    { name: "Ravi Khatri", gender: "male", age: 24, married: false, status: "present" },
                    { name: "Rani Khatri", gender: "female", age: 22, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_005",
            name: "Pradeep suresh chandra Khatri",
            phone: "+91 8619110207",
            location: "15, august ki gali, hathipol, Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_006",
            name: "Gurav suresh chandra Khatri",
            phone: "+91 9352513852",
            location: "15, Madhusudan vihar colony, badi Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_007",
            name: "Vijay kumar lokesh Khatri",
            phone: "+91 7976519838",
            location: " 26, hathipol ke ander,Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
          {
            id: "khatri_008",
            name: "jitendra jeevanlal Khatri",
            phone: "+91 9414161570",
            location: " 1, Divy magari, Saheli marg, Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
         {
            id: "khatri_009",
            name: "Dilip manalal Khatri",
            phone: "+91 9929495197",
            location: " New rajendra nagar, Gariyawas, Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
         {
            id: "khatri_0010",
            name: "Upesh chandra Ramchandra Khatri",
            phone: "+91 9460632907",
            location: " Block 56-A, Hiran magri sec-14 Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0011",
            name: "Pawan manalal Khatri",
            phone: "+91 9057257342",
            location: "6, new Rajendra nagar, Gariyavas, Udaipur ",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0012",
            name: "Vinay Prushuttam Khatri",
            phone: "+91 9799397156",
            location: "111, badi holi, delhi gate, Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0013",
            name: "Rakesh Laxmilal Khatri",
            phone: "+91 9413811950",
            location: "I-70 block,Rajesthan hospital ke pass,sec-14,Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
         {
            id: "khatri_0014",
            name: "Tarun Suresh Chandra Khatri",
            phone: "+91 9571556600",
            location: "114-115 D block, Hiran Magri, Sec-14,Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0015",
            name: "Ganesh prabhulal Khatri",
            phone: "+91 9887804674",
            location: "111, Badi Holi, Bopalwadi, Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0016",
            name: "Deepak Ramchandra Khatri",
            phone: "+91 9414263810",
            location: "74, rav ji ka aata, Udaipur",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
        {
            id: "khatri_0017",
            name: "Lokesh kesarilal Khatri",
            phone: "+91 7891638525",
            location: "Jay Rajasthan road, Hathipol, Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
         {
            id: "khatri_0018",
            name: "Kanehiyalal babulal Khatri",
            phone: "+91 7014669534",
            location: "1/172, RHB colony, Guvardhan vilas, Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
         {
            id: "khatri_0019",
            name: "Kanehiyalal babulal Khatri",
            phone: "+91 7014669534",
            location: "1/172, RHB colony, Guvardhan vilas, Udaipur",
            role: "",
            photo: null,
            family: {
                totalMembers: 3,
                wife: { name: "Sushma Khatri", age: 40 },
                children: [
                    { name: "Aarav Khatri", gender: "male", age: 15, married: false, status: "present" }
                ]
            }
        },
    ],
    tandon: [
        {
            id: "tandon_001",
            name: "Ashok Tandon",
            phone: "+91 97111 22333",
            location: "K-34, Sector 16, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Shashi Tandon", age: 49 },
                children: [
                    { name: "Gaurav Tandon", gender: "male", age: 26, married: true, status: "present" },
                    { name: "Garima Tandon", gender: "female", age: 24, married: true, marriedTo: "Sinha Family", status: "married_out" },
                    { name: "Gautam Tandon", gender: "male", age: 21, married: false, status: "present" }
                ]
            }
        },
        {
            id: "tandon_002",
            name: "Prakash Tandon",
            phone: "+91 97222 33444",
            location: "L-56, Sector 20, Noida",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Kusum Tandon", age: 45 },
                children: [
                    { name: "Nitin Tandon", gender: "male", age: 23, married: false, status: "present" },
                    { name: "Nisha Tandon", gender: "female", age: 20, married: false, status: "present" }
                ]
            }
        },
        {
            id: "tandon_003",
            name: "Vijay Tandon",
            phone: "+91 97333 44555",
            location: "M-89, Sector 24, Gurgaon",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Sarla Tandon", age: 48 },
                children: [
                    { name: "Ankur Tandon", gender: "male", age: 25, married: false, status: "present" },
                    { name: "Ankita Tandon", gender: "female", age: 23, married: false, status: "present" },
                    { name: "Anuj Tandon", gender: "male", age: 20, married: false, status: "present" }
                ]
            }
        },
        {
            id: "tandon_004",
            name: "Rakesh Tandon",
            phone: "+91 97444 55666",
            location: "N-12, Sector 29, Faridabad",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Manju Tandon", age: 44 },
                children: [
                    { name: "Tarun Tandon", gender: "male", age: 22, married: false, status: "present" },
                    { name: "Tanya Tandon", gender: "female", age: 19, married: false, status: "present" }
                ]
            }
        },
        {
            id: "tandon_005",
            name: "Sanjay Tandon",
            phone: "+91 97555 66777",
            location: "O-45, Sector 33, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 6,
                wife: { name: "Aarti Tandon", age: 50 },
                children: [
                    { name: "Varun Tandon", gender: "male", age: 27, married: true, status: "present" },
                    { name: "Varsha Tandon", gender: "female", age: 25, married: true, marriedTo: "Chopra Family", status: "married_out" },
                    { name: "Vikas Tandon", gender: "male", age: 23, married: false, status: "present" },
                    { name: "Vidya Tandon", gender: "female", age: 21, married: false, status: "present" }
                ]
            }
        }
    ],
    bhalla: [
    // ...existing code...
// ...existing code...
{
    id: "bhalla_001",
    name: "Radhey shayam Bhalla",
    phone: "+91 9414167410",
    location: "27, malviya colony, bohra gadheji",
    role: "Mukhiya",
    photo: null,
    family: {
        totalMembers: 12,
        wife: { name: "Sushila Bhalla", age: 46 },
        children: [
            {
                name: "Pahlad Bhalla",
                gender: "male",
                age: 24,
                married: true,
                status: "present",
                spouse: { name: "Rashmi Bhalla", gender: "female", relation: "wife" },
                children: [
                    { name: "Saloni Bhalla", gender: "female" },
                    { name: "Mohi Bhalla", gender: "female" }
                ]
            },
            {
                name: "Vikas Bhalla",
                gender: "male",
                age: 22,
                married: true,
                status: "present",
                spouse: { name: "Jyoti Bhalla", gender: "female", relation: "wife" },
                children: [
                    { name: "Jahal Bhalla", gender: "female" },
                    { name: "Bhuvan Bhalla", gender: "male" },
                    { name: "Toshik Bhalla", gender: "male" }
                ]
            },
            {
                name: "Savita Bhalla",
                gender: "female",
                age: 22,
                married: true,
                marriedTo: "Chopra Family",
                status: "married_out"
            }
        ]
    }
},
// ...existing code...
// ...existing code...
        
        {
            id: "bhalla_002",
            name: "Kapish Bhalla",
            phone: "+91 9829220457",
            location: "52, ram dwara chowk dholi bawdi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Monika bhalla", age: 48 },
                children: [
                    { name: "Darsh Bhalla", gender: "male", age: 26, married: true, status: "present" },
                    { name: "Darshita Bhalla", gender: "female", age: 24, married: false,  status: "present" }
                ]
            }
        },
        {
            id: "bhalla_003",
            name: "Satyanayan Bhalla",
            phone: "+91 96333 44555",
            location: "R-12, Sector 27, Gurgaon",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 9,
                wife: { name: "Gita Bhalla", age: 52 },
                children: [
                    {
                        name: "Abhishesk Bhalla",
                        gender: "male",
                        age: 28,
                        married: true,
                        status: "present",
                        spouse: { name: "Vandana Bhalla", relation: "wife" },
                        children: [
                            { name: "Shuarya Bhalla", gender: "male" },
                            { name: "Harsh Bhalla", gender: "male" }
                        ]
                    },
                    { name: "Namrata Bhalla", gender: "female", age: 26, married: true, marriedTo: "Arora Family", status: "married_out" },
                    { name: "Amrita Bhalla", gender: "female", age: 26, married: true, marriedTo: "Arora Family", status: "married_out" },
                    { name: "Suman Bhalla", gender: "female", age: 26, married: true, marriedTo: "Arora Family", status: "married_out" }
                ]
            }
        },
        {
            id: "bhalla_004",
            name: "Late Giriraj Bhalla",
            phone: "",
            location: "",
            role: "",
            photo: null,
            family: {
                totalMembers: 7,
                wife: { name: "Rekha Bhalla" },
                children: [
                    { name: "Toshi Bhalla", gender: "female", married: true, marriedTo: "Seghal Family", status: "married_out" },
                    {
                        name: "Tushar Bhalla",
                        gender: "male",
                        role: "Mukhiya",
                        married: true,
                        status: "present",
                        spouse: { name: "Pooja Bhalla", age: 45, gender: "female"},
                        children: [
                            { name: "Vanika Bhalla", gender: "female", age: 23 },
                            { name: "Kiyansh Bhalla", gender: "male", age: 21 }
                        ]
                    }
                ]
            }
        }
        
        
    ],
    bajaj: [
        {
            id: "bajaj_001",
            name: "Mohan Bajaj",
            phone: "+91 95111 22333",
            location: "U-78, Sector 12, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Lata Bajaj", age: 47 },
                children: [
                    { name: "Aakash Bajaj", gender: "male", age: 25, married: false, status: "present" },
                    { name: "Aanchal Bajaj", gender: "female", age: 23, married: true, marriedTo: "Jain Family", status: "married_out" },
                    { name: "Aaditya Bajaj", gender: "male", age: 20, married: false, status: "present" }
                ]
            }
        },
        {
            id: "bajaj_002",
            name: "Gopal Bajaj",
            phone: "+91 95222 33444",
            location: "V-23, Sector 26, Noida",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Savitri Bajaj", age: 44 },
                children: [
                    { name: "Yash Bajaj", gender: "male", age: 22, married: false, status: "present" },
                    { name: "Yashika Bajaj", gender: "female", age: 19, married: false, status: "present" }
                ]
            }
        },
        {
            id: "bajaj_003",
            name: "Krishan Bajaj",
            phone: "+91 95333 44555",
            location: "W-45, Sector 30, Gurgaon",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 6,
                wife: { name: "Radha Bajaj", age: 50 },
                children: [
                    { name: "Pankaj Bajaj", gender: "male", age: 28, married: true, status: "present" },
                    { name: "Pallavi Bajaj", gender: "female", age: 26, married: true, marriedTo: "Khanna Family", status: "married_out" },
                    { name: "Paras Bajaj", gender: "male", age: 24, married: false, status: "present" },
                    { name: "Palak Bajaj", gender: "female", age: 22, married: false, status: "present" }
                ]
            }
        },
        {
            id: "bajaj_004",
            name: "Shyam Bajaj",
            phone: "+91 95444 55666",
            location: "X-67, Sector 34, Faridabad",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 4,
                wife: { name: "Kamini Bajaj", age: 43 },
                children: [
                    { name: "Divya Bajaj", gender: "female", age: 21, married: false, status: "present" },
                    { name: "Dhruv Bajaj", gender: "male", age: 18, married: false, status: "present" }
                ]
            }
        },
        {
            id: "bajaj_005",
            name: "Brij Bajaj",
            phone: "+91 95555 66777",
            location: "Y-89, Sector 38, New Delhi",
            role: "Mukhiya",
            photo: null,
            family: {
                totalMembers: 5,
                wife: { name: "Sunaina Bajaj", age: 46 },
                children: [
                    { name: "Lakshay Bajaj", gender: "male", age: 24, married: false, status: "present" },
                    { name: "Lakshita Bajaj", gender: "female", age: 22, married: false, status: "present" },
                    { name: "Lucky Bajaj", gender: "male", age: 19, married: false, status: "present" }
                ]
            }
        }
    ],
       mehra: [
  {
    id: "mehra_001",
    name: "Ramesh Mehra",          // ✅ REQUIRED
    phone: "+91 90000 11111",      // ✅ REQUIRED
    location: "Delhi",             // ✅ REQUIRED
    role: "Mukhiya",               // ✅ REQUIRED
    photo: null,

    family: {
      totalMembers: 6,             // ✅ REQUIRED

      // ===== Pedigree extension =====
      parents: {
        father: { name: "Late Shyam Mehra", status: "late" },
        mother: { name: "Kamla Mehra", status: "alive" }
      },

      spouse: {
        name: "Suman Mehra",
        gender: "female"
      },

      children: [
        {
          name: "Amit Mehra",
          gender: "male",
          spouse: {
            name: "Neha Mehra",
            relation: "daughter-in-law"
          },
          children: [
            { name: "Rohit Mehra", gender: "male" },
            { name: "Pooja Mehra", gender: "female" }
          ]
        },
        {
          name: "Pinki Mehra",
          gender: "female",
          marriedOut: true,
          marriedTo: "Sharma Family"
        }
      ]
    }
  }
]


};

// ============================================
// EVENTS DATA - EASY TO UPDATE
// Just modify this array to add/remove events
// ============================================

const EVENTS = [
   
    {
        id: 1,
        title: "Dhund",
        date: "2026-03-3",
        time: "10:00 AM",
        venue: "Community Hall, Sector 15",
        description: "Annual meeting to discuss society matters, elections, and future plans.",
        status: "upcoming"
    },
    {
        id: 2,
        title: "Holi Milan Samaroh",
        date: "2024-03-25",
        time: "4:00 PM",
        venue: "Central Park, Sector 18",
        description: "Celebrate the festival of colors with the entire community. Snacks and refreshments will be provided.",
        status: "completed"
    },
    {
        id: 3,
        title: "Youth Sports Day",
        date: "2024-04-10",
        time: "8:00 AM",
        venue: "Sports Complex, Sector 22",
        description: "Annual sports competition for youth members. Events include cricket, badminton, and athletics.",
        status: "upcoming"
    },
    {
        id: 4,
        title: "Senior Citizens Felicitation",
        date: "2024-04-20",
        time: "11:00 AM",
        venue: "Banquet Hall, Sector 15",
        description: "Honoring our senior community members for their contributions and blessings.",
        status: "upcoming"
    },
    {
        id: 5,
        title: "Cultural Evening",
        date: "2024-05-05",
        time: "6:00 PM",
        venue: "Auditorium, Sector 25",
        description: "An evening of music, dance, and cultural performances by community members.",
        status: "upcoming"
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function getMemberById(memberId) {
    for (const domain in FAMILY_MEMBERS) {
        const member = FAMILY_MEMBERS[domain].find(m => m.id === memberId);
        if (member) {
            return { ...member, domain };
        }
    }
    return null;
}

function getMembersByDomain(domainId) {
    return FAMILY_MEMBERS[domainId] || [];
}

function getDomainInfo(domainId) {
    return FAMILY_DOMAINS.find(d => d.id === domainId);
}

function searchMembers(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const domain in FAMILY_MEMBERS) {
        FAMILY_MEMBERS[domain].forEach(member => {
            if (member.name.toLowerCase().includes(lowerQuery) ||
                member.location.toLowerCase().includes(lowerQuery)) {
                results.push({ ...member, domain });
            }
        });
    }

    return results;
}

function getTotalMembersCount() {
    let count = 0;
    for (const domain in FAMILY_MEMBERS) {
        FAMILY_MEMBERS[domain].forEach(member => {
            count += member.family.totalMembers;
        });
    }
    return count;
}

function getTotalFamiliesCount() {
    let count = 0;
    for (const domain in FAMILY_MEMBERS) {
        count += FAMILY_MEMBERS[domain].length;
    }
    return count;
}

