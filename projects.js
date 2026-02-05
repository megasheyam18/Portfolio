import PROJECTS from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const gridView = document.getElementById('grid-view');
    const detailView = document.getElementById('detail-view');
    const projectsGrid = document.getElementById('projects-dynamic-grid');

    // Button to go back to grid
    const backToProjectsBtn = document.getElementById('backToProjectsBtn');
    if (backToProjectsBtn) {
        backToProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showGridView();
        });
    }

    function renderProjectCards() {
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = PROJECTS.map(project => `
            <div class="project-card-modern ${project.isComingSoon ? 'coming-soon' : ''}" 
                 style="background-image: url('${project.heroImage}');"
                 onclick="${project.isComingSoon ? '' : `window.showDetail('${project.id}')`}">
                
                <div class="card-overlay"></div>
                
                ${project.isComingSoon ? '<div class="coming-soon-badge">Coming Soon</div>' : ''}
                
                <div class="card-content">
                    <div class="project-tags-modern">
                        ${project.tags.map(tag => `<span class="tag-modern">${tag}</span>`).join('')}
                    </div>
                    <h3 class="project-title-modern">${project.title}</h3>
                </div>
                
                ${!project.isComingSoon ? `
                    <div class="card-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    window.showDetail = (id) => {
        const project = PROJECTS.find(p => p.id === id);
        if (!project) return;

        // Populate detail view
        document.getElementById('detail-hero-img').src = project.heroImage;
        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-desc').innerText = project.description;
        
        const featuresList = document.getElementById('detail-features');
        featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

        const techPills = document.getElementById('detail-tech-pills');
        techPills.innerHTML = project.techStack ? project.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('') : '';

        const gallery = document.getElementById('detail-gallery');
        if (project.gallery && project.gallery.length > 0) {
            gallery.style.display = 'grid';
            gallery.innerHTML = project.gallery.map(img => `
                <div class="gallery-item"><img src="${img}" alt="Screenshot"></div>
            `).join('');
        } else {
            gallery.style.display = 'none';
        }

        // Switch view
        gridView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function showGridView() {
        detailView.style.display = 'none';
        gridView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Check for hash on load (deep linking)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#work-')) {
        const id = hash.replace('#work-', '');
        showDetail(id);
    } else {
        renderProjectCards();
    }
});
