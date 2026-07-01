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
  Pencil,
  Shield,
  Radio,
  Headphones,
  Globe,
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

  const [editTab, setEditTab] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, Record<string, string>>>({
    general: {
      siteName: 'NimbusLink Fiber',
      tagline: 'Fast, Reliable & High-Speed Internet Solutions',
      phone: '+91 98765 43210',
      email: 'support@nimbuslink.net',
      officeAddress: '4th Floor, Tech Tower, Ranjit Avenue, Amritsar, Punjab',
      mapsUrl: "<iframe src='https://www.google.com/maps/embed?...'>",
      facebook: 'https://facebook.com/nimbuslink',
      instagram: 'https://instagram.com/nimbuslink',
      twitter: 'https://twitter.com/nimbuslink',
      linkedin: 'https://linkedin.com/company/nimbuslink',
    },
    hero: {
      t1: 'TELECOMMUNICATION INFRASTRUCTURE & ISP',
      t2: 'Fast, Reliable &',
      t3: 'High-Speed Internet',
      t4: 'Solutions',
      desc: 'We design, build and operate broadband and fiber internet networks that help homes, businesses and communities connect better.',
      cta: 'Get Connected Now',
      sec: 'View Plans',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Connectivity solutions for every kind of space',
      desc: 'Whether it\'s a single household or a multi-floor office, our network is built to deliver the right plan with the right infrastructure.',
    },
    plans: {
      subtitle: 'Enterprise Connectivity',
      heading: 'Fast Internet Plans',
      highlight: 'Plans',
      desc: 'Choose the perfect broadband plan for your home or business with lightning-fast speeds and reliable connectivity.',
      btn1: 'View Plans',
      url1: '/plans',
      btn2: 'Contact Sales',
      url2: '/contact',
      seoTitle: 'Fast Internet Plans - NimbusLink Fiber',
      seoDesc: 'Choose the perfect broadband plan for your home or business with lightning-fast speeds and reliable connectivity from NimbusLink Fiber.',
    },
    process: {
      title: 'From enquiry to activation, in four steps',
      desc: 'Our installation process is sequential — each stage clears the way for the next, so your connection goes live without surprises.',
    },
    wcu: {
      title: 'Infrastructure you can build a connection on',
    },
    coverage: {
      title: 'Wherever the connection needs to reach',
      desc: 'We provide internet connectivity solutions for homes, offices and businesses through our reliable telecom network — expanding fiber coverage neighbourhood by neighbourhood.',
      placeholder: 'Enter area or PIN code',
      btnTxt: 'Check',
      hint: 'Try Ranjit Avenue, Model Town, Civil Lines, or 143001.',
    },
    about: {
      headline: 'Telecom infrastructure built for the way people actually connect',
      desc: 'NimbusLink is a telecom infrastructure provider delivering reliable internet connectivity through our own fiber network. We design, lay and maintain the physical backbone — fiber cables, distribution nodes and last-mile connections — so that homes, businesses and entire communities stay online with consistent speed.',
      title: 'Our Services',
    },
    cs: {
      title: 'We\'re Here to Help',
      desc: 'Reach out to our support team through any of the channels below and we\'ll get back to you as quickly as possible.',
    },
  });
  const upd = (s: string, k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p: Record<string, Record<string, string>>) => ({ ...p, [s]: { ...p[s], [k]: e.target.value } }));
  };

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

  const aboutCards = [
    { icon: Shield, title: 'Reliable Connectivity', desc: 'Carrier-grade infrastructure engineered for consistent uptime, day and night.' },
    { icon: Radio, title: 'Fiber Network Solutions', desc: 'End-to-end fiber-optic infrastructure built for high bandwidth and low latency.' },
    { icon: Headphones, title: 'Quality Customer Support', desc: 'A dedicated support team for installation, troubleshooting and account queries.' },
    { icon: Globe, title: 'Connecting Communities', desc: 'From single homes to enterprise offices, advanced technology that scales with you.' },
  ];

  return (
    <AdminShell title="Website Configuration">
      <div className="panel-surface overflow-hidden">
        <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-panel px-3 py-2 scrollbar-thin">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)}
              className={`relative shrink-0 px-3 py-2 text-xs font-medium transition-colors ${active === t ? 'text-brand after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-brand' : 'text-muted-foreground rounded-md hover:bg-panel-2 hover:text-foreground'}`}>{t}</button>
          ))}
          <div className="ml-auto flex shrink-0 items-center gap-2 pl-3">
            {editTab ? (
              <>
                <button onClick={() => setEditTab(null)} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel-2 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground">
                  <RotateCcw className="h-3.5 w-3.5" /> Cancel
                </button>
                <button onClick={() => setEditTab(null)} className="inline-flex items-center gap-1.5 rounded-md bg-[image:var(--gradient-brand)] px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow)] transition active:scale-[0.97]">
                  <Save className="h-3.5 w-3.5" /> Save Changes
                </button>
              </>
            ) : (
              <button onClick={() => setEditTab(active)} className="inline-flex items-center gap-1.5 rounded-md bg-[image:var(--gradient-brand)] px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow)] transition active:scale-[0.97]">
                <Pencil className="h-3.5 w-3.5" /> Edit {active}
              </button>
            )}
          </div>
        </div>
        <div className="p-6">
          {active === 'General' && (editTab === 'General' ? (
            <>
              <SectionTitle>General Settings</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-5 lg:col-span-2">
                  <Field label="Site Name" value={form.general.siteName} onChange={upd('general', 'siteName')} />
                  <Field label="Tagline" value={form.general.tagline} onChange={upd('general', 'tagline')} />
                  <div>
                    <FieldLabel>Logo</FieldLabel>
                    <div className="mt-1.5 flex items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2 p-4">
                      <div className="flex h-14 w-40 items-center justify-center gap-2 rounded-md bg-panel">
                        <Wifi className="h-5 w-5 text-brand" />
                        <span className="font-display text-sm font-semibold text-foreground">NimbusLink</span>
                      </div>
                      <button className="rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Change Logo</button>
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
                      <button className="rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Change Favicon</button>
                      <span className="text-[11px] text-muted-foreground">Recommended: 32×32px, PNG or ICO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Contact Information</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Phone Number" value={form.general.phone} onChange={upd('general', 'phone')} />
                <Field label="Email Address" value={form.general.email} onChange={upd('general', 'email')} />
                <Field label="Office Address" value={form.general.officeAddress} onChange={upd('general', 'officeAddress')} />
                <Field label="Google Maps Embed URL" value={form.general.mapsUrl} onChange={upd('general', 'mapsUrl')} />
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Social Media Links</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <Field label="Facebook URL" value={form.general.facebook} onChange={upd('general', 'facebook')} />
                <Field label="Instagram URL" value={form.general.instagram} onChange={upd('general', 'instagram')} />
                <Field label="Twitter URL" value={form.general.twitter} onChange={upd('general', 'twitter')} />
                <Field label="LinkedIn URL" value={form.general.linkedin} onChange={upd('general', 'linkedin')} />
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Website Status</SectionTitle>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-panel-2 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-success/15 text-success"><ImageIcon className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold text-foreground">Live</div>
                  <div className="text-xs text-muted-foreground">Site last updated 28 May, 2026 · 03:15 PM</div>
                </div>
                <button className="ml-auto rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Toggle Maintenance</button>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>General Settings</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-5 lg:col-span-2">
                  <ViewField label="Site Name">{form.general.siteName}</ViewField>
                  <ViewField label="Tagline">{form.general.tagline}</ViewField>
                  <ViewField label="Logo">
                    <div className="flex h-14 w-40 items-center gap-2 rounded-md bg-panel px-3">
                      <Wifi className="h-5 w-5 text-brand" />
                      <span className="font-display text-sm font-semibold text-foreground">NimbusLink</span>
                    </div>
                  </ViewField>
                </div>
                <ViewField label="Favicon">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                    <Wifi className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                </ViewField>
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Contact Information</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ViewField label="Phone Number">{form.general.phone}</ViewField>
                <ViewField label="Email Address">{form.general.email}</ViewField>
                <ViewField label="Office Address">{form.general.officeAddress}</ViewField>
                <ViewField label="Google Maps Embed URL" small>{form.general.mapsUrl}</ViewField>
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Social Media Links</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <ViewField label="Facebook URL" small>{form.general.facebook}</ViewField>
                <ViewField label="Instagram URL" small>{form.general.instagram}</ViewField>
                <ViewField label="Twitter URL" small>{form.general.twitter}</ViewField>
                <ViewField label="LinkedIn URL" small>{form.general.linkedin}</ViewField>
              </div>
              <div className="my-8 h-px w-full bg-border" />
              <SectionTitle>Website Status</SectionTitle>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-panel-2 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-success/15 text-success"><ImageIcon className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold text-foreground">Live</div>
                  <div className="text-xs text-muted-foreground">Site last updated 28 May, 2026 · 03:15 PM</div>
                </div>
              </div>
            </>
          ))}
          {active === 'Hero Section' && (editTab === 'Hero Section' ? (
            <>
              <SectionTitle>Hero Banner</SectionTitle>
              <p className="mt-1 mb-6 text-xs text-muted-foreground">Main banner displayed at the top of the homepage</p>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Title Line 1" value={form.hero.t1} onChange={upd('hero', 't1')} />
                <Field label="Title Line 2" value={form.hero.t2} onChange={upd('hero', 't2')} />
                <Field label="Title Line 3 (Highlighted)" value={form.hero.t3} onChange={upd('hero', 't3')} />
                <Field label="Title Line 4" value={form.hero.t4} onChange={upd('hero', 't4')} />
              </div>

              <div className="mt-6">
                <FieldLabel>Hero Description</FieldLabel>
                <textarea value={form.hero.desc} onChange={upd('hero', 'desc')} className="mt-1.5 h-24 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="CTA Button Text" value={form.hero.cta} onChange={upd('hero', 'cta')} />
                <Field label="Secondary Button Text" value={form.hero.sec} onChange={upd('hero', 'sec')} />
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
                    <button className="mt-2 rounded-md border border-border bg-panel px-4 py-1.5 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Choose File</button>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Hero Banner</SectionTitle>
              <p className="mt-1 mb-6 text-xs text-muted-foreground">Main banner displayed at the top of the homepage</p>

              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ViewField label="Title Line 1">{form.hero.t1}</ViewField>
                <ViewField label="Title Line 2">{form.hero.t2}</ViewField>
                <ViewField label="Title Line 3 (Highlighted)">{form.hero.t3}</ViewField>
                <ViewField label="Title Line 4">{form.hero.t4}</ViewField>
              </div>

              <div className="mt-6">
                <FieldLabel>Hero Description</FieldLabel>
                <p className="mt-1.5 text-sm text-foreground">{form.hero.desc}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ViewField label="CTA Button Text">{form.hero.cta}</ViewField>
                <ViewField label="Secondary Button Text">{form.hero.sec}</ViewField>
              </div>
            </>
          ))}
          {active === 'About Us' && (editTab === 'About Us' ? (
            <>
              <SectionTitle>About Us</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Headline" value={form.about.headline} onChange={upd('about', 'headline')} />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea value={form.about.desc} onChange={upd('about', 'desc')} className="mt-1.5 h-24 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {aboutCards.map((c) => {
                  const Icon = c.icon;
                  return (
                  <div key={c.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={c.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={c.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title (Our Services)" value={form.about.title} onChange={upd('about', 'title')} />
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>About Us</SectionTitle>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-foreground">{form.about.headline}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{form.about.desc}</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {aboutCards.map((c) => {
                  const IconView = c.icon;
                  return (
                  <div key={c.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                        <IconView className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{c.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{form.about.title}</h3>
              </div>
            </>
          ))}
          {active === 'Services' && (editTab === 'Services' ? (
            <>
              <SectionTitle>Services Section</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" value={form.services.title} onChange={upd('services', 'title')} />
              </div>
              <div className="mt-5">
                <Field label="Subtitle" value={form.services.subtitle} onChange={upd('services', 'subtitle')} />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea value={form.services.desc} onChange={upd('services', 'desc')} className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {services.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Services Section</SectionTitle>
              <ViewField label="Section Title">{form.services.title}</ViewField>
              <div className="mt-4"><ViewField label="Subtitle">{form.services.subtitle}</ViewField></div>
              <div className="mt-4">
                <FieldLabel>Description</FieldLabel>
                <p className="mt-1.5 text-sm text-foreground">{form.services.desc}</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {services.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
          {active === 'Plans' && (editTab === 'Plans' ? (
            <>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                  <div className="panel-surface p-5">
                    <SectionTitle>Section Content</SectionTitle>
                    <div className="mt-4 space-y-4">
                      <Field label="Section Subtitle" value={form.plans.subtitle} onChange={upd('plans', 'subtitle')} />
                      <Field label="Main Heading" value={form.plans.heading} onChange={upd('plans', 'heading')} />
                      <Field label="Highlight Text (optional)" value={form.plans.highlight} onChange={upd('plans', 'highlight')} />
                      <div>
                        <FieldLabel>Description</FieldLabel>
                        <textarea value={form.plans.desc} onChange={upd('plans', 'desc')} className="mt-1.5 h-24 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                  <div className="panel-surface p-5">
                    <SectionTitle>Buttons</SectionTitle>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Primary Button Text" value={form.plans.btn1} onChange={upd('plans', 'btn1')} />
                      <Field label="Primary Button URL" value={form.plans.url1} onChange={upd('plans', 'url1')} />
                      <Field label="Secondary Button Text" value={form.plans.btn2} onChange={upd('plans', 'btn2')} />
                      <Field label="Secondary Button URL" value={form.plans.url2} onChange={upd('plans', 'url2')} />
                    </div>
                  </div>
                  <div className="panel-surface p-5">
                    <div className="flex items-center justify-between">
                      <SectionTitle>Section Visibility</SectionTitle>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" defaultChecked className="peer sr-only" />
                        <div className="h-5 w-9 rounded-full bg-panel-2 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-foreground after:transition-all peer-checked:bg-brand peer-checked:after:translate-x-full" />
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Show the plans section on the website</p>
                  </div>
                  <div className="panel-surface p-5">
                    <SectionTitle>SEO (Optional)</SectionTitle>
                    <div className="mt-4 space-y-4">
                      <Field label="SEO Title" value={form.plans.seoTitle} onChange={upd('plans', 'seoTitle')} />
                      <div>
                        <FieldLabel>SEO Description</FieldLabel>
                        <textarea value={form.plans.seoDesc} onChange={upd('plans', 'seoDesc')} className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
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
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Choose File</button>
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-panel-2 active:scale-[0.97]">Replace</button>
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-panel-2 active:scale-[0.97]">Remove</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <FieldLabel>Upload MP4</FieldLabel>
                            <div className="mt-1 rounded-lg border-2 border-dashed border-border bg-panel-2 p-4 text-center transition hover:border-brand/50">
                              <button className="rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-foreground transition hover:bg-panel-2 active:scale-[0.97]">Choose Video</button>
                            </div>
                          </div>
                          <Field label="YouTube URL" value="" onChange={() => {}} />
                          <Field label="Vimeo URL" value="" onChange={() => {}} />
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
                      <button onClick={() => setStats(prev => [...prev, { id: Date.now(), icon: '📊', value: '', label: '' }])} className="inline-flex items-center gap-1 rounded-md border border-border bg-panel-2 px-2.5 py-1 text-xs font-medium text-foreground transition hover:bg-panel active:scale-[0.97]">
                        <Plus className="h-3.5 w-3.5" /> Add Stat
                      </button>
                    </div>
                    <div className="mt-3 space-y-2">
                      {stats.map((s) => (
                        <div key={s.id} className="flex items-center gap-2 rounded-lg border border-border bg-panel-2 p-2">
                          <input value={s.icon} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, icon: e.target.value } : st))} className="h-8 w-10 rounded-md border border-border bg-panel text-center text-lg focus:border-brand focus:outline-none" />
                          <input value={s.value} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, value: e.target.value } : st))} placeholder="Value" className="h-8 flex-1 rounded-md border border-border bg-panel px-2 text-sm text-foreground focus:border-brand focus:outline-none" />
                          <input value={s.label} onChange={(e) => setStats(prev => prev.map(st => st.id === s.id ? { ...st, label: e.target.value } : st))} placeholder="Label" className="h-8 flex-1 rounded-md border border-border bg-panel px-2 text-sm text-foreground focus:border-brand focus:outline-none" />
                          <button onClick={() => setStats(prev => prev.filter(st => st.id !== s.id))} className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition hover:bg-destructive/15 hover:text-destructive">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel-surface overflow-hidden p-5">
                    <SectionTitle>Plans List</SectionTitle>
                    <div className="mt-3 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2/50 py-8">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-panel text-muted-foreground/40">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
                      </div>
                      <p className="text-sm font-medium text-foreground">No Plans Added</p>
                      <p className="text-center text-xs text-muted-foreground max-w-[220px]">Plans will appear here once configured in the pricing section.</p>
                    </div>
                  </div>
                  <div className="panel-surface overflow-hidden p-5">
                    <SectionTitle>Live Preview</SectionTitle>
                    <div className="mt-3 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2/50 py-8">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-panel text-muted-foreground/40">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                      </div>
                      <p className="text-sm font-medium text-foreground">Preview Unavailable</p>
                      <p className="text-center text-xs text-muted-foreground max-w-[220px]">Save the tab content to see a live preview of the plans section.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                  <div className="panel-surface p-5">
                    <SectionTitle>Section Content</SectionTitle>
                    <dl className="mt-4 space-y-3">
                      <ViewField label="Section Subtitle">{form.plans.subtitle}</ViewField>
                      <ViewField label="Main Heading">{form.plans.heading}</ViewField>
                      <ViewField label="Highlight Text">{form.plans.highlight}</ViewField>
                      <div>
                        <FieldLabel>Description</FieldLabel>
                        <p className="mt-1.5 text-sm text-foreground">{form.plans.desc}</p>
                      </div>
                    </dl>
                  </div>
                  <div className="panel-surface p-5">
                    <SectionTitle>Buttons</SectionTitle>
                    <dl className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                      <ViewField label="Primary Button Text">{form.plans.btn1}</ViewField>
                      <ViewField label="Primary URL">{form.plans.url1}</ViewField>
                      <ViewField label="Secondary Button Text">{form.plans.btn2}</ViewField>
                      <ViewField label="Secondary URL">{form.plans.url2}</ViewField>
                    </dl>
                  </div>
                  <div className="panel-surface p-5">
                    <SectionTitle>SEO</SectionTitle>
                    <dl className="mt-4 space-y-3">
                      <ViewField label="SEO Title">{form.plans.seoTitle}</ViewField>
                      <div>
                        <FieldLabel>SEO Description</FieldLabel>
                        <p className="mt-1.5 text-sm text-foreground">{form.plans.seoDesc}</p>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="panel-surface p-5">
                    <SectionTitle>Statistics</SectionTitle>
                    <div className="mt-3 space-y-2">
                      {stats.map((s) => (
                        <div key={s.id} className="flex items-center gap-2 rounded-lg border border-border bg-panel-2 px-3 py-2">
                          <span className="text-lg">{s.icon}</span>
                          <span className="text-sm font-semibold text-foreground">{s.value}</span>
                          <span className="text-xs text-muted-foreground">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel-surface overflow-hidden p-5">
                    <SectionTitle>Plans List</SectionTitle>
                    <div className="mt-3 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2/50 py-8">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-panel text-muted-foreground/40">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
                      </div>
                      <p className="text-sm font-medium text-foreground">No Plans Added</p>
                      <p className="text-center text-xs text-muted-foreground max-w-[220px]">Plans will appear here once configured in the pricing section.</p>
                    </div>
                  </div>
                  <div className="panel-surface overflow-hidden p-5">
                    <SectionTitle>Live Preview</SectionTitle>
                    <div className="mt-3 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-panel-2/50 py-8">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-panel text-muted-foreground/40">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                      </div>
                      <p className="text-sm font-medium text-foreground">Preview Unavailable</p>
                      <p className="text-center text-xs text-muted-foreground max-w-[220px]">Save the tab content to see a live preview of the plans section.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-panel-2 px-4 py-2.5 text-sm text-muted-foreground">
                  <input type="checkbox" defaultChecked className="accent-brand" />
                  Section Visible
                </label>
              </div>
            </>
          ))}
          {active === 'Process' && (editTab === 'Process' ? (
            <>
              <SectionTitle>Process Section</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" value={form.process.title} onChange={upd('process', 'title')} />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea value={form.process.desc} onChange={upd('process', 'desc')} className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {processSteps.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Process Section</SectionTitle>
              <ViewField label="Section Title">{form.process.title}</ViewField>
              <div className="mt-4">
                <FieldLabel>Description</FieldLabel>
                <p className="mt-1.5 text-sm text-foreground">{form.process.desc}</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {processSteps.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
          {active === 'Why Choose Us' && (editTab === 'Why Choose Us' ? (
            <>
              <SectionTitle>Why Choose Us Section</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" value={form.wcu.title} onChange={upd('wcu', 'title')} />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {whyChooseUs.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1 space-y-3">
                        <input defaultValue={s.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        <textarea defaultValue={s.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Why Choose Us Section</SectionTitle>
              <ViewField label="Section Title">{form.wcu.title}</ViewField>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {whyChooseUs.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
          {active === 'Coverage' && (editTab === 'Coverage' ? (
            <>
              <SectionTitle>Coverage Section</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" value={form.coverage.title} onChange={upd('coverage', 'title')} />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea value={form.coverage.desc} onChange={upd('coverage', 'desc')} className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <SectionTitle>Coverage Categories</SectionTitle>
                  <button onClick={() => setCoverageCats(prev => [...prev, { id: Date.now(), label: '' }])} className="inline-flex items-center gap-1 rounded-md border border-border bg-panel-2 px-2.5 py-1 text-xs font-medium text-foreground transition hover:bg-panel active:scale-[0.97]">
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
                  <Field label="Input Placeholder" value={form.coverage.placeholder} onChange={upd('coverage', 'placeholder')} />
                  <Field label="Button Text" value={form.coverage.btnTxt} onChange={upd('coverage', 'btnTxt')} />
                </div>
                <div className="mt-4">
                  <Field label="Hint Text" value={form.coverage.hint} onChange={upd('coverage', 'hint')} />
                </div>
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Coverage Section</SectionTitle>
              <ViewField label="Section Title">{form.coverage.title}</ViewField>
              <div className="mt-4">
                <FieldLabel>Description</FieldLabel>
                <p className="mt-1.5 text-sm text-foreground">{form.coverage.desc}</p>
              </div>
              <div className="mt-6">
                <SectionTitle>Coverage Categories</SectionTitle>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coverageCats.map((c) => (
                    <span key={c.id} className="rounded-lg border border-border bg-panel-2 px-3 py-1.5 text-xs font-medium text-foreground">{c.label}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <SectionTitle>Coverage Check</SectionTitle>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ViewField label="Input Placeholder">{form.coverage.placeholder}</ViewField>
                  <ViewField label="Button Text">{form.coverage.btnTxt}</ViewField>
                </div>
                <div className="mt-4">
                  <ViewField label="Hint Text">{form.coverage.hint}</ViewField>
                </div>
              </div>
            </>
          ))}
          {active === 'Customer Support' && (editTab === 'Customer Support' ? (
            <>
              <SectionTitle>Customer Support Section</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Section Title" value={form.cs.title} onChange={upd('cs', 'title')} />
              </div>
              <div className="mt-5">
                <FieldLabel>Description</FieldLabel>
                <textarea value={form.cs.desc} onChange={upd('cs', 'desc')} className="mt-1.5 h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {supportCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <input defaultValue={c.title} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                          <textarea defaultValue={c.desc} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
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
                    <div key={i} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <input defaultValue={faq.q} className="h-9 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm font-semibold text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                          <textarea defaultValue={faq.a} className="h-20 w-full resize-y rounded-lg border border-border bg-panel-2 p-3 text-xs text-muted-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-lg border border-warning/15 bg-warning/[0.03] px-4 py-3">
                <p className="text-xs text-warning">Unsaved changes will be lost on navigation</p>
              </div>
            </>
          ) : (
            <>
              <SectionTitle>Customer Support Section</SectionTitle>
              <ViewField label="Section Title">{form.cs.title}</ViewField>
              <div className="mt-4">
                <FieldLabel>Description</FieldLabel>
                <p className="mt-1.5 text-sm text-foreground">{form.cs.desc}</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {supportCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-xl border border-border bg-gradient-to-b from-panel to-panel-2 p-5 shadow-[var(--shadow-panel)] transition-all hover:border-brand/30 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-glow)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground">{c.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <SectionTitle>FAQ Items</SectionTitle>
                <div className="mt-4 space-y-2">
                  {faqItems.map((faq, i) => (
                    <div key={i} className="rounded-lg border border-border bg-panel-2 px-4 py-3">
                      <p className="text-sm font-semibold text-foreground">{i + 1}. {faq.q}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">{children}</h3>;
}
function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium text-muted-foreground">{children}</label>;
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input value={value} onChange={onChange} className="mt-1.5 h-10 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}
function ViewField({ label, children, small }: { label: string; children: React.ReactNode; small?: boolean }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className={`mt-1.5 text-foreground ${small ? 'truncate text-xs text-muted-foreground' : 'text-sm'}`}>{children}</div>
    </div>
  );
}
