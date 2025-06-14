
import React, { Suspense } from "react";

// Lazy load components
const Hero = React.lazy(() => import("@/components/Hero"));
const Services = React.lazy(() => import("@/components/Services"));
const Stats = React.lazy(() => import("@/components/Stats"));
const Contact = React.lazy(() => import("@/components/Contact"));

// Component loader
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg h-32 w-full max-w-md"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans">
      <Suspense fallback={<ComponentLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
