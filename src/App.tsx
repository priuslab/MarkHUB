/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Navbar, 
  Hero, 
  Segmentation, 
  WhatYouGet,
  ArchiveSection, 
  Schedule, 
  SocialProof, 
  Pricing, 
  Accreditation, 
  Footer 
} from "./components/MarkHubComponents";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container/30">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Segmentation />
        <WhatYouGet />
        <ArchiveSection />
        <Schedule />
        <SocialProof />
        <Pricing />
        <Accreditation />
      </main>
      <Footer />
    </div>
  );
}
