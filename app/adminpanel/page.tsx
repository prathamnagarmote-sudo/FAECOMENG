'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FolderKanban,
  FileText,
  Plus,
  Search,
  Edit2,
  Trash2,
  Star,
  ExternalLink,
  Check,
  X,
  Layers,
  MapPin,
  Building2,
  Clock,
  Sparkles,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import styles from './admin.module.css';

import { ALL_PROJECTS } from '@/app/projects/page';

// Initial default projects dataset (All 53 projects)
const INITIAL_PROJECTS = ALL_PROJECTS;

// Initial default blog dataset (Empty until admin adds blogs)
const INITIAL_BLOGS: any[] = [];

const CATEGORIES = [
  'Light Gauge Steel',
  'Structural Steel',
  'Wood & Mass Timber',
  'ICF',
  'MEP Engineering',
  'BIM Integrated 3D',
  'Architectural BIM',
  'Concrete Solutions',
];

export default function AdminPanel() {
  const [tab, setTab] = useState<'projects' | 'blogs'>('projects');
  
  // Projects State
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [projSearch, setProjSearch] = useState('');
  const [projCatFilter, setProjCatFilter] = useState('All');
  const [projFeaturedOnly, setProjFeaturedOnly] = useState(false);
  const [isProjModalOpen, setIsProjModalOpen] = useState(false);
  const [editingProj, setEditingProj] = useState<any | null>(null);

  // Project Form State
  const [projForm, setProjForm] = useState({
    id: '',
    name: '',
    location: '',
    category: CATEGORIES[0],
    tag: '',
    area: '',
    storeys: '',
    image: '/images/project_commercial.png',
    featured: false,
  });

  // Blogs State
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [blogSearch, setBlogSearch] = useState('');
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);

  // Blog Form State
  const [blogForm, setBlogForm] = useState({
    id: '',
    title: '',
    slug: '',
    category: 'Engineering Insights',
    author: 'FAECOM Editorial',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    coverImg: '/images/featured_commercial.jpg',
    excerpt: '',
    content: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem('faecom_admin_projects');
      if (savedProjects) {
        const parsed = JSON.parse(savedProjects);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_PROJECTS.length) {
          setProjects(parsed);
        } else {
          // Sync all 53 projects if previous cached data had fewer items
          setProjects(INITIAL_PROJECTS);
          localStorage.setItem('faecom_admin_projects', JSON.stringify(INITIAL_PROJECTS));
        }
      } else {
        setProjects(INITIAL_PROJECTS);
        localStorage.setItem('faecom_admin_projects', JSON.stringify(INITIAL_PROJECTS));
      }

      const savedBlogs = localStorage.getItem('faecom_admin_blogs');
      if (savedBlogs) {
        setBlogs(JSON.parse(savedBlogs));
      } else {
        setBlogs([]);
      }
    } catch (e) {
      console.error('Error loading localStorage', e);
    }
  }, []);

  // Save projects to localStorage
  const saveProjectsToStorage = (newProjects: any[]) => {
    setProjects(newProjects);
    try {
      localStorage.setItem('faecom_admin_projects', JSON.stringify(newProjects));
    } catch (e) {
      console.error('Error saving projects', e);
    }
  };

  // Save blogs to localStorage
  const saveBlogsToStorage = (newBlogs: any[]) => {
    setBlogs(newBlogs);
    try {
      localStorage.setItem('faecom_admin_blogs', JSON.stringify(newBlogs));
    } catch (e) {
      console.error('Error saving blogs', e);
    }
  };

  // Toggle Featured status directly
  const handleToggleFeatured = (id: string) => {
    const updated = projects.map(p => p.id === id ? { ...p, featured: !p.featured } : p);
    saveProjectsToStorage(updated);
  };

  // Delete project
  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter(p => p.id !== id);
      saveProjectsToStorage(updated);
    }
  };

  // Open Project Modal for Add
  const handleOpenAddProject = () => {
    setEditingProj(null);
    setProjForm({
      id: 'proj-' + Date.now(),
      name: '',
      location: 'USA',
      category: CATEGORIES[0],
      tag: 'Commercial Project',
      area: '50,000 sq. ft.',
      storeys: '4 Floors',
      image: '/images/project_commercial.png',
      featured: false,
    });
    setIsProjModalOpen(true);
  };

  // Open Project Modal for Edit
  const handleOpenEditProject = (proj: any) => {
    setEditingProj(proj);
    setProjForm({
      id: proj.id,
      name: proj.name || '',
      location: proj.location || '',
      category: proj.category || CATEGORIES[0],
      tag: proj.tag || '',
      area: proj.area || '',
      storeys: proj.storeys || '',
      image: proj.image || '/images/project_commercial.png',
      featured: !!proj.featured,
    });
    setIsProjModalOpen(true);
  };

  // Submit Project Form
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projForm.name.trim()) return;

    let updatedProjects;
    if (editingProj) {
      updatedProjects = projects.map(p => p.id === projForm.id ? { ...projForm } : p);
    } else {
      updatedProjects = [projForm, ...projects];
    }
    saveProjectsToStorage(updatedProjects);
    setIsProjModalOpen(false);
  };

  // Delete Blog
  const handleDeleteBlog = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updated = blogs.filter(b => b.id !== id);
      saveBlogsToStorage(updated);
    }
  };

  // Open Blog Modal for Add
  const handleOpenAddBlog = () => {
    setEditingBlog(null);
    setBlogForm({
      id: 'blog-' + Date.now(),
      title: '',
      slug: '',
      category: 'LGSF Engineering',
      author: 'FAECOM Editorial',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      coverImg: '/images/featured_commercial.jpg',
      excerpt: '',
      content: '',
    });
    setIsBlogModalOpen(true);
  };

  // Open Blog Modal for Edit
  const handleOpenEditBlog = (blog: any) => {
    setEditingBlog(blog);
    setBlogForm({
      id: blog.id,
      title: blog.title || '',
      slug: blog.slug || '',
      category: blog.category || 'LGSF Engineering',
      author: blog.author || 'FAECOM Editorial',
      date: blog.date || '',
      readTime: blog.readTime || '5 min read',
      coverImg: blog.coverImg || '/images/featured_commercial.jpg',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
    });
    setIsBlogModalOpen(true);
  };

  // Submit Blog Form
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title.trim()) return;

    let updatedBlogs;
    if (editingBlog) {
      updatedBlogs = blogs.map(b => b.id === blogForm.id ? { ...blogForm } : b);
    } else {
      const generatedSlug = blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      updatedBlogs = [{ ...blogForm, slug: generatedSlug }, ...blogs];
    }
    saveBlogsToStorage(updatedBlogs);
    setIsBlogModalOpen(false);
  };

  // Filtered Projects
  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(projSearch.toLowerCase()) ||
                          p.location.toLowerCase().includes(projSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(projSearch.toLowerCase());
    const matchesCat = projCatFilter === 'All' || p.category === projCatFilter;
    const matchesFeatured = !projFeaturedOnly || p.featured;
    return matchesSearch && matchesCat && matchesFeatured;
  });

  // Filtered Blogs
  const filteredBlogs = blogs.filter(b => {
    return b.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
           b.category.toLowerCase().includes(blogSearch.toLowerCase());
  });

  return (
    <main className={styles.adminPage}>
      {/* ── 1. Top Admin Bar ──────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.brandGroup}>
            <div className={styles.logoBadge}>
              <Image src="/images/logo.png" alt="FAECOM" width={32} height={32} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h1 className={styles.adminTitle}>FAECOM Control Center</h1>
              <span className={styles.adminSubtitle}>Project &amp; Content Management Dashboard</span>
            </div>
          </div>

          <div className={styles.headerActions}>
            <Link href="/projects" target="_blank" className={styles.liveSiteBtn}>
              <span>View Live Projects</span>
              <ExternalLink size={14} />
            </Link>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span>Admin Active</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.mainContainer}>
        {/* ── 2. Analytics / Overview Bar ────────────────────── */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statIconWrap} style={{ background: 'rgba(255, 107, 44, 0.15)', color: '#FF6B2C' }}>
              <FolderKanban size={22} />
            </div>
            <div>
              <span className={styles.statValue}>{projects.length}</span>
              <span className={styles.statLabel}>Total Projects</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrap} style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#EAB308' }}>
              <Star size={22} />
            </div>
            <div>
              <span className={styles.statValue}>{projects.filter(p => p.featured).length}</span>
              <span className={styles.statLabel}>Featured Projects</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrap} style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563EB' }}>
              <FileText size={22} />
            </div>
            <div>
              <span className={styles.statValue}>{blogs.length}</span>
              <span className={styles.statLabel}>Blog Posts / Articles</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrap} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
              <Layers size={22} />
            </div>
            <div>
              <span className={styles.statValue}>{CATEGORIES.length}</span>
              <span className={styles.statLabel}>Active Categories</span>
            </div>
          </div>
        </div>

        {/* ── 3. Main Navigation Tabs ─────────────────────────── */}
        <div className={styles.tabsNav}>
          <button
            onClick={() => setTab('projects')}
            className={`${styles.tabBtn} ${tab === 'projects' ? styles.activeTab : ''}`}
          >
            <FolderKanban size={18} />
            <span>Projects Manager</span>
            <span className={styles.tabBadge}>{projects.length}</span>
          </button>

          <button
            onClick={() => setTab('blogs')}
            className={`${styles.tabBtn} ${tab === 'blogs' ? styles.activeTab : ''}`}
          >
            <FileText size={18} />
            <span>Blog &amp; Insights Manager</span>
            <span className={styles.tabBadge}>{blogs.length}</span>
          </button>
        </div>

        {/* ══════════════════════════════════════════════════════
           TAB 1: PROJECTS MANAGER
        ══════════════════════════════════════════════════════ */}
        {tab === 'projects' && (
          <div className={styles.tabContent}>
            {/* Filter Bar */}
            <div className={styles.actionBar}>
              <div className={styles.searchBox}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search project name, location, or tag..."
                  value={projSearch}
                  onChange={e => setProjSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <select
                  value={projCatFilter}
                  onChange={e => setProjCatFilter(e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="All">All Categories ({projects.length})</option>
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <button
                  onClick={() => setProjFeaturedOnly(!projFeaturedOnly)}
                  className={`${styles.toggleFilterBtn} ${projFeaturedOnly ? styles.toggleActive : ''}`}
                >
                  <Star size={15} />
                  <span>Featured Only</span>
                </button>
              </div>

              <button onClick={handleOpenAddProject} className={styles.addBtn}>
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Projects Table */}
            <div className={styles.tableCard}>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>Image</th>
                      <th>Project Name</th>
                      <th>Category</th>
                      <th>Location</th>
                      <th>Type / Tag</th>
                      <th>Area</th>
                      <th>Storeys</th>
                      <th style={{ textAlign: 'center' }}>Featured</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.length === 0 ? (
                      <tr>
                        <td colSpan={9} className={styles.emptyTd}>
                          No projects matching your search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredProjects.map((p) => (
                        <tr key={p.id} className={styles.tr}>
                          <td>
                            <div className={styles.tableImgWrap}>
                              <Image
                                src={p.image || '/images/project_commercial.png'}
                                alt={p.name}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </td>
                          <td>
                            <span className={styles.projName}>{p.name}</span>
                          </td>
                          <td>
                            <span className={styles.catTag}>{p.category}</span>
                          </td>
                          <td>
                            <span className={styles.locText}>
                              <MapPin size={12} />
                              {p.location}
                            </span>
                          </td>
                          <td>
                            <span className={styles.tagText}>{p.tag || '-'}</span>
                          </td>
                          <td>
                            <span className={styles.areaText}>{p.area || '-'}</span>
                          </td>
                          <td>
                            <span className={styles.storeysText}>{p.storeys || '-'}</span>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <button
                              onClick={() => handleToggleFeatured(p.id)}
                              className={`${styles.starBtn} ${p.featured ? styles.starActive : ''}`}
                              title={p.featured ? 'Featured on Homepage' : 'Not Featured'}
                            >
                              <Star size={18} fill={p.featured ? '#EAB308' : 'none'} />
                            </button>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <div className={styles.actionBtns}>
                              <button
                                onClick={() => handleOpenEditProject(p)}
                                className={styles.editBtn}
                                title="Edit Project"
                              >
                                <Edit2 size={15} />
                              </button>
                              <button
                                onClick={() => handleDeleteProject(p.id)}
                                className={styles.deleteBtn}
                                title="Delete Project"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
           TAB 2: BLOG & INSIGHTS MANAGER
        ══════════════════════════════════════════════════════ */}
        {tab === 'blogs' && (
          <div className={styles.tabContent}>
            {/* Filter Bar */}
            <div className={styles.actionBar}>
              <div className={styles.searchBox}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search blog title or category..."
                  value={blogSearch}
                  onChange={e => setBlogSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <button onClick={handleOpenAddBlog} className={styles.addBtn}>
                <Plus size={16} />
                <span>Create New Blog Post</span>
              </button>
            </div>

            {/* Blog Cards List */}
            <div className={styles.blogGrid}>
              {filteredBlogs.length === 0 ? (
                <div className={styles.emptyCard}>No blog articles found.</div>
              ) : (
                filteredBlogs.map(b => (
                  <div key={b.id} className={styles.blogCard}>
                    <div className={styles.blogCoverWrap}>
                      <Image src={b.coverImg || '/images/featured_commercial.jpg'} alt={b.title} fill style={{ objectFit: 'cover' }} />
                      <span className={styles.blogCategoryBadge}>{b.category}</span>
                    </div>
                    <div className={styles.blogCardBody}>
                      <div className={styles.blogMetaRow}>
                        <span>{b.author}</span>
                        <span>•</span>
                        <span>{b.date}</span>
                        <span>•</span>
                        <span>{b.readTime}</span>
                      </div>
                      <h3 className={styles.blogCardTitle}>{b.title}</h3>
                      <p className={styles.blogCardExcerpt}>{b.excerpt}</p>
                      
                      <div className={styles.blogCardFooter}>
                        <button onClick={() => handleOpenEditBlog(b)} className={styles.editBtn}>
                          <Edit2 size={14} /> Edit Article
                        </button>
                        <button onClick={() => handleDeleteBlog(b.id)} className={styles.deleteBtn}>
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════
         MODAL 1: ADD / EDIT PROJECT
      ══════════════════════════════════════════════════════ */}
      {isProjModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>{editingProj ? 'Edit Project' : 'Add New Project'}</h2>
              <button onClick={() => setIsProjModalOpen(false)} className={styles.closeModalBtn}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className={styles.modalForm}>
              <div className={styles.modalFormGrid}>

                <div className={styles.modalField}>
                  <label>Project Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TM Heights Residential"
                    value={projForm.name}
                    onChange={e => setProjForm({ ...projForm, name: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Category *</label>
                  <select
                    value={projForm.category}
                    onChange={e => setProjForm({ ...projForm, category: e.target.value })}
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.modalField}>
                  <label>Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vancouver, WA / USA"
                    value={projForm.location}
                    onChange={e => setProjForm({ ...projForm, location: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Tag / Project Type</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Home Care Unit Center"
                    value={projForm.tag}
                    onChange={e => setProjForm({ ...projForm, tag: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Total Area</label>
                  <input
                    type="text"
                    placeholder="e.g. 100,000 sq. ft."
                    value={projForm.area}
                    onChange={e => setProjForm({ ...projForm, area: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Storeys / Floors</label>
                  <input
                    type="text"
                    placeholder="e.g. 6 Floors / G+1"
                    value={projForm.storeys}
                    onChange={e => setProjForm({ ...projForm, storeys: e.target.value })}
                  />
                </div>

                <div className={`${styles.modalField} ${styles.fullWidth}`}>
                  <label>Image Thumbnail Path / URL</label>
                  <input
                    type="text"
                    placeholder="/images/project_tm_heights.png"
                    value={projForm.image}
                    onChange={e => setProjForm({ ...projForm, image: e.target.value })}
                  />
                </div>

                <div className={`${styles.modalField} ${styles.fullWidth}`}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={projForm.featured}
                      onChange={e => setProjForm({ ...projForm, featured: e.target.checked })}
                    />
                    <span>Feature this project on the Homepage &amp; Highlights section</span>
                  </label>
                </div>
              </div>

              <div className={styles.modalActions}>
                <button type="button" onClick={() => setIsProjModalOpen(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.saveBtn}>
                  <Check size={16} /> Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
         MODAL 2: ADD / EDIT BLOG
      ══════════════════════════════════════════════════════ */}
      {isBlogModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>{editingBlog ? 'Edit Blog Article' : 'Create New Blog Post'}</h2>
              <button onClick={() => setIsBlogModalOpen(false)} className={styles.closeModalBtn}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className={styles.modalForm}>
              <div className={styles.modalFormGrid}>

                <div className={`${styles.modalField} ${styles.fullWidth}`}>
                  <label>Article Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Future of Light Gauge Steel in Construction"
                    value={blogForm.title}
                    onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Category</label>
                  <input
                    type="text"
                    placeholder="e.g. LGSF Engineering"
                    value={blogForm.category}
                    onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Author</label>
                  <input
                    type="text"
                    placeholder="e.g. Sam S., Ph.D."
                    value={blogForm.author}
                    onChange={e => setBlogForm({ ...blogForm, author: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Read Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read"
                    value={blogForm.readTime}
                    onChange={e => setBlogForm({ ...blogForm, readTime: e.target.value })}
                  />
                </div>

                <div className={styles.modalField}>
                  <label>Cover Image URL</label>
                  <input
                    type="text"
                    placeholder="/images/featured_commercial.jpg"
                    value={blogForm.coverImg}
                    onChange={e => setBlogForm({ ...blogForm, coverImg: e.target.value })}
                  />
                </div>

                <div className={`${styles.modalField} ${styles.fullWidth}`}>
                  <label>Short Summary / Excerpt</label>
                  <textarea
                    rows={2}
                    placeholder="Brief summary displayed on blog card previews..."
                    value={blogForm.excerpt}
                    onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  />
                </div>

                <div className={`${styles.modalField} ${styles.fullWidth}`}>
                  <label>Article Content (Markdown / HTML)</label>
                  <textarea
                    rows={6}
                    placeholder="Full article body content..."
                    value={blogForm.content}
                    onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                  />
                </div>

              </div>

              <div className={styles.modalActions}>
                <button type="button" onClick={() => setIsBlogModalOpen(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.saveBtn}>
                  <Check size={16} /> Save Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
