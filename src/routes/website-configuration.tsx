import { useState } from 'react';
import {
  Wifi,
  Save,
  RotateCcw,
  Image as ImageIcon,
  Plus,
  Trash2,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';

const tabs = ['General', 'Hero Section', 'About Us', 'Services', 'Plans', 'Process', 'Why Choose Us', 'Coverage', 'Customer Support'] as const;

const services = [
  { title: 'Home Internet Connection', desc: 'High-speed internet for homes built for online learning, work from home, streaming and everyday browsing without buffering.' },
  { title: 'Fiber Broadband Services', desc: 'Fast and stable fiber-optic internet connections powered by advanced fiber technology for symmetrical upload and download speeds.' },
  { title: 'Business Internet Solutions', desc: 'Dependable, high-capacity internet for offices, shops and enterprises built around uptime and dedicated bandwidth.' },
  { title: 'Network Installation', desc: 'Complete installation service covering fiber cable setup, router installation and full network configuration.' },
];

const processSteps = [
  { title: 'Contact Us', desc: 'Customer contacts NimbusLink to request a new internet connection.' },
  { title: 'Availability Check', desc: 'Our technical team checks fiber and network availability at your location.' },
  { title: 'Installation', desc: 'Fiber cable and equipment installation carried out by our trained technicians.' },
  { title: 'Activation & Support', desc: 'Internet activation followed by onboarding and ongoing customer support.' },
];

const whyChooseUs = [
  { title: 'High Speed Internet', desc: 'Fiber-backed speeds that hold steady across streaming, gaming and remote work.' },
  { title: 'Reliable Network Infrastructure', desc: 'Built and maintained end-to-end, so uptime stays consistent across the network.' },
  { title: 'Professional Installation Team', desc: 'Trained technicians handle cabling, routing and configuration the right way.' },
  { title: 'Fast Customer Support', desc: 'Reach a real person quickly for complaints, queries or technical assistance.' },
  { title: 'Affordable Internet Plans', desc: 'Plans for homes, shops and enterprises designed around real usage needs.' },
  { title: 'Secure Connectivity', desc: 'Network-level safeguards that keep your connection private and protected.' },
];

export default function WebsiteConfigPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>('General');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [stats, setStats] = useState([
    { id: 1, icon: '⚡', value: '1 Gbps', label: 'Maximum Speed' },
    { id: 2, icon: '🌍', value: '99.9%', label: 'Network Uptime' },
    { id: 3, icon: '📞', value: '24/7', label: 'Support' },
    { id: 4, icon: '🏠', value: '5000+', label: 'Customers' },
  ]);
  const [coverageCats, setCoverageCats] = useState([
    { id: 1, label: 'RESIDENTIAL AREAS' },
    { id: 2, label: 'COMMERCIAL HUBS' },
    { id: 3, label: 'OFFICE PARKS' },
    { id: 4, label: 'NEW DEVELOPMENTS' },
  ]);

  const supportCards = [
    { icon: Phone, title: 'Phone Support', desc: 'Speak directly to our support team for immediate assistance with any connection or technical issue.' },
    { icon: Mail, title: 'Email Support', desc: 'Send us a detailed message and our team will respond within 24 hours with a resolution.' },
    { icon: MessageCircle, title: 'Live Chat', desc: 'Chat with a representative in real-time during business hours for quick answers.' },
    { icon: MapPin, title: 'Visit Office', desc: 'Talk to us in person at our Amritsar office — we\'re here Monday through Saturday.' },
  ];

  const faqItems = [
    { q: 'How do I check internet availability at my location?', a: 'Use the coverage check tool on our website — enter your area or PIN code and we\'ll show available plans instantly.' },
    { q: 'What documents are required for a new connection?', a: 'You\'ll need a valid ID proof (Aadhaar, Voter ID, or Passport) and a recent address proof. Our team will guide you through the process.' },
    { q: 'How long does it take to install a new connection?', a: 'Installation typically takes 2-3 business days after document verification. In some areas same-day installation may be available.' },
  ];

  return (
    <AdminShell title="Website Configuration">
      <div className="panel-surface overflow-hidden">
        <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-panel px-3 py-2 scrollbar-thin">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)}
              className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition ${active === t ? 'bg-brand/15 text-brand' : 'text-muted-foreground hover:bg-panel-2 hover:text-foreground'}`}>{t}</button>
          ))}
          <div className="ml-auto flex shrink-0 items-center gap-2 pl-3">
            <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel-2 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md bg-[image:var(--gradient-brand)] px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow)]">
              <Save className="h-3.5 w-3.5" /> Save Changes
            </button>
          </div>
        </div>
        <div className="p-6">
          {active === 'General' && (
            <>
              <SectionTitle>General Settings</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-5 lg:col-span-2">
                  <Field label="Site Name" defaultValue="NimbusLink Fiber" />
                  <Field label="Tagline" defaultValue="Fast, Reliable & High-Speed Internet Solutions" />
                  <div>
                    <FieldLabel>Logo</FieldLabel>
                    <div className="mt-1.5 flex items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2 p-4">
                      <div className="flex h-14 w-40 items-center justify-center gap-2 rounded-md bg-panel">
                        <Wifi className="h-5 w-5 text-brand" />
                        <span className="font-display text-sm font-semibold text-foreground">NimbusLink</span>
                      </div>
                      <button className="rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground hover:bg-panel-2">Change Logo</button>
                      <span className="ml-auto text-[11px] text-muted-foreground">Recommended: 512×512px, PNG or SVG</span>
                    </div>
                  </div>
                </div>
                <div>
                  <FieldLabel>Favicon</FieldLabel>
                  <div className="mt-1.5 rounded-lg border border-dashed border-border bg-panel-2 p-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="grid h-16 w-16 place-items-center rounded-md bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                        <Wifi className="h-6 w-6" strokeWidth={2.5} />
                      </div>
                      <button className="rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground hover:bg-panel-2">Change Favicon</button>
                      <span className="text-[11px] text-muted-foreground">Recommended: 32×32px, PNG or ICO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Contact Information</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Phone Number" defaultValue="+91 98765 43210" />
                <Field label="Email Address" defaultValue="support@nimbuslink.net" />
                <Field label="Office Address" defaultValue="4th Floor, Tech Tower, Ranjit Avenue, Amritsar, Punjab" />
                <Field label="Google Maps Embed URL" defaultValue="<iframe src='https://www.google.com/maps/embed?...'>" />
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Social Media Links</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <Field label="Facebook URL" defaultValue="https://facebook.com/nimbuslink" />
                <Field label="Instagram URL" defaultValue="https://instagram.com/nimbuslink" />
                <Field label="Twitter URL" defaultValue="https://twitter.com/nimbuslink" />
                <Field label="LinkedIn URL" defaultValue="https://linkedin.com/company/nimbuslink" />
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Website Status</SectionTitle>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-panel-2 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-success/15 text-success"><ImageIcon className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold text-foreground">Live</div>
                  <div className="text-xs text-muted-foreground">Site last updated 28 May, 2026 · 03:15 PM</div>
                </div>
                <button className="ml-auto rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground hover:bg-panel-2">Toggle Maintenance</button>
              </div>
            </>
          )}
          {active === 'Hero Section' && (
            <>
              <SectionTitle>Hero Banner</SectionTitle>
              <p className="mt-1 mb-6 text-xs text-muted-foreground">Main banner displayed at the top of the homepage</p>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Title Line 1" defaultValue="TELECOMMUNICATION INFRASTRUCTURE & ISP" />
                <Field label="Title Line 2" defaultValue="Fast, Reliable &" />
                <Field label="Title Line 3 (Highlighted)" defaultValue="High-Speed Internet" />
                <Field label="Title Line 4" defaultValue="Solutions" />
              </div>

              <div className="mt-6">
                <FieldLabel>Hero Description</FieldLabel>
                <textarea defaultValue="We design, build and operate broadband and fiber internet networks that help homes, businesses and communities connect better." className="mt-1.5 h-24 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="CTA Button Text" defaultValue="Get Connected Now" />
                <Field label="Secondary Button Text" defaultValue="View Plans" />
              </div>

              <div className="mt-6">
                <FieldLabel>Background Image</FieldLabel>
                <div className="mt-1.5 rounded-lg border-2 border-dashed border-border bg-panel-2 p-8 text-center transition hover:border-brand/50">
                  <div className="flex flex-col items-center gap-2">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-panel">
                      <ImageIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">Recommended: 1800×900px, JPEG or PNG</p>
                    <button className="mt-2 rounded-md border border-border bg-panel px-4 py-1.5 text-xs font-medium text-foreground hover:bg-panel-2">Choose File</button>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Services' && (
            <>
              <SectionTitle>Services Section</SectionTitle>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" defaultValue="Our Services" />
              </div>
              <div className="mt-5">
                <Field label="Subtitle" defaultValue="Connectivity solutions for every kind of space" />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea defaultValue="Whether it's a single household or a multi-floor office, our network is built to deliver the right plan with the right infrastructure." className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {services.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)]">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Plans' && (
            <>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                  <div className="panel-surface p-5">
                    <SectionTitle>Section Content</SectionTitle>
                    <div className="mt-4 space-y-4">
                      <Field label="Section Subtitle" defaultValue="Enterprise Connectivity" />
                      <Field label="Main Heading" defaultValue="Fast Internet Plans" />
                      <Field label="Highlight Text (optional)" defaultValue="Plans" />
                      <div>
                        <FieldLabel>Description</FieldLabel>
                        <textarea defaultValue="Choose the perfect broadband plan for your home or business with lightning-fast speeds and reliable connectivity." className="mt-1.5 h-24 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>

                  <div className="panel-surface p-5">
                    <SectionTitle>Buttons</SectionTitle>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Primary Button Text" defaultValue="View Plans" />
                      <Field label="Primary Button URL" defaultValue="/plans" />
                      <Field label="Secondary Button Text" defaultValue="Contact Sales" />
                      <Field label="Secondary Button URL" defaultValue="/contact" />
                    </div>
                  </div>

                  <div className="panel-surface p-5">
                    <div className="flex items-center justify-between">
                      <SectionTitle>Section Visibility</SectionTitle>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" defaultChecked className="peer sr-only" />
                        <div className="h-5 w-9 rounded-full bg-panel-2 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-brand peer-checked:after:translate-x-full" />
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Show the plans section on the website</p>
                  </div>

                  <div className="panel-surface p-5">
                    <SectionTitle>SEO (Optional)</SectionTitle>
                    <div className="mt-4 space-y-4">
                      <Field label="SEO Title" defaultValue="Fast Internet Plans - NimbusLink Fiber" />
                      <div>
                        <FieldLabel>SEO Description</FieldLabel>
                        <textarea defaultValue="Choose the perfect broadband plan for your home or business with lightning-fast speeds and reliable connectivity from NimbusLink Fiber." className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="panel-surface p-5">
                    <SectionTitle>Hero Media</SectionTitle>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-4">
                        <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                          <input type="radio" name="mediaType" checked={mediaType === 'image'} onChange={() => setMediaType('image')} className="accent-brand" />
                          Image
                        </label>
                        <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                          <input type="radio" name="mediaType" checked={mediaType === 'video'} onChange={() => setMediaType('video')} className="accent-brand" />
                          Video
                        </label>
                      </div>

                      {mediaType === 'image' ? (
                        <div className="rounded-lg border-2 border-dashed border-border bg-panel-2 p-6 text-center transition hover:border-brand/50">
                          <div className="flex flex-col items-center gap-2">
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            <p className="text-sm font-medium text-foreground">Drag & drop or click to upload</p>
                            <p className="text-xs text-muted-foreground">Recommended: 1600×900px, JPEG or PNG</p>
                            <div className="mt-2 flex items-center gap-2">
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-foreground hover:bg-panel-2">Choose File</button>
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-panel-2">Replace</button>
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-panel-2">Remove</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <FieldLabel>Upload MP4</FieldLabel>
                            <div className="mt-1 rounded-lg border-2 border-dashed border-border bg-panel-2 p-4 text-center transition hover:border-brand/50">
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-foreground hover:bg-panel-2">Choose Video</button>
                            </div>
                          </div>
                          <Field label="YouTube URL" defaultValue="" />
                          <Field label="Vimeo URL" defaultValue="" />
                        </div>
                      )}

                      <div>
                        <FieldLabel>Overlay Opacity</FieldLabel>
                        <div className="mt-1.5 flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">0%</span>
                          <input type="range" min="0" max="100" defaultValue={65} className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-brand [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:shadow-[var(--shadow-glow)]" />
                          <span className="text-xs text-muted-foreground">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel-surface p-5">
                    <div className="flex items-center justify-between">
                      <SectionTitle>Statistics</SectionTitle>
                      <button onClick={() => setStats(prev => [...prev, { id: Date.now(), icon: '📊', value: '', label: '' }])} className="inline-flex items-center gap-1 rounded-md border border-border bg-panel-2 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-panel">
                        <Plus className="h-3.5 w-3.5" /> Add Stat
                      </button>
                    </div>
                    <div className="mt-3 space-y-2">
                      {stats.map((s) => (
                        <div key={s.id} className="flex items-center gap-2 rounded-lg border border-border bg-panel-2 p-2">
                          <input value={s.icon} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, icon: e.target.value } : st))} className="h-8 w-10 rounded-md border border-border bg-panel text-center text-lg focus:border-brand focus:outline-none" />
                          <input value={s.value} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, value: e.target.value } : st))} placeholder="Value" className="h-8 flex-1 rounded-md border border-border bg-panel px-2 text-sm text-foreground focus:border-brand focus:outline-none" />
                          <input value={s.label} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, label: e.target.value } : st))} placeholder="Label" className="h-8 flex-1 rounded-md border border-border bg-panel px-2 text-sm text-foreground focus:border-brand focus:outline-none" />
                          <button onClick={() => setStats(prev => prev.filter(st => st.id !== s.id))} className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-destructive/15 hover:text-destructive">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel-surface p-5">
                    <SectionTitle>Plans List</SectionTitle>
                    <p className="mt-2 text-xs text-muted-foreground">Plan pricing and details will be available here.</p>
                  </div>

                  <div className="panel-surface p-5">
                    <SectionTitle>Live Preview</SectionTitle>
                    <p className="mt-2 text-xs text-muted-foreground">A live preview of the plans section will render here.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Process' && (
            <>
              <SectionTitle>Process Section</SectionTitle>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" defaultValue="From enquiry to activation, in four steps" />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea defaultValue="Our installation process is sequential — each stage clears the way for the next, so your connection goes live without surprises." className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {processSteps.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)]">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Why Choose Us' && (
            <>
              <SectionTitle>Why Choose Us Section</SectionTitle>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" defaultValue="Infrastructure you can build a connection on" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {whyChooseUs.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)]">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Coverage' && (
            <>
              <SectionTitle>Coverage Section</SectionTitle>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" defaultValue="Wherever the connection needs to reach" />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea defaultValue="We provide internet connectivity solutions for homes, offices and businesses through our reliable telecom network — expanding fiber coverage neighbourhood by neighbourhood." className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <SectionTitle>Coverage Categories</SectionTitle>
                  <button onClick={() => setCoverageCats(prev => [...prev, { id: Date.now(), label: '' }])} className="inline-flex items-center gap-1 rounded-md border border-border bg-panel-2 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-panel">
                    <Plus className="h-3.5 w-3.5" /> Add Category
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coverageCats.map((c) => (
                    <div key={c.id} className="flex items-center gap-2 rounded-lg border border-border bg-panel-2 px-3 py-2">
                      <input value={c.label} onChange={(e) => setCoverageCats(prev => prev.map(cat => cat.id === c.id ? { ...cat, label: e.target.value } : cat))} className="h-7 w-36 rounded-md border border-border bg-panel px-2 text-xs font-medium text-foreground focus:border-brand focus:outline-none" />
                      <button onClick={() => setCoverageCats(prev => prev.filter(cat => cat.id !== c.id))} className="grid h-6 w-6 place-items-center rounded-md text-muted-foreground hover:bg-destructive/15 hover:text-destructive">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <SectionTitle>Coverage Check</SectionTitle>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field label="Input Placeholder" defaultValue="Enter area or PIN code" />
                  <Field label="Button Text" defaultValue="Check" />
                </div>
                <div className="mt-4">
                  <Field label="Hint Text" defaultValue="Try Ranjit Avenue, Model Town, Civil Lines, or 143001." />
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
          {active === 'Customer Support' && (
            <>
              <SectionTitle>Customer Support Section</SectionTitle>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" defaultValue="We're Here to Help" />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea defaultValue="Reach out to our support team through any of the channels below and we'll get back to you as quickly as possible." className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {supportCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)]">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <input defaultValue={c.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                          <textarea defaultValue={c.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <SectionTitle>FAQ Items</SectionTitle>
                <div className="mt-4 space-y-4">
                  {faqItems.map((faq, i) => (
                    <div key={i} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)]">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <input defaultValue={faq.q} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                          <textarea defaultValue={faq.a} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          )}
        </div>
      </div>
    </AdminShell>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{children}</h3>;
}
function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium text-muted-foreground">{children}</label>;
}
function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input defaultValue={defaultValue} className="mt-1.5 h-10 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}
