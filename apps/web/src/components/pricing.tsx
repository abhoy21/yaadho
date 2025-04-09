import { Button } from "@repo/ui/button";
import { Check, X, Zap } from "lucide-react";

interface PricingProps {
  name: string;
  description: string;
  price: string;
  isPopular: boolean;
  features: string[];
}

function PricingCard({
  name,
  description,
  price,
  isPopular,
  features,
}: PricingProps): React.JSX.Element {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
        isPopular
          ? "bg-primary z-10 text-white shadow-xl md:scale-105"
          : "text-primary border border-gray-200 bg-white shadow-sm hover:-translate-y-1"
      }`}
    >
      {isPopular && (
        <div className="animate-float absolute -right-4 -top-4 hidden -rotate-12 transform rounded-xl bg-yellow-50 p-2 shadow-lg md:block">
          <Zap className="h-10 w-10 text-yellow-400" />
        </div>
      )}

      <h3 className="mb-4 text-2xl font-bold">{name}</h3>
      <p
        className={`mb-6 text-sm ${isPopular ? "text-blue-100" : "text-gray-500"}`}
      >
        {description}
      </p>

      <div className="mb-6 flex items-end gap-2">
        <h3 className="text-5xl font-bold">{price}</h3>
        <p className={`${isPopular ? "text-blue-100" : "text-gray-500"}`}>
          /month
        </p>
      </div>

      <Button
        className={`mb-8 w-full rounded-full px-6 py-3 text-lg font-medium transition-all duration-300 ${
          isPopular === true
            ? "bg-white text-cyan-500/90 hover:bg-white/90 hover:text-cyan-500/45"
            : "bg-primary hover:bg-primary/90 text-white"
        }`}
        text="Get started"
      />

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li className="flex items-center gap-3" key={index}>
            {isPopular || index < 2 ? (
              <Check
                className={`h-6 w-6 ${isPopular ? "text-blue-100" : "text-primary"}`}
              />
            ) : (
              <X className="h-6 w-6 text-gray-300" />
            )}
            <span
              className={`text-md ${isPopular ? "font-semibold text-white" : index < 2 ? "font-semibold text-gray-800" : "text-gray-500"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals getting started",
    price: "$5",
    isPopular: false,
    features: [
      "Unlimited tasks",
      "Basic integrations",
      "1GB file storage",
      "Community support",
      "Up to 5 projects",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for small teams and professionals",
    price: "$20",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Advanced integrations",
      "10GB file storage",
      "Priority support",
      "Unlimited projects",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "$50",
    isPopular: false,
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom domains",
      "Enterprise analytics",
    ],
  },
];

export default function Pricing(): React.JSX.Element {
  return (
    <div className="animate-fade-in-up py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-16 text-center">
          <h3 className="text-md shadow-secondary/45 mx-auto w-48 rounded-full bg-transparent px-4 py-2 font-medium tracking-widest text-gray-500 shadow-md">
            PRICING
          </h3>
          <h1 className="my-6 text-4xl font-bold tracking-wide text-gray-900">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Choose the perfect plan for your needs. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up delay-400 mt-16 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Need something custom?
          </h3>
          <p className="mb-6 text-gray-600">
            We offer tailored solutions for businesses with unique requirements.
          </p>
          <Button
            className="mx-auto rounded-full bg-gray-900 px-8 py-3 text-lg font-medium text-white hover:bg-gray-800"
            text="Contact sales"
          />
        </div>
      </div>
    </div>
  );
}
