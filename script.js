// Scroll to top on logo click
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal content data
const projectDescriptions = {
  "Malware Detection System": "",
  "Job Role Matching using TF-IDF": "Automatically ranks resumes based on job descriptions using natural language processing and TF-IDF vectorization.",
  "Cloud Cost Optimizer": "A platform to monitor and reduce cloud infrastructure costs by suggesting underutilized resource optimizations.",
  "AI-based Vulnerability Scanner": "Uses deep learning models to analyze software code and find potential security flaws and vulnerabilities.",
  "Container Security System": "A system that scans Docker images and Kubernetes pods for known vulnerabilities and misconfigurations.",
  "Phishing Detection using ML": "Detects phishing websites by analyzing URLs, webpage structure, and SSL certificate patterns using supervised learning.",
  "IAM Role Visualizer": "A visualization tool that maps IAM roles and permissions across AWS accounts to improve audit clarity.",
  "Secure Chat App": "End-to-end encrypted messaging application with multi-user support and forward secrecy implemented."
};

// Modal handlers
function openProjectModal(title) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalContent = modal.querySelector("p");

  modalTitle.innerText = title;
  modalContent.innerText = projectDescriptions[title] || "Description coming soon...";
  modal.style.display = "flex";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});
function openProjectModal(title) {
  const descriptions = {
    "Malware Detection System": [
      "A machine learning-based malware detection system using static and behavioral analysis.",
      "Implemented algorithms like Random Forest and SVM to increase detection accuracy.",
      "Dashboard for real-time threat visualization and alerts.",
      "Combined signature-based and heuristic scanning techniques.",
      "Tested on 10,000+ files with over 95% accuracy."
    ],
    "Job Role Matching using TF-IDF": [
      "Uses NLP and TF-IDF to match resumes with job descriptions.",
      "Automated resume screening with real-time fit scores.",
      "Web interface for uploading resumes and getting predictions.",
      "Utilizes cosine similarity for relevance scoring.",
      "Supports dynamic job roles across domains."
    ],
    "Cloud Cost Optimizer": [
      "Analyzes cloud usage to reduce AWS, Azure, and GCP costs.",
      "Detects idle resources and suggests optimizations.",
      "AI-based predictions for future cloud expenses.",
      "Provides monthly savings reports with visuals.",
      "Achieved 28% cost reduction in simulations."
    ],
    "AI-based Vulnerability Scanner": [
      "Scans codebases for security issues using AI.",
      "Detects insecure coding patterns and poor configs.",
      "Works with Python, JS, and Docker setups.",
      "Assigns CVSS scores with remediation suggestions.",
      "CI/CD integration for continuous vulnerability scanning."
    ],
    "Container Security System": [
      "Secures containers with runtime behavior monitoring.",
      "Detects unauthorized actions and misconfigurations.",
      "Integrates with Kubernetes for pod-level security.",
      "Uses Falco and custom rules for threat detection.",
      "Visual dashboard showing real-time container risks."
    ],
    "Phishing Detection using ML": [
      "Classifies phishing emails and URLs using ML models.",
      "Uses NLP to scan message headers and content.",
      "Detects spoofed domains and shortened URLs.",
      "Achieved 92% accuracy on phishing datasets.",
      "Learns from new threats to stay updated."
    ],
    "IAM Role Visualizer": [
      "Visualizes AWS IAM roles, policies, and permissions.",
      "Identifies over-privileged roles using heatmaps.",
      "Helps enforce least-privilege access models.",
      "Supports JSON policy analysis and graphs.",
      "Enhances security posture of cloud environments."
    ],
    "Secure Chat App": [
      "Built with AES-256 & RSA encryption for privacy.",
      "Supports real-time chat and media sharing.",
      "Firebase authentication with secure login system.",
      "Designed with mobile-first responsive layout.",
      "Cross-platform with secure backend integration."
    ]
  };

  const githubLinks = {
    "Malware Detection System": "https://github.com/yourusername/malware-detection",
    "Job Role Matching using TF-IDF": "https://github.com/yourusername/job-role-matching",
    "Cloud Cost Optimizer": "https://github.com/yourusername/cloud-cost-optimizer",
    "AI-based Vulnerability Scanner": "https://github.com/yourusername/vulnerability-scanner",
    "Container Security System": "https://github.com/yourusername/container-security",
    "Phishing Detection using ML": "https://github.com/yourusername/phishing-detection",
    "IAM Role Visualizer": "https://github.com/yourusername/iam-visualizer",
    "Secure Chat App": "https://github.com/yourusername/secure-chat-app"
  };

  document.getElementById("modalProjectTitle").innerText = title;

  const descriptionList = document.getElementById("modalProjectDescription");
  descriptionList.innerHTML = "";
  descriptions[title].forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    descriptionList.appendChild(li);
  });

  const githubLink = document.getElementById("modalProjectLink");
  githubLink.href = githubLinks[title];
  githubLink.style.display = "inline-block";

  document.getElementById("projectModal").style.display = "flex";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}
