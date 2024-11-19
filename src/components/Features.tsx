import React from 'react';
import { Shield, Coins, Users, Lock, Rocket, Heart } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BorderBucks?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A community-driven token with a mission to support border security while providing innovative blockchain solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-600" />}
            title="Security First"
            description="Fully audited smart contract with locked liquidity ensuring your investment is protected."
          />
          <FeatureCard
            icon={<Coins className="w-8 h-8 text-blue-600" />}
            title="Tokenomics"
            description="Transparent tokenomics with 2% of transactions supporting border security initiatives."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-600" />}
            title="Strong Community"
            description="Join thousands of like-minded individuals supporting border security through crypto."
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-blue-600" />}
            title="Locked Liquidity"
            description="100% of liquidity locked for 5 years, ensuring long-term stability."
          />
          <FeatureCard
            icon={<Rocket className="w-8 h-8 text-blue-600" />}
            title="Growth Potential"
            description="Strategic partnerships and continuous development driving token value."
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-blue-600" />}
            title="Real Impact"
            description="Direct support for border patrol equipment, training, and resources."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}