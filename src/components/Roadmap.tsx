import React from 'react';
import { Wallet, BarChart3, Building2, Gamepad2 } from 'lucide-react';

export default function Roadmap() {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Roadmap to Success</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our strategic plan for growth and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RoadmapCard
            icon={<Wallet className="w-12 h-12" />}
            phase="Phase 1"
            title="Staking Rewards"
            description="Launch of staking program with competitive APY rewards for long-term holders"
            features={[
              "Smart contract development",
              "Security audit",
              "Staking dashboard",
              "Reward distribution system"
            ]}
          />

          <RoadmapCard
            icon={<BarChart3 className="w-12 h-12" />}
            phase="Phase 2"
            title="Analytics Dashboard"
            description="Comprehensive analytics platform for real-time token metrics and donation tracking"
            features={[
              "Token metrics tracking",
              "Donation transparency",
              "Holder analytics",
              "Impact reporting"
            ]}
          />

          <RoadmapCard
            icon={<Building2 className="w-12 h-12" />}
            phase="Phase 3"
            title="Exchange Listings"
            description="Strategic expansion to major cryptocurrency exchanges"
            features={[
              "Top-tier exchange listings",
              "Market maker partnerships",
              "Increased liquidity",
              "Global accessibility"
            ]}
          />

          <RoadmapCard
            icon={<Gamepad2 className="w-12 h-12" />}
            phase="Phase 4"
            title="NFTs & Metaverse"
            description="Integration with digital collectibles and virtual worlds"
            features={[
              "NFT collection launch",
              "Metaverse partnerships",
              "Virtual events",
              "Community governance"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function RoadmapCard({ 
  icon, 
  phase, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  phase: string; 
  title: string; 
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 mb-6 mx-auto">
        {icon}
      </div>
      <div className="text-blue-400 font-semibold mb-2 text-center">{phase}</div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-400 mb-4 text-center">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}