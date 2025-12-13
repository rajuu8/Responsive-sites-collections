const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500",
    profession: "Frontend Developer",
    description: "Passionate frontend developer who loves building clean and interactive web interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"]
  },
  {
    fullName: "Neha Verma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    profession: "Graphic Designer",
    description: "Creative designer focused on branding, social media creatives, and modern visuals.",
    tags: ["Photoshop", "Illustrator", "Branding"]
  },
  {
    fullName: "Rohan Singh",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    profession: "Digital Marketer",
    description: "Growth-driven digital marketer with experience in SEO, ads, and analytics.",
    tags: ["SEO", "Marketing", "Ads", "Analytics"]
  },
  {
    fullName: "Priya Patel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    profession: "Content Creator",
    description: "Content creator who tells stories through short videos and engaging posts.",
    tags: ["YouTube", "Instagram", "Storytelling"]
  },
  {
    fullName: "Kabir Mehta",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500",
    profession: "Mobile App Developer",
    description: "Android & iOS developer building smooth and scalable mobile applications.",
    tags: ["Flutter", "React Native", "Android", "iOS"]
  }
];

let main = document.querySelector('main');


let sum  = ''

users.forEach((dets)=> {
    sum += ` <div class="card">
           <img src='${dets.image}'>
            <h1>${dets.fullName}</h1>
            <h3>${dets.profession}</h3>
            <p>${dets.description}</p>
        </div>`
    
})


main.innerHTML = sum;