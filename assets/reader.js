'use strict';
(() => {
  const guides = Object.freeze({
    'job-search': {
      title: 'Get Hired with AI — 2027',
      description: 'Role targeting, honest resume improvement, interviews and practical AI prompts. 12 pages.',
      path: 'books/get-hired-with-ai-2027.pdf',
      download: 'Get-Hired-with-AI-2027.pdf'
    },
    productivity: {
      title: 'AI Productivity Playbook',
      description: 'Six practical workflows to improve planning, study and writing. 7 pages.',
      path: 'books/ai-productivity-playbook.pdf',
      download: 'AI-Productivity-Playbook.pdf'
    },
    interview: {
      title: 'Interview Confidence Guide',
      description: 'STAR stories, interview questions and a five-day preparation routine. 6 pages.',
      path: 'books/interview-success-guide.pdf',
      download: 'Interview-Confidence-Guide.pdf'
    }
  });
  const id = new URLSearchParams(window.location.search).get('guide');
  const guide = Object.hasOwn(guides, id) ? guides[id] : guides['job-search'];
  document.getElementById('reader-title').textContent = guide.title;
  document.getElementById('reader-description').textContent = guide.description;
  document.title = `${guide.title} | VISWAVISNUS`;
  document.getElementById('reader-frame').src = guide.path + '#view=FitH';
  const open = document.getElementById('open-pdf');
  open.href = guide.path;
  const fallback = document.getElementById('reader-fallback-link');
  fallback.href = guide.path;
  const download = document.getElementById('download-pdf');
  download.href = guide.path;
  download.download = guide.download;
})();
