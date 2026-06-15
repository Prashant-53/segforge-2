// Mock data for SegForge website

export const mockDemoSubmission = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Demo request submitted:', formData);
  
  // Store in localStorage for demo purposes
  const submissions = JSON.parse(localStorage.getItem('demoSubmissions') || '[]');
  submissions.push({
    ...formData,
    timestamp: new Date().toISOString(),
    id: Date.now()
  });
  localStorage.setItem('demoSubmissions', JSON.stringify(submissions));
  
  return {
    success: true,
    message: 'Thank you! Our team will contact you shortly.'
  };
};

export const mockContactSubmission = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Contact form submitted:', formData);
  
  // Store in localStorage for demo purposes
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push({
    ...formData,
    timestamp: new Date().toISOString(),
    id: Date.now()
  });
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  
  return {
    success: true,
    message: 'Message sent successfully!'
  };
};

export const trustedCompanies = [
  'Acme Corp',
  'TechFlow',
  'DataVault',
  'CloudScale',
  'ByteForge',
  'NexGen Analytics'
];

export const platformFeatures = [
  {
    title: 'Data Engineering',
    description: 'Build, orchestrate, and monitor data pipelines at scale with enterprise-grade reliability.',
    icon: 'database'
  },
  {
    title: 'AI & ML',
    description: 'Deploy machine learning models with integrated MLOps and real-time inference capabilities.',
    icon: 'brain'
  },
  {
    title: 'Open Lakehouse',
    description: 'Unified data storage with Delta Lake, Apache Iceberg, and open table formats.',
    icon: 'layers'
  },
  {
    title: 'Governance',
    description: 'Complete data lineage, RBAC, compliance, and observability across your entire platform.',
    icon: 'shield'
  }
];
