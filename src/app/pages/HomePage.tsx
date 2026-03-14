import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { VehicleShowcase } from '../components/VehicleShowcase';
import { Products } from '../components/Products';
import { ChargingNetwork } from '../components/ChargingNetwork';
import { CTABanner } from '../components/CTABanner';

export function HomePage() {
  return (
    <div className="pt-20">
      <Hero />
      <Features />
      <VehicleShowcase />
      <Products />
      <ChargingNetwork />
      <CTABanner />
    </div>
  );
}
